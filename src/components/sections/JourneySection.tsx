

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from 'lucide-react';

// Import data and utilities
import { milestones, phases, eventTypeColors } from '../../lib/milestones';
import { 
  calculateXPosition,
  calculateYPosition,
  getMilestonesByPhase
} from '../../lib/journeyUtils';

import { MilestoneMarker } from '../../lib/MilestoneMarker';
import { useRef, useEffect } from "react";

export const JourneySection = () => {
  const [activePhase, setActivePhase] = useState('college');
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const currentPhase = phases[activePhase];
  const phaseMilestones = getMilestonesByPhase(milestones, activePhase);

  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null);

  // On mount, store the path element
  useEffect(() => {
    if (pathRef.current) {
      setPathElement(pathRef.current);
    }
  }, []);

  // Resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/test.pdf';
    link.download = 'Shreeti_Shrestha_Resume.pdf';
    link.click();
  };

  const handleMilestoneClick = (milestone) => {
    setActivePhase(milestone.phase);
    setSelectedMilestone(milestone);
  };

  const handlePhaseClick = (phaseId) => {
    setActivePhase(phaseId);
    setSelectedMilestone(null);
  };

  return (
    <section id="journey" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-serif">Professional Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From curiosity to research expertise — a path of continuous learning and growth. 
          </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          While journeys are seldom linear, here's a look at key phases that shaped my path.
        </p>
      </div>

      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="interactive">Interactive Timeline</TabsTrigger>
          <TabsTrigger value="resume">Download Resume</TabsTrigger>
        </TabsList>

        {/* ---------------- Interactive Timeline ---------------- */}
        <TabsContent value="interactive" className="space-y-8">
          <div className="relative w-full h-96 bg-gradient-to-b from-slate-50/50 to-transparent rounded-xl overflow-hidden border">

            {/* Phase Backgrounds */}
            {Object.entries(phases).map(([phaseId, phase], idx) => {
              const phaseWidth = phaseId === 'college' ? '45%' : phaseId === 'industry' ? '40%' : '40%';
              const phaseLeft = phaseId === 'college' ? '0%' : phaseId === 'industry' ? '35%' : '65%';
              const isActive = activePhase === phaseId;

              return (
                <div
                  key={phaseId}
                  className={`absolute inset-y-0 cursor-pointer transition-all duration-700 ease-out hover:scale-[1.01] ${
                    isActive ? 'opacity-100 shadow-lg' : 'opacity-60 hover:opacity-80'
                  }`}
                  style={{
                    left: phaseLeft,
                    width: phaseWidth,
                    backgroundColor: phase.bgColor,
                    borderLeft: `2px solid ${phase.color}20`,
                    borderRight: phaseId !== 'college' ? `2px solid ${phase.color}20` : undefined,
                    transform: isActive ? 'scale(1.01)' : 'scale(1)',
                    zIndex: isActive ? 5 : 1,
                  }}
                  onClick={() => handlePhaseClick(phaseId)}
                >
                  <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
                    <div className="text-center transform transition-all duration-500 hover:scale-105">
                      <h3 className="text-sm font-serif font-bold mb-1" style={{ color: phase.color }}>
                        {phase.label}
                      </h3>
                      <p className="text-xs opacity-75" style={{ color: phase.color }}>
                        {phase.period}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Winding Path SVG */}
            <svg
              id="windingpath"
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
            >
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
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Base quadratic curve */}
              <path
                id="centerCurve"
                ref={pathRef} 
                d="M 0 200 Q 120 164 200 180 Q 300 220 400 180 Q 500 140 600 190 Q 700 230 800 200 Q 900 170 1000 200"
                stroke="none"
                fill="none"
              />

              {/* Bottom boundary */}
              <path
                d="M 0 206 Q 120 170 200 186 Q 300 226 400 186 Q 500 146 600 196 Q 700 236 800 206 Q 900 176 1000 206"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#pathGlow)"
                className="drop-shadow-sm"
              />

              {/* Top boundary */}
              <path
                d="M 0 194 Q 120 158 200 174 Q 300 214 400 174 Q 500 134 600 184 Q 700 224 800 194 Q 900 164 1000 194"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#pathGlow)"
                className="drop-shadow-sm"
              />

              {/* Filled band */}
              <path
                d="M 0 194 Q 120 158 200 174 Q 300 214 400 174 Q 500 134 600 184 Q 700 224 800 194 Q 900 164 1000 194 
                   L 1000 206 Q 900 176 800 206 Q 700 236 600 196 Q 500 146 400 186 Q 300 226 200 186 Q 120 170 0 206 Z"
                fill="url(#pathCenterGradient)"
                className="drop-shadow-sm"
              />

              {/* Dashed center guideline */}
              <path
                d="M 0 200 Q 120 164 200 180 Q 300 220 400 180 Q 500 140 600 190 Q 700 230 800 200 Q 900 170 1000 200"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="8,6"
                fill="none"
                opacity="0.4"
                className="drop-shadow-sm"
              />
            </svg>

            {/* Milestone Markers */}
            {pathElement &&
              milestones.map((milestone, globalIndex) => {
                const positionX = calculateXPosition(milestone);
                const { x: markerX, y: markerY } = calculateYPosition(pathElement, positionX, globalIndex, 25);

                return (
                  <MilestoneMarker
                    key={milestone.id}
                    milestoneIndex={globalIndex}
                    milestone={milestone}
                    selectedMilestone={selectedMilestone}
                    setSelectedMilestone={setSelectedMilestone}
                    setActivePhase={setActivePhase}
                    style={{
                      left: `${(markerX / 1000) * 100}%`,
                      top: `${(markerY / 400) * 100}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: selectedMilestone?.id === milestone.id ? 25 : 10
                    }}
                  />
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

          {/* Phase Milestones Cards */}
          <Card className="bg-white/60 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-serif" style={{ color: currentPhase.color }}>
                {currentPhase.title}
              </CardTitle>
              <p className="text-sm text-gray-500">{currentPhase.period}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">{currentPhase.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phaseMilestones.map((milestone, idx) => {
                  const isHighlighted = selectedMilestone?.id === milestone.id;
                  
                  return (
                    <Card 
                      key={milestone.id}
                      className={`cursor-pointer transition-all duration-500 transform ${
                        isHighlighted 
                          ? 'ring-4 ring-blue-500/50 border-blue-400 shadow-xl scale-105 bg-blue-50/50' 
                          : 'border-gray-100/50 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1'
                      }`}
                      onClick={() => handleMilestoneClick(milestone)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              isHighlighted ? 'w-4 h-4 shadow-lg' : ''
                            }`} 
                            style={{ 
                              backgroundColor: eventTypeColors[milestone.type],
                              boxShadow: isHighlighted ? `0 0 8px ${eventTypeColors[milestone.type]}60` : 'none'
                            }} 
                          />
                          <span className={`font-medium text-sm transition-colors duration-300 ${
                            isHighlighted ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                            {milestone.date}
                          </span>
                        </div>
                        <h4 className={`font-serif font-medium mb-1 text-sm transition-colors duration-300 ${
                          isHighlighted ? 'text-blue-800' : 'text-gray-800'
                        }`}>
                          {milestone.title}
                        </h4>
                        <p className={`text-xs line-clamp-2 transition-colors duration-300 ${
                          isHighlighted ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {milestone.description}
                        </p>
                        <Badge
                          variant="secondary"
                          className={`text-xs mt-2 transition-all duration-300 ${
                            isHighlighted ? 'shadow-md' : ''
                          }`}
                          style={{
                            backgroundColor: isHighlighted 
                              ? eventTypeColors[milestone.type] + '25' 
                              : eventTypeColors[milestone.type] + '15',
                            color: eventTypeColors[milestone.type],
                            border: `1px solid ${eventTypeColors[milestone.type]}${isHighlighted ? '40' : '20'}`
                          }}
                        >
                          {milestone.type}
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>


        {/* ---------------- Resume ---------------- */}
        <TabsContent value="resume">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <Button className="w-full max-w-sm mb-4" onClick={handleResumeDownload}>
                <Download size={10} />
                Download Full Resume (PDF)
              </Button>
              <p className="text-sm text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <iframe
                src="/test.pdf"
                width="100%"
                height="1000"
                className="border rounded-md"
                title="Resume PDF"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};