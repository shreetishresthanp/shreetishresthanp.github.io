import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Coffee, BookOpen, Code, User, Eye, EyeOff, Menu, X, NotebookText, NotebookPen, Route, Github, Linkedin, Mail, GraduationCap, FileText } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isPersonalMode: boolean;
  onPersonalModeToggle: () => void;
}

export const Navigation = ({ 
  activeSection, 
  onSectionChange, 
  isPersonalMode, 
  onPersonalModeToggle 
}: NavigationProps) => {
  const [showPersonalToggle, setShowPersonalToggle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const professionalSections = [
    { id: 'hero', label: 'ABOUT', icon: User },
    { id: 'journey', label: 'JOURNEY', icon: Route},
    { id: 'research', label: 'RESEARCH', icon: NotebookText },
    { id: 'projects', label: 'PROJECTS', icon: Code },
  ];

  const personalSections = [
    { id: 'books', label: 'BOOKS', icon: BookOpen },
    { id: 'writing', label: 'WRITING', icon: NotebookPen },
    { id: 'reflections', label: 'REFLECTIONS', icon: Coffee },
  ];

  const currentSections = isPersonalMode ? personalSections : professionalSections;

  return (
    <>
      {/* Top Horizontal Header */}
      <nav className="fixed left-0 right-0 z-50 bg-background">
        <div className="w-full px-2 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="text-3xl font-sans cursor-pointer hover:text-accent transition-colors flex items-center pl-2"
              style={{ justifyContent: "flex-start" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSectionChange('hero');
              }}
              onMouseEnter={() => setShowPersonalToggle(true)}
              onMouseLeave={() => setShowPersonalToggle(false)}
            >
              SHREETI SHRESTHA
              {showPersonalToggle && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-3 opacity-60 hover:opacity-100 transition-opacity rounded-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPersonalModeToggle();
                  }}
                >
                  {isPersonalMode ? <EyeOff size={16} /> : <Eye size={16} />}
                  <span className="ml-1 text-xs">
                    {isPersonalMode ? 'Professional' : 'Personal'}
                  </span>
                </Button>
              )}
            </div>
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden rounded-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Right Side Vertical Navigation - Desktop */}
      <nav className="hidden lg:flex fixed right-0 top-0 bottom-0 z-40">
        <div className="flex flex-col justify-between items-end gap-8 pr-8 h-full pt-24 pb-20">
          {/* Navigation Sections */}
          <div className="flex flex-col gap-8">
            {currentSections.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeSection === id ? "secondary" : "ghost"}
                size="sm"
                className="justify-between font-sans text-sm tracking-wide w-36 rounded-none"
                onClick={() => {
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  onSectionChange(id);
                }}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Button>
            ))}
          </div>
          
          {/* Contact Icons */}
          <div className="flex flex-col gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start font-sans text-xs tracking-wide w-36 rounded-none"
              onClick={() => {
                onSectionChange('journey');
                // Small delay to ensure the section is loaded before scrolling
                setTimeout(() => {
                  const journeySection = document.getElementById('journey');
                  if (journeySection) {
                    journeySection.scrollIntoView({ behavior: 'smooth' });
                    // Find and click the resume tab
                    setTimeout(() => {
                      const resumeTab = document.querySelector('[value="resume"]');
                      if (resumeTab) {
                        (resumeTab as HTMLElement).click();
                      }
                    }, 500);
                  }
                }, 100);
              }}
            >
              <FileText size={14} className="mr-2" />
              <span>CV</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start font-sans text-xs tracking-wide w-36 rounded-none"
            >
              <Mail size={14} className="mr-2" />
              <span>Email</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start font-sans text-xs tracking-wide w-36 rounded-none"
              onClick={() => window.open('https://github.com/shreetishresthanp', '_blank')}
            >
              <Github size={14} className="mr-2" />
              <span>GitHub</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start font-sans text-xs tracking-wide w-36 rounded-none"
              onClick={() => window.open('https://linkedin.com/in/shreeti-shrestha', '_blank')}
            >
              <Linkedin size={14} className="mr-2" />
              <span>LinkedIn</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start font-sans text-xs tracking-wide w-36 rounded-none"
              onClick={() => window.open('https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID', '_blank')}
            >
              <GraduationCap size={14} className="mr-2" />
              <span>Google Scholar</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="pt-20 px-6">
            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              {currentSections.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={activeSection === id ? "secondary" : "ghost"}
                  className="justify-start font-sans text-sm tracking-wide rounded-none"
                  onClick={() => {
                    const element = document.getElementById(id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    onSectionChange(id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Icon size={16} className="mr-3" />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};