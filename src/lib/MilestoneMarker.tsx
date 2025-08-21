// // MilestoneMarker.jsx - Individual milestone marker component

// import { eventTypeColors } from './milestones';
// import {
//   calculateMarkerPosition,
//   createMilestoneClickHandler
// } from './journeyUtils';
// import {
//   Award,
//   Trophy,
//   Briefcase,
//   Users,
//   Crown,
//   GraduationCap,
//   Star,
//   Target,
//   Zap
// } from 'lucide-react';

// // Icon mapping based on milestone type
// const getIconForMilestone = (milestone) => {
//   // First check for specific milestone titles for more precise icons
//   const title = milestone.title.toLowerCase();
  
//   if (title.includes('graduation') || title.includes('graduate') || title.includes('college')) {
//     return GraduationCap;
//   }
//   if (title.includes('award') || title.includes('mvp')) {
//     return Trophy;
//   }
//   if (title.includes('promotion') || title.includes('promoted')) {
//     return Star;
//   }
//   if (title.includes('hackathon')) {
//     return Zap;
//   }
  
//   // Fall back to type-based icons
//   switch (milestone.type) {
//     case 'milestone':
//       return Target;
//     case 'achievement':
//       return Award;
//     case 'experience':
//       return Briefcase;
//     case 'mentorship':
//       return Users;
//     case 'leadership':
//       return Crown;
//     default:
//       return Star;
//   }
// };

// export const MilestoneMarker = ({ milestone, milestoneIndex, selectedMilestone, setSelectedMilestone }) => {
//   const position = calculateMarkerPosition(milestone, milestoneIndex);
//   const eventColor = eventTypeColors[milestone.type];
//   const IconComponent = getIconForMilestone(milestone);
  
//   const handleClick = createMilestoneClickHandler(milestone, selectedMilestone, setSelectedMilestone);

//   return (
//     <div
//       className="absolute transform -translate-x-1/2 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 pointer-events-auto"
//       style={{
//         left: `${position.x}%`,
//         top: `${(position.y / 400) * 100}%`,
//         zIndex: 10,
//         transform: position.isAbove ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(0%)'
//       }}
//       onClick={handleClick}
//     >
//       {/* Round Icon Marker */}
//       <div className="relative group">
//         {/* Round Icon Container */}
//         <div
//           className={`w-10 h-10 rounded-full relative transform transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-white ${
//             selectedMilestone?.id === milestone.id ? 'scale-125 shadow-xl ring-4 ring-white/50' : 'hover:shadow-xl'
//           }`}
//           style={{
//             backgroundColor: eventColor,
//             boxShadow: selectedMilestone?.id === milestone.id
//               ? `0 8px 32px ${eventColor}40, 0 0 0 4px ${eventColor}20`
//               : `0 4px 16px ${eventColor}30`
//           }}
//         >
//           <IconComponent
//             size={20}
//             className="text-white drop-shadow-sm"
//             strokeWidth={2.5}
//           />
          
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/10 rounded-full"></div>
//         </div>

//         {/* Hover tooltip - FIXED positioning */}
//          {/* <div
//   className={`absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-30 ${
//     position.isAbove ? 'bottom-full mb-4' :'top-full mt-4'
//   } group-hover:scale-105`}
// >
//             <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap max-w-48 text-center shadow-2xl border border-white/10">
//     <div className="font-medium">{milestone.title}</div>
//     <div className="text-[10px] opacity-75 mt-1">{milestone.date}</div>
//     <div
//       className="text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block"
//       style={{ backgroundColor: eventTypeColors[milestone.type] + '40' }}
//     >
//       {milestone.type}
//     </div>
//   </div>
//        <div className={`absolute left-1/2 transform -translate-x-1/2 ${
//     position.isAbove ? 'top-full' : 'bottom-full'
//   }`}>
//     <div className={`w-0 h-0 border-l-4 border-r-4 border-transparent ${
//       position.isAbove ? 'border-t-4 border-t-black/90' : 'border-b-4 border-b-black/90'
//         // Arrow points up toward icon above
//         // Arrow points down toward icon below
//     }`}></div>
//   </div>
//         </div> */}

//         {/* Selected glow effect */}
//         {selectedMilestone?.id === milestone.id && (
//           <div
//             className="absolute inset-0 w-10 h-10 rounded-full blur-lg -z-10 opacity-60 animate-pulse"
//             style={{ backgroundColor: eventColor }}
//           ></div>
//         )}
//       </div>
//     </div>
//   );
// };

// MilestoneMarker.jsx

import { eventTypeColors } from './milestones';
import { calculateMarkerPosition, createMilestoneClickHandler } from './journeyUtils';
import {
  Award,
  Trophy,
  Briefcase,
  Users,
  Crown,
  GraduationCap,
  Star,
  Target,
  Zap
} from 'lucide-react';
import { motion } from "framer-motion";

// Map milestone to icon
const getIconForMilestone = (milestone) => {
  const title = milestone.title.toLowerCase();

  if (title.includes('graduation') || title.includes('graduate') || title.includes('college')) return GraduationCap;
  if (title.includes('award') || title.includes('mvp')) return Trophy;
  if (title.includes('promotion') || title.includes('promoted')) return Star;
  if (title.includes('hackathon')) return Zap;

  switch (milestone.type) {
    case 'm': return Target;
    case 'achievement': return Award;
    case 'experience': return Briefcase;
    case 'mentorship': return Users;
    case 'leadership': return Crown;
    default: return Star;
  }
};

interface MilestoneMarkerProps {
  milestone: Milestone;
  milestoneIndex: number;
  selectedMilestone: Milestone | null;
  setSelectedMilestone: (m: Milestone) => void;
  setActivePhase: (m: Milestone) => void;
  style: React.CSSProperties;
}
export const MilestoneMarker = ({
  milestone,
  milestoneIndex,
  selectedMilestone,
  setSelectedMilestone,
  setActivePhase,
  style
}: MilestoneMarkerProps) => {
  
  const IconComponent = getIconForMilestone(milestone);
  const eventColor = eventTypeColors[milestone.type];
  const handleClick = createMilestoneClickHandler(milestone, selectedMilestone, setSelectedMilestone, setActivePhase);
  const isSelected = selectedMilestone?.id === milestone.id;
  const isAbove = milestoneIndex % 2 === 0;

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
      style={style}
      onClick={handleClick}
    >
      <div
          className={`w-7 h-7 rounded-full flex items-center justify-center border-2 border-white transition-all duration-300 ${
            isSelected ? 'scale-125 shadow-xl ring-4 ring-white/50' : 'hover:scale-110 hover:shadow-lg'
          }`}
          style={{
            backgroundColor: eventColor,
            boxShadow: isSelected
              ? `0 8px 32px ${eventColor}40, 0 0 0 4px ${eventColor}20`
              : `0 4px 16px ${eventColor}30`
          }}
      >
        <IconComponent size={15} className="text-white drop-shadow-sm" strokeWidth={2.5} />
         <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/10 rounded-full"></div>
        {isSelected && (
          <div className={`${isAbove ? 'bottom-full mb-3' : 'top-full mt-3'} absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg border z-40 min-w-48 `}>
          <div className="text-xs font-medium text-gray-800">{milestone.title}</div>
            <div className="text-xs text-gray-500">{milestone.date}</div>
            <div className={`absolute left-1/2 transform -translate-x-1/2 ${isAbove ? 'top-full' : 'bottom-full'}`}>
             <div
              className={`w-0 h-0 border-l-4 border-r-4 border-transparent ${
                isAbove ? 'border-t-4 border-t-white/90' : 'border-b-4 border-b-white/90'
              }`}
            />
          </div>
          </div>
      )}
      </div>
    </motion.div>

  );
};