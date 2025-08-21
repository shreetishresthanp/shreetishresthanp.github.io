import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Calendar } from 'lucide-react';

// Import data and utilities
import { milestones, phases, eventTypeColors } from '../../lib/milestones';
import { 
  getMilestonesByPhase, 
  generateFloatingParticles,
  calculateMilestonePosition,
  calculatePathYPosition
} from '../../lib/journeyUtils';
import { MilestoneMarker } from '../../lib/MilestoneMarker';
import PDFViewer from './pdfviewer';

export const JourneySection = () => {
  const [activePhase, setActivePhase] = useState('college');
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  // Get current phase data and milestones
  const currentPhase = phases[activePhase];
  const phaseMilestones = getMilestonesByPhase(milestones, activePhase);
  const floatingParticles = generateFloatingParticles(15);

  //Handle Resume Download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/test.pdf';       // path to PDF in public folder
    link.download = 'Shreeti_Shrestha_Resume.pdf'; // desired file name
    link.click();
  };


  // Handle milestone click to switch phase and highlight
  const handleMilestoneClick = (milestone) => {
    setActivePhase(milestone.phase);
    setSelectedMilestone(milestone);
  };

  // Handle phase click to switch and dim others
  const handlePhaseClick = (phaseId) => {
    setActivePhase(phaseId);
    setSelectedMilestone(null);
  };

  return (
    <section id="journey" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-serif">Professional Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From curiosity to research expertise - a path of continuous learning and growth
        </p>
      </div>

      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="interactive">Interactive Timeline</TabsTrigger>
          <TabsTrigger value="resume">Download Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="interactive" className="space-y-8">
          {/* Timeline Container */}
          <div className="relative w-full h-96 bg-gradient-to-b from-slate-50/50 to-transparent rounded-xl overflow-hidden border">
            
            {/* Phase Backgrounds with adjusted proportions */}
            <div className="absolute inset-0">
              {/* College Phase (2018-2021) - 40% */}
              <div
                className={`absolute inset-y-0 cursor-pointer transition-all duration-700 ease-out hover:scale-[1.01] ${
                  activePhase === 'college' ? 'opacity-100 shadow-lg' : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  left: '0%',
                  width: '40%',
                  backgroundColor: phases.college.bgColor,
                  borderRight: `2px solid ${phases.college.color}20`,
                  transform: activePhase === 'college' ? 'scale(1.01)' : 'scale(1)',
                  zIndex: activePhase === 'college' ? 5 : 1
                }}
                onClick={() => handlePhaseClick('college')}
              >
                <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 hover:scale-105">
                    <h3 className="text-sm font-serif font-bold mb-1 transition-colors duration-300" style={{ color: phases.college.color }}>
                      College Years
                    </h3>
                    <p className="text-xs opacity-75 transition-colors duration-300" style={{ color: phases.college.color }}>
                      {phases.college.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Industry Phase (2022-2024) - 40% */}
              <div
                className={`absolute inset-y-0 cursor-pointer transition-all duration-700 ease-out hover:scale-[1.01] ${
                  activePhase === 'industry' ? 'opacity-100 shadow-lg' : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  left: '40%',
                  width: '40%',
                  backgroundColor: phases.industry.bgColor,
                  borderLeft: `2px solid ${phases.industry.color}20`,
                  borderRight: `2px solid ${phases.industry.color}20`,
                  transform: activePhase === 'industry' ? 'scale(1.01)' : 'scale(1)',
                  zIndex: activePhase === 'industry' ? 5 : 1
                }}
                onClick={() => handlePhaseClick('industry')}
              >
                <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 hover:scale-105">
                    <h3 className="text-sm font-serif font-bold mb-1 transition-colors duration-300" style={{ color: phases.industry.color }}>
                      Industry Experience
                    </h3>
                    <p className="text-xs opacity-75 transition-colors duration-300" style={{ color: phases.industry.color }}>
                      {phases.industry.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Phase (2025+) - 20% */}
              <div
                className={`absolute inset-y-0 cursor-pointer transition-all duration-700 ease-out hover:scale-[1.01] ${
                  activePhase === 'research' ? 'opacity-100 shadow-lg' : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  left: '80%',
                  width: '20%',
                  backgroundColor: phases.research.bgColor,
                  borderLeft: `2px solid ${phases.research.color}20`,
                  transform: activePhase === 'research' ? 'scale(1.01)' : 'scale(1)',
                  zIndex: activePhase === 'research' ? 5 : 1
                }}
                onClick={() => handlePhaseClick('research')}
              >
                <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 hover:scale-105">
                    <h3 className="text-sm font-serif font-bold mb-1 transition-colors duration-300" style={{ color: phases.research.color }}>
                      Research Journey
                    </h3>
                    <p className="text-xs opacity-75 transition-colors duration-300" style={{ color: phases.research.color }}>
                      {phases.research.period}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Winding Path SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={phases.college.color} stopOpacity="0.5" />
                  <stop offset="40%" stopColor={phases.industry.color} stopOpacity="0.5" />
                  <stop offset="80%" stopColor={phases.research.color} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={phases.research.color} stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="pathCenterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={phases.college.color} stopOpacity="0.3" />
                  <stop offset="40%" stopColor={phases.industry.color} stopOpacity="0.3" />
                  <stop offset="80%" stopColor={phases.research.color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={phases.research.color} stopOpacity="0.3" />
                </linearGradient>
                <filter id="pathGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Winding path adjusted for new proportions */}
              
              {/* Bottom boundary line */}
              <path
                d="M 0 212 Q 120 172 200 192 Q 300 232 400 192 Q 500 152 600 202 Q 700 242 800 212 Q 900 182 1000 212"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#pathGlow)"
                className="drop-shadow-sm"
              />
              
              {/* Top boundary line */}
              <path
                d="M 0 188 Q 120 148 200 168 Q 300 208 400 168 Q 500 128 600 178 Q 700 218 800 188 Q 900 158 1000 188"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#pathGlow)"
                className="drop-shadow-sm"
              />
              
              {/* Center path fill */}
              <path
                d="M 0 188 Q 120 148 200 168 Q 300 208 400 168 Q 500 128 600 178 Q 700 218 800 188 Q 900 158 1000 188 L 1000 212 Q 900 182 800 212 Q 700 242 600 202 Q 500 152 400 192 Q 300 232 200 192 Q 120 172 0 212 Z"
                fill="url(#pathCenterGradient)"
                className="drop-shadow-sm"
              />
              
              {/* Center dashed line for realism */}
              <path
                d="M 0 200 Q 120 160 200 180 Q 300 220 400 180 Q 500 140 600 190 Q 700 230 800 200 Q 900 170 1000 200"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="8,6"
                fill="none"
                opacity="0.4"
                className="drop-shadow-sm"
              />
            </svg>

            {/* Asian Lantern Milestone Markers */}
            {milestones.map((milestone, index) => {
              const xPosition = calculateMilestonePosition(milestone);
              const baseYPosition = calculatePathYPosition(xPosition);
              const isAbove = index % 2 === 0;
              const offset = 35; // Reduced offset to place markers closer to path
              const yPosition = isAbove 
                ? Math.max(baseYPosition - offset, 60)
                : Math.min(baseYPosition + offset, 340);

              // Adjust x position based on new proportions
              let adjustedX;
              if (milestone.phase === 'college') {
                adjustedX = (xPosition / 100) * 40; // Map to first 40%
              } else if (milestone.phase === 'industry') {
                adjustedX = 40 + ((xPosition - 52) / (87 - 52)) * 40; // Map to middle 40%
              } else {
                adjustedX = 80 + ((xPosition - 87) / (100 - 87)) * 20; // Map to last 20%
              }

              const phaseColors = {
                college: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
                industry: ['#FFA726', '#66BB6A', '#AB47BC'],
                research: ['#8E24AA', '#5C6BC0', '#26A69A']
              };

              const colors = phaseColors[milestone.phase];
              const flagColor = colors[index % colors.length];

              return (
                <div
                  key={milestone.id}
                  className="absolute transform -translate-x-1/2 cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:z-20 pointer-events-auto hover:-translate-y-1"
                  style={{
                    left: `${adjustedX}%`,
                    top: `${(yPosition / 400) * 100}%`,
                    zIndex: selectedMilestone?.id === milestone.id ? 20 : 10,
                    transform: isAbove ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(0%)'
                  }}
                  onClick={() => handleMilestoneClick(milestone)}
                >
                  {/* Asian Lantern Structure */}
                  <div className="relative group animate-in fade-in duration-700" style={{ animationDelay: `${index * 100}ms` }}>

                    {/* Main Lantern Body */}
                      {/* Icon inscription */}
                      <div className="transform transition-all duration-300 group-hover:scale-110">
                        {/* <MilestoneMarker
                          key={`icon-${milestone.id}`}
                          milestone={milestone}
                          milestoneIndex={index}
                          selectedMilestone={selectedMilestone}
                          setSelectedMilestone={() => {}}
                          renderIconOnly={true}
                        /> */}
                      </div>
                      

                    {/* Hover tooltip with animation */}
                    <div 
  className={`absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-30 ${
    isAbove ? 'top-full mt-4' : 'bottom-full mb-4'
  } group-hover:scale-105`}
>
  <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap max-w-48 text-center shadow-2xl border border-white/10">
    <div className="font-medium">{milestone.title}</div>
    <div className="text-[10px] opacity-75 mt-1">{milestone.date}</div>
    <div 
      className="text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block"
      style={{ backgroundColor: eventTypeColors[milestone.type] + '40' }}
    >
      {milestone.type}
    </div>
  </div>
                      {/* Enhanced tooltip arrow */}
  <div className={`absolute left-1/2 transform -translate-x-1/2 ${
    isAbove ? 'bottom-full' : 'top-full'
  }`}>
    <div className={`w-0 h-0 border-l-4 border-r-4 border-transparent ${
      isAbove ? 'border-b-4 border-b-black/90' : 'border-t-4 border-t-black/90'
        // Arrow points up toward icon above
        // Arrow points down toward icon below
    }`}></div>
  </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Event Type Legend with enhanced animations */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm transition-all duration-500 hover:shadow-lg hover:bg-white/80 hover:scale-[1.02]">
              {Object.entries(eventTypeColors).map(([type, color], index) => (
                <div key={type} className="flex items-center gap-2 transition-all duration-500 hover:scale-110 animate-in slide-in-from-bottom-2"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div 
                    className="w-4 h-3 rounded-sm border border-gray-200/50 transition-all duration-500 shadow-sm hover:shadow-md hover:scale-110"
                    style={{ 
                      backgroundColor: color,
                      boxShadow: `0 2px 8px ${color}20`
                    }}
                  />
                  <span className="text-sm font-medium capitalize text-gray-700 transition-colors duration-500 hover:text-gray-900 hover:font-semibold">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Overview */}
          <Card className="bg-white/60 backdrop-blur-sm border-2 transition-all duration-700 ease-out transform hover:scale-[1.01] shadow-lg hover:shadow-xl" 
                style={{ 
                  borderColor: currentPhase.color + '20',
                  boxShadow: `0 8px 32px ${currentPhase.color}10`
                }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-serif transition-colors duration-500" style={{ color: currentPhase.color }}>
                {currentPhase.title}
                : maybe make cards in list format: like news
              </CardTitle>
              <p className="text-sm text-gray-500 transition-colors duration-300">{currentPhase.period}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6 transition-opacity duration-500">
                {currentPhase.description}
              </p>
              
              {/* Phase Milestones Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phaseMilestones.map((milestone, index) => (
                  <Card 
                    key={milestone.id}
                    className={`cursor-pointer transition-all duration-300 ease-out hover:shadow-md hover:scale-[1.02] transform hover:-translate-y-1 bg-white/70 backdrop-blur-sm border ${
                      selectedMilestone?.id === milestone.id ? 'ring-2 ring-blue-500/50 border-blue-300' : 'border-gray-100/50'
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                    onClick={() => setSelectedMilestone(milestone)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
                          style={{ 
                            backgroundColor: eventTypeColors[milestone.type],
                            boxShadow: `0 0 8px ${eventTypeColors[milestone.type]}30`
                          }}
                        />
                        <span className="font-medium text-sm text-gray-700 transition-colors duration-300">
                          {milestone.date}
                        </span>
                      </div>
                      <h4 className="font-serif font-medium mb-1 text-sm text-gray-800 transition-colors duration-300">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 transition-colors duration-300">
                        {milestone.description}
                      </p>
                      <Badge 
                        variant="secondary" 
                        className="text-xs mt-2 transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: eventTypeColors[milestone.type] + '15',
                          color: eventTypeColors[milestone.type],
                          border: `1px solid ${eventTypeColors[milestone.type]}20`
                        }}
                      >
                        {milestone.type}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resume">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              {/* <div className="mb-6">
                <Download className="mx-auto mb-4 text-gray-600" size={48} />

              </div> */}

              <div className="space-y-1">
                <Button className="w-full max-w-sm" onClick={handleResumeDownload}>
                  <Download size={10} />
                  Download Full Resume (PDF)
                </Button>
                <div className="text-sm text-gray-600">
                                  <p className="text-gray-600">
                  Download a comprehensive PDF version of my professional experience and qualifications.
                </p>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>

              {/* Preview sections */}
              <div className="mt-8 grid md:grid-cols-1 gap-4 text-left">
                <div    style={{
          width: '100%',
          height: '1000px',
          border: '1px solid #e0e0e0',
          borderRadius: '0.5rem',
          overflow: 'hidden', 
        }}>
  <iframe
          src="/test.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Journey PDF"
        />        
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};