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
export const calculatePathYPosition = (xPosition) => {
  const pathProgress = xPosition / 100;
  
  // Simplified curve that stays more centered
  if (pathProgress < 0.33) {
    return 200 - 40 * Math.sin(pathProgress * Math.PI * 3);
  } else if (pathProgress < 0.66) {
    return 180 + 30 * Math.sin((pathProgress - 0.33) * Math.PI * 3);
  } else {
    return 190 - 20 * Math.sin((pathProgress - 0.66) * Math.PI * 3);
  }
};

/**
 * Calculate marker position with alternating above/below path placement
 */
export const calculateMarkerPosition = (milestone, milestoneIndex) => {
  const xPosition = calculateMilestonePosition(milestone);
  const baseYPosition = calculatePathYPosition(xPosition);
  
  // Alternate markers above and below the path
  const isAbove = milestoneIndex % 2 === 0;
  const offset = 60; // Distance from path
  
  const yPosition = isAbove 
    ? Math.max(baseYPosition - offset, 80)  // Above path, with minimum distance from top
    : Math.min(baseYPosition + offset, 320); // Below path, with maximum distance from bottom
  
  return {
    x: Math.max(5, Math.min(xPosition, 95)), // Keep within 5-95% with smaller margins
    y: yPosition,
    isAbove
  };
};

/**
 * Get milestones for a specific phase
 */
export const getMilestonesByPhase = (milestones, phaseId) => {
  return milestones.filter(milestone => milestone.phase === phaseId);
};

/**
 * Create click handler for milestone with animation
 */
export const createMilestoneClickHandler = (milestone, selectedMilestone, setSelectedMilestone) => {
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
  };
};

/**
 * Create click handler for phase with animation and ripple effect
 */
export const createPhaseClickHandler = (
  phaseId, 
  setActivePhase, 
  setSelectedMilestone, 
  setClickedPhase, 
  setClickPosition
) => {
  return (event) => {
    // Capture click position for ripple effect
    const rect = event.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    
    // Trigger pop animation
    setClickedPhase(phaseId);
    
    // Add scale animation to the entire phase
    const element = event.currentTarget;
    element.style.transform = 'scale(1.08)';
    element.style.zIndex = '20';
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
      element.style.zIndex = 'auto';
      setClickedPhase(null);
    }, 200);
    
    setActivePhase(phaseId);
    setSelectedMilestone(null);
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