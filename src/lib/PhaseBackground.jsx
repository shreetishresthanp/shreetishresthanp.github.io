// PhaseBackground.jsx - Individual phase background component

import { getPhaseStyles, getPhaseTextColors, createPhaseClickHandler } from './journeyUtils';

export const PhaseBackground = ({ 
  phase, 
  isActive, 
  clickedPhase, 
  clickPosition,
  onPhaseClick 
}) => {
  const phaseStyles = getPhaseStyles(phase, isActive);
  const textColors = getPhaseTextColors(phase, isActive);
  const width = phase.endPercent - phase.startPercent;
  
  // Get appropriate ripple color based on phase
  const getRippleColor = (phaseId) => {
    switch (phaseId) {
      case 'college': return 'bg-slate-400/25';
      case 'industry': return 'bg-amber-600/25';
      case 'research': return 'bg-purple-500/25';
      default: return 'bg-gray-400/25';
    }
  };

  return (
    <div 
      className="absolute top-0 h-full cursor-pointer group overflow-hidden hover:scale-102 transition-all duration-300 ease-out"
      style={{
        left: `${phase.startPercent}%`,
        width: `${width}%`,
        transformOrigin: 'center center',
        borderRight: phase.id !== 'research' ? `1px solid ${phase.color}1a` : 'none',
        ...phaseStyles
      }}
      onClick={onPhaseClick}
    >
      {/* Click ripple effect */}
      {clickedPhase === phase.id && (
        <div 
          className={`absolute rounded-full ${getRippleColor(phase.id)} animate-ping pointer-events-none`}
          style={{
            left: `${clickPosition.x - 20}px`,
            top: `${clickPosition.y - 20}px`,
            width: '40px',
            height: '40px',
            animationDuration: '500ms'
          }}
        />
      )}
      
      <div className="absolute top-4 left-4">
        <div className="text-sm font-medium mb-1 transition-colors duration-300" 
             style={{ color: textColors.title }}>
          {phase.title.split(' - ')[0]}
        </div>
        <div className="text-xs opacity-75 transition-colors duration-300" 
             style={{ color: textColors.period }}>
          {phase.period}
        </div>
      </div>
    </div>
  );
};