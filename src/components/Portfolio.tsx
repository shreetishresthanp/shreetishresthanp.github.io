import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { JourneySection } from './sections/JourneySection';
import { ResearchSection } from './sections/ResearchSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { WritingSection } from './sections/WritingSection';
import { BooksSection } from './sections/BooksSection';
import { ReflectionsSection } from './sections/ReflectionsSection';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPersonalMode, setIsPersonalMode] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handlePersonalModeToggle = () => {
    setIsPersonalMode(!isPersonalMode);
    setActiveSection('hero');
  };

  // Update active section based on scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['hero', 'about', 'journey', 'research', 'projects', 'writing', 'books', 'reflections'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const professionalSections = (
    <>
      <HeroSection onNavigate={handleSectionChange} isPersonalMode={isPersonalMode} />
      <AboutSection />
      <JourneySection />
      <ResearchSection />
      <ProjectsSection />
    </>
  );

  const personalSections = (
    <>
      <HeroSection onNavigate={handleSectionChange} isPersonalMode={isPersonalMode} />
      <WritingSection />
      <BooksSection />
      <ReflectionsSection />
    </>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isPersonalMode={isPersonalMode}
        onPersonalModeToggle={handlePersonalModeToggle}
      />
      
      <main className="pt-16">
        <div className="section-enter">
          {isPersonalMode ? personalSections : professionalSections}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-muted/30 section-content">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
           Developed with Lovable & Third.js • Built with care • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};