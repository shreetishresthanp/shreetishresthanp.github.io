import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Coffee, BookOpen, Code, User, Eye, EyeOff, Menu, X, NotebookText, NotebookPen, Route } from 'lucide-react';

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
    { id: 'about', label: 'ABOUT', icon: User },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="text-3xl font-sans cursor-pointer hover:text-accent transition-colors"
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
                  className="ml-3 opacity-60 hover:opacity-100 transition-opacity"
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
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Right Side Vertical Navigation - Desktop */}
      <nav className="hidden lg:flex fixed right-0 top-0 bottom-0 z-40">
        <div className="flex flex-col justify-start items-end gap-8 pr-8 h-full pt-32">
          {currentSections.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeSection === id ? "secondary" : "ghost"}
              size="sm"
              className="justify-between font-sans text-sm tracking-wide w-36"
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
                  className="justify-start font-sans text-sm tracking-wide"
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