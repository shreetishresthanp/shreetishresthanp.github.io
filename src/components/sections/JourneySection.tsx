

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Star, Trophy, Briefcase, Users, Award } from 'lucide-react';

// Import data and utilities
import { milestones, phases, eventTypeColors } from '../../lib/milestones';
import { 
  calculateXPosition,
  calculateYPosition,
  getMilestonesByPhase
} from '../../lib/journeyUtils';

// Icon mapping for milestone types
const getMilestoneIcon = (type: string) => {
  const iconMap = {
    milestone: Star,
    achievement: Trophy,
    experience: Briefcase,
    mentorship: Users,
    leadership: Award
  };
  return iconMap[type as keyof typeof iconMap] || Star;
};

import { MilestoneMarker } from '../../lib/MilestoneMarker';
import { useRef, useEffect } from "react";

export const JourneySection = () => {
  const [activePhase, setActivePhase] = useState('research');
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
    <section id="journey" className="py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-section font-sans">Professional Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          While journeys are seldom linear, here's a look at key phases that shaped my path.
        </p>
      </div>

      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="interactive">Timeline</TabsTrigger>
          <TabsTrigger value="resume">Download Resume</TabsTrigger>
        </TabsList>

        {/* ---------------- Interactive Timeline ---------------- */}
        <TabsContent value="interactive" className="space-y-8">
          {/* Visual Timeline */}
          <div className="relative">
            {/* Timeline Line - More subtle */}
            <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-slate-300 via-amber-400 to-purple-400 opacity-60"></div>
            
            {/* Timeline Phases */}
            <div className="flex justify-between items-start">
              {Object.entries(phases).map(([phaseId, phase], index) => {
              const isActive = activePhase === phaseId;
                const phaseMilestones = getMilestonesByPhase(milestones, phaseId);

              return (
                <div
                  key={phaseId}
                    className={`relative cursor-pointer transition-all duration-500 flex flex-col items-center ${
                      isActive ? 'scale-102' : 'hover:scale-101'
                    }`}
                    onClick={() => handlePhaseClick(phaseId)}
                    style={{ width: '30%' }}
                  >
                    {/* Timeline Node - Smaller concentric circles */}
                    <div className="relative z-10 mb-3">
                      <div 
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                          isActive ? 'scale-105 shadow-md' : 'hover:scale-102'
                  }`}
                  style={{
                          backgroundColor: isActive ? phase.color : 'white',
                          borderColor: phase.color,
                          boxShadow: isActive ? `0 0 12px ${phase.color}30` : 'none'
                        }}
                      >
                        <div 
                          className="w-4 h-4 rounded-full transition-all duration-500"
                          style={{ 
                            backgroundColor: isActive ? 'white' : phase.color,
                            opacity: isActive ? 1 : 0.7
                          }}
                        />
                      </div>
                      {/* Subtle outer ring for engagement */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 w-10 h-10 rounded-full border border-opacity-30 animate-pulse"
                          style={{ borderColor: phase.color }}
                        />
                      )}
                    </div>
                    
                    {/* Phase Content - Simplified */}
                    <div className="text-center">
                      <div className="mb-2">
                        <h3 
                          className="text-base font-serif font-medium mb-1 transition-colors duration-300"
                          style={{ color: isActive ? phase.color : '#6b7280' }}
                        >
                          {phase.title}
                      </h3>
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full font-medium transition-all duration-300"
                          style={{ 
                            backgroundColor: isActive ? phase.color : '#f3f4f6',
                            color: isActive ? 'white' : '#6b7280'
                          }}
                        >
                        {phase.period}
                        </span>
                      </div>
                      
                      {/* Minimal milestones indicator */}
                      <div className="flex flex-col items-center gap-1 text-xs text-gray-400">
                        <div className="flex gap-0.5">
                          {Array.from({ length: Math.min(phaseMilestones.length, 3) }).map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 rounded-full transition-all duration-300"
                              style={{ 
                                backgroundColor: isActive ? phase.color + '80' : phase.color + '40'
                              }}
                            />
                          ))}
                          {phaseMilestones.length > 3 && (
                            <span className="text-xs opacity-60">+{phaseMilestones.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Phase Milestones - Minimal Horizontal Layout */}
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg p-6 transition-all duration-500 hover:bg-white/70">
            <div className="mb-6">
              <h3 className="text-xl font-serif font-semibold mb-1" style={{ color: currentPhase.color }}>
                {currentPhase.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{currentPhase.period}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{currentPhase.description}</p>
            </div>
            
            {/* Enhanced Visual List with subtle animations */}
            <div className="space-y-2">
                {phaseMilestones.map((milestone, idx) => {
                  const isHighlighted = selectedMilestone?.id === milestone.id;
                  
                  return (
                  <div
                      key={milestone.id}
                    className={`group cursor-pointer transition-all duration-500 py-3 px-4 rounded-lg border ${
                        isHighlighted 
                        ? 'bg-gradient-to-r from-warm-cream to-warm-beige border-accent shadow-sm transform scale-[1.02]' 
                        : 'bg-white/30 border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-gray-300 hover:shadow-sm hover:scale-[1.01]'
                      }`}
                      onClick={() => handleMilestoneClick(milestone)}
                      style={{
                        animationDelay: `${idx * 50}ms`
                      }}
                    >
                    <div className="flex items-center gap-5">
                      {/* Date with enhanced styling */}
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500 font-mono w-16 text-center">
                            {milestone.date}
                          </span>
                        <div className={`w-8 h-0.5 mt-1 transition-all duration-300 ${
                          isHighlighted ? 'bg-accent' : 'bg-gray-300 group-hover:bg-gray-400'
                        }`} />
                      </div>
                      
                      {/* Enhanced separator with subtle pulse */}
                      <div className="flex flex-col items-center">
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          isHighlighted ? 'bg-accent animate-pulse' : 'bg-gray-400 group-hover:bg-gray-500 group-hover:scale-110'
                        }`} />
                        </div>
                      
                      {/* Title with enhanced typography */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-semibold text-lg leading-tight transition-all duration-300 ${
                            isHighlighted ? 'text-accent' : 'text-gray-800 group-hover:text-gray-900'
                          }`}>
                            {milestone.title}
                          </h4>
                          {milestone.organization && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                              {milestone.organization}
                            </span>
                          )}
                        </div>
                        {milestone.duration && (
                          <div className="text-xs text-gray-500 font-mono mb-2">
                            {milestone.duration}
                          </div>
                        )}
                        {milestone.description && (
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isHighlighted ? 'text-muted-foreground' : 'text-gray-600 group-hover:text-gray-700'
                        }`}>
                          {milestone.description}
                        </p>
                        )}
                      </div>
                      
                      {/* Enhanced type indicator */}
                      <div className="flex flex-col items-center gap-2">
                        {(() => {
                          const IconComponent = getMilestoneIcon(milestone.type);
                          return (
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isHighlighted 
                                ? 'bg-accent/10 text-accent' 
                                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600'
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                          );
                        })()}
                        <span className={`text-xs font-medium capitalize transition-colors duration-300 ${
                          isHighlighted ? 'text-accent' : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                          {milestone.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
          </div>
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