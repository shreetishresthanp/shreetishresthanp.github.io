// journeyUtils.js - Utility functions for the Journey component
import { dateMapping } from './milestones';

/**
 * Calculate proportional position of a milestone on the timeline
 */
export const calculateMilestonePosition = (milestone) => {
  const startDate = dateMapping['Aug 2018'];
  const endDate = dateMapping['Aug 2025'];
  const milestoneDate = dateMapping[milestone.date];
  
  if (!milestoneDate) {
    console.warn(`Date not found for milestone: ${milestone.date}`);
    return 0;
  }
  
  const totalDuration = endDate - startDate;
  const milestoneProgress = milestoneDate - startDate;
  
  return (milestoneProgress / totalDuration) * 100;
};

/**
 * Calculate Y position along the curved path based on X progress
 * Returns the base path position (markers will be offset above/below this)
 */
// Utility to evaluate a quadratic Bézier curve
const quadraticBezier = (t: number, p0: number, p1: number, p2: number): number => {
  return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
};

/**
 * Given an x position (0 - 1000), calculate approximate y on the winding path.
 */
export const calculatePathYPosition = (xPosition: number): number => {
  // Define path segments based on your SVG d attribute
  // Each segment has: startX, endX, startY, controlY, endY
  const segments = [
    { startX: 0,   endX: 200, startY: 194, controlY: 158, endY: 174 },  // first Q
    { startX: 200, endX: 400, startY: 174, controlY: 214, endY: 174 },
    { startX: 400, endX: 600, startY: 174, controlY: 134, endY: 184 },
    { startX: 600, endX: 800, startY: 184, controlY: 224, endY: 194 },
    { startX: 800, endX: 1000,startY: 194, controlY: 164, endY: 194 },
  ];

  // Find which segment xPosition falls into
  const seg = segments.find(s => xPosition >= s.startX && xPosition <= s.endX);
  if (!seg) return 200; // default baseline if out of range

  // Normalize t between 0 and 1 for the segment
  const t = (xPosition - seg.startX) / (seg.endX - seg.startX);

  // Compute quadratic Bézier Y
  return quadraticBezier(t, seg.startY, seg.controlY, seg.endY);
};

/**
 * Calculate marker position with alternating above/below path placement
 */
export const calculateXPosition = (milestone) => {
  const xPosition = calculateMilestonePosition(milestone);
  return Math.max(5, Math.min(xPosition, 95)) * 10; // Keep within 5-95% with smaller margins
};

// Utility: get path point + tangent at a given x
export function getPointAndTangentAtX(path: SVGPathElement, x: number) {
  const totalLength = path.getTotalLength();

  // Binary search to find length where point.x ~ target x
  let start = 0;
  let end = totalLength;
  let targetPoint: DOMPoint | null = null;

  while (start <= end) {
    const mid = (start + end) / 2;
    const pt = path.getPointAtLength(mid);

    if (Math.abs(pt.x - x) < 0.5) {
      targetPoint = pt;
      break;
    } else if (pt.x < x) {
      start = mid + 0.5;
    } else {
      end = mid - 0.5;
    }
  }

  if (!targetPoint) {
    targetPoint = path.getPointAtLength(start);
  }

  // Get tangent (slope) by looking slightly ahead
  const ahead = path.getPointAtLength(Math.min(totalLength, start + 1));
  const tangent = { dx: ahead.x - targetPoint.x, dy: ahead.y - targetPoint.y };

  return { point: targetPoint, tangent };
}

// Calculate marker position hugging the curve
export function calculateYPosition(
  path: SVGPathElement,
  x: number,
  globalIndex: number,
  offset: number = 30
) {
  const { point, tangent } = getPointAndTangentAtX(path, x);

  // Perpendicular vector
  const perp = { dx: -tangent.dy, dy: tangent.dx };
  const length = Math.sqrt(perp.dx * perp.dx + perp.dy * perp.dy);

  // Normalize
  const ux = perp.dx / length;
  const uy = perp.dy / length;

    // Use global index for alternating pattern across entire timeline
  const isAbove = globalIndex % 2 === 0;
  const finalOffset = isAbove ? offset : -offset;

  return {
    x: point.x + ux * finalOffset,
    y: point.y + uy * finalOffset,
  };
}


/**
 * Get milestones for a specific phase, sorted from latest to oldest
 */
export const getMilestonesByPhase = (milestones, phaseId) => {
  const phaseMilestones = milestones.filter(milestone => milestone.phase === phaseId);
  
  // Sort by date in descending order (latest to oldest)
  return phaseMilestones.sort((a, b) => {
    // Convert date strings to comparable format
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });
};

/**
 * Create click handler for milestone with animation
 */
export const createMilestoneClickHandler = (milestone, selectedMilestone, setSelectedMilestone, setActivePhase) => {  
  return (e) => {
    e.stopPropagation();
    
    // Add pop effect to the milestone marker
    const element = e.currentTarget;
    const currentTransform = element.style.transform || 'translate(-50%, -50%) scale(1)';
    element.style.transform = currentTransform.replace('scale(1)', 'scale(1.15)');
    setTimeout(() => {
      element.style.transform = currentTransform.replace('scale(1.15)', 'scale(1)');
    }, 150);
    
    setSelectedMilestone(selectedMilestone?.id === milestone.id ? null : milestone);
    setActivePhase(milestone.phase);

  };
};

/**
 * Create card click handler for milestone cards
 */
export const createMilestoneCardClickHandler = (milestone, setSelectedMilestone) => {
  return (e) => {
    // Add pop effect to the milestone card
    const element = e.currentTarget;
    element.style.transform = 'scale(1.05)';
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 150);
    
    setSelectedMilestone(milestone);
  };
};

/**
 * Get phase styling for active/inactive states
 */
export const getPhaseStyles = (phase, isActive) => {
  return {
    backgroundColor: isActive ? 
      phase.color.replace(')', ', 0.15)').replace('rgb', 'rgba').replace('#', 'rgba(') + ', 0.15)' :
      phase.bgColor,
    boxShadow: isActive ? `inset 0 2px 8px ${phase.color}15` : 'none'
  };
};

/**
 * Get active color variants for phase text
 */
export const getPhaseTextColors = (phase, isActive) => {
  if (isActive) {
    // Generate lighter variants for active state
    const baseColor = phase.color;
    return {
      title: baseColor === '#64748b' ? '#475569' : 
             baseColor === '#92400e' ? '#a16207' : '#7c2d7c',
      period: baseColor
    };
  }
  return {
    title: phase.color,
    period: phase.color
  };
};

/**
 * Generate floating particles data
 */
export const generateFloatingParticles = (count = 15) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + i * 6}%`,
    top: `${30 + Math.sin(i * 0.5) * 40}%`,
    animationDelay: `${i * 0.3}s`,
    animationDuration: `${4 + i * 0.1}s`
  }));
};

// pathRef: ref to your SVG path
export const getPathPointAtProgress = (pathRef, progress) => {
  if (!pathRef?.current) return { x: 0, y: 0 };
  const path = pathRef.current;
  const length = path.getTotalLength();
  const point = path.getPointAtLength(progress * length);
  return { x: point.x, y: point.y };
};
