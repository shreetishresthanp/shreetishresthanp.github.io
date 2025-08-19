// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { GraduationCap, Briefcase, BookOpen, MapPin, Calendar, ArrowRight } from 'lucide-react';

// interface TimelineEvent {
//   id: string;
//   date: string;
//   title: string;
//   description: string;
//   type: 'education' | 'work' | 'milestone';
//   location?: string;
//   details?: string[];
//   icon: React.ElementType;
// }

// export const JourneySection = () => {
//   const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

//   const timelineEvents: TimelineEvent[] = [
//     {
//       id: 'undergrad',
//       date: 'May 2020',
//       title: 'College Graduation',
//       description: 'Graduated with Bachelor\'s degree',
//       type: 'education',
//       location: 'University Name',
//       details: [
//         'Bachelor of Science in Computer Science',
//         'Magna Cum Laude',
//         'Relevant coursework: Data Structures, Algorithms, Machine Learning'
//       ],
//       icon: GraduationCap
//     },
//     {
//       id: 'first-job',
//       date: 'July 2020',
//       title: 'Started First Job',
//       description: 'Software Engineer at Tech Company',
//       type: 'work',
//       location: 'Company Name',
//       details: [
//         'Full-stack development with Python and React',
//         'Worked on ML pipeline optimization',
//         'Collaborated with cross-functional teams'
//       ],
//       icon: Briefcase
//     },
//     {
//       id: 'promotion',
//       date: 'March 2022',
//       title: 'Career Growth',
//       description: 'Promoted to Senior Software Engineer',
//       type: 'milestone',
//       location: 'Same Company',
//       details: [
//         'Led team of 3 junior developers',
//         'Architected ML inference system',
//         'Mentored new hires in ML best practices'
//       ],
//       icon: ArrowRight
//     },
//     {
//       id: 'quit-job',
//       date: 'August 2023',
//       title: 'Career Transition',
//       description: 'Left job to pursue graduate studies',
//       type: 'milestone',
//       location: 'Boston, MA',
//       details: [
//         'Decided to deepen ML research knowledge',
//         'Transitioned from industry to academia',
//         'Focused on LLM research opportunities'
//       ],
//       icon: MapPin
//     },
//     {
//       id: 'grad-school',
//       date: 'September 2023',
//       title: 'Started Graduate School',
//       description: 'MS in Computer Science',
//       type: 'education',
//       location: 'University Name',
//       details: [
//         'Specializing in Machine Learning and AI',
//         'Research Assistant position',
//         'Focus on Large Language Models'
//       ],
//       icon: GraduationCap
//     },
//     {
//       id: 'research',
//       date: 'Present',
//       title: 'Current Research',
//       description: 'Research Assistant in ML Lab',
//       type: 'work',
//       location: 'University Research Lab',
//       details: [
//         'Investigating LLM interpretability',
//         'Published research in progress',
//         'Collaborating with industry partners'
//       ],
//       icon: BookOpen
//     }
//   ];

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case 'education': return 'bg-blue-500/20 border-blue-500/40';
//       case 'work': return 'bg-green-500/20 border-green-500/40';
//       case 'milestone': return 'bg-purple-500/20 border-purple-500/40';
//       default: return 'bg-gray-500/20 border-gray-500/40';
//     }
//   };

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'education': return '🎓';
//       case 'work': return '💼';
//       case 'milestone': return '🎯';
//       default: return '📍';
//     }
//   };

//   return (
//     <section id="journey" className="py-20 px-6 max-w-6xl mx-auto slide-up">
//       <div className="text-center mb-16">
//         <h2 className="text-section mb-4 font-serif">Journey</h2>
//         <p className="text-body text-muted-foreground max-w-2xl mx-auto">
//           The path that led me here - from curious student to ML researcher
//         </p>
//       </div>

//       <div className="relative">
//         {/* Timeline Route */}
//         <div className="hidden md:block absolute left-0 top-0 w-full h-full">
//           <svg 
//             className="w-full h-full" 
//             viewBox="0 0 1000 600"
//             style={{ minHeight: '400px' }}
//           >
//             {/* Curved path connecting all events */}
//             <path
//               d="M 100 100 Q 200 80 300 120 Q 400 160 500 140 Q 600 120 700 160 Q 800 200 900 180"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeDasharray="5,5"
//               className="text-muted-foreground/40"
//             />
            
//             {/* Waypoints */}
//             {timelineEvents.map((event, index) => {
//               const x = 100 + (index * 133.33); // Distribute evenly along path
//               const y = 100 + (index % 2 === 0 ? 0 : 60) + Math.sin(index * 0.8) * 20;
              
//               return (
//                 <g key={event.id}>
//                   {/* Waypoint circle */}
//                   <circle
//                     cx={x}
//                     cy={y}
//                     r="8"
//                     fill="currentColor"
//                     className={`cursor-pointer transition-all duration-300 ${
//                       selectedEvent === event.id 
//                         ? 'text-accent scale-125' 
//                         : 'text-muted-foreground hover:text-accent hover:scale-110'
//                     }`}
//                     onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
//                   />
                  
//                   {/* Event type indicator */}
//                   <text
//                     x={x}
//                     y={y - 20}
//                     textAnchor="middle"
//                     className="text-xs font-medium fill-current text-muted-foreground"
//                   >
//                     {getTypeIcon(event.type)}
//                   </text>
                  
//                   {/* Date label */}
//                   <text
//                     x={x}
//                     y={y + 25}
//                     textAnchor="middle"
//                     className="text-xs font-medium fill-current text-muted-foreground"
//                   >
//                     {event.date}
//                   </text>
//                 </g>
//               );
//             })}
//           </svg>
//         </div>

//         {/* Timeline Events - Mobile View */}
//         <div className="md:hidden space-y-4">
//           {timelineEvents.map((event) => {
//             const Icon = event.icon;
//             return (
//               <Card 
//                 key={event.id}
//                 className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
//                   selectedEvent === event.id ? 'ring-2 ring-accent' : ''
//                 }`}
//                 onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
//               >
//                 <CardContent className="p-4">
//                   <div className="flex items-start gap-3">
//                     <div className={`p-2 rounded-full ${getTypeColor(event.type)}`}>
//                       <Icon size={16} />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <h4 className="font-medium">{event.title}</h4>
//                         <Badge variant="outline" className="text-xs">
//                           {event.date}
//                         </Badge>
//                       </div>
//                       <p className="text-sm text-muted-foreground">{event.description}</p>
//                       {event.location && (
//                         <p className="text-xs text-muted-foreground mt-1">📍 {event.location}</p>
//                       )}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Selected Event Details */}
//         {selectedEvent && (
//           <div className="mt-8 md:mt-0" style={{ paddingTop: '420px' }}>
//             {(() => {
//               const event = timelineEvents.find(e => e.id === selectedEvent);
//               if (!event) return null;
              
//               const Icon = event.icon;
//               return (
//                 <Card className="bg-card shadow-soft animate-in slide-in-from-bottom-4 duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex items-start gap-4">
//                       <div className={`p-3 rounded-full ${getTypeColor(event.type)}`}>
//                         <Icon size={24} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <h3 className="text-card-title font-serif">{event.title}</h3>
//                           <Badge variant="secondary">{event.date}</Badge>
//                         </div>
//                         <p className="text-body text-muted-foreground mb-3">{event.description}</p>
//                         {event.location && (
//                           <p className="text-sm text-muted-foreground mb-4 flex items-center">
//                             <MapPin size={14} className="mr-1" />
//                             {event.location}
//                           </p>
//                         )}
//                         {event.details && (
//                           <div>
//                             <h4 className="font-medium mb-2">Key Highlights:</h4>
//                             <ul className="space-y-1">
//                               {event.details.map((detail, index) => (
//                                 <li key={index} className="text-sm text-muted-foreground flex items-start">
//                                   <span className="text-accent mr-2">•</span>
//                                   {detail}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })()}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };