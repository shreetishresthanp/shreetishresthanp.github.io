import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  isPersonalMode: boolean;
}

export const HeroSection = ({ onNavigate, isPersonalMode }: HeroSectionProps) => {
  const professionalTitle = "Research & Development";
  const personalTitle = "Thoughts & Reflections";
  
  const professionalSubtitle = "MS Student & Research Assistant exploring the frontiers of ML and LLMs";
  const personalSubtitle = "A coffee shop philosopher's journey through code, books, and quiet observations";

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle paper-texture">
      <div className="max-w-4xl text-center fade-in fixed bottom-0 right-0 z-50">
        {/* Main heading */}
        {/* <h1 className="text-hero mb-6 font-serif text-foreground">
          {isPersonalMode ? personalTitle : professionalTitle}
        </h1> */}
        
        {/* Subtitle */}
        {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto leading-relaxed">
          {isPersonalMode ? personalSubtitle : professionalSubtitle}
        </p> */}
        
        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-sans tracking-wide hover-lift"
            onClick={() => {
              if (isPersonalMode) {
                onNavigate('writing');
              } else {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
                onNavigate('about');
              }
            }}
          >
            {isPersonalMode ? 'Explore Writing' : 'About Me'}
          </Button>
          <Button 
            size="lg" 
            className="font-sans tracking-wide hover-glow"
            onClick={() => {
              if (isPersonalMode) {
                onNavigate('reflections');
              } else {
                const element = document.getElementById('journey');
                element?.scrollIntoView({ behavior: 'smooth' });
                onNavigate('journey');
              }
            }}
          >
            {isPersonalMode ? (
              'Personal Thoughts'
            ) : (
              <>
                <Download size={16} className="mr-2" />
                Download Resume
              </>
            )}
          </Button>
        </div> */}
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10 mr-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover-lift rounded-none"
            onClick={() => window.open('https://github.com/shreetishresthanp', '_blank')}
          >
            <Github size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover-lift rounded-none"
            onClick={() => window.open('https://linkedin.com/in/shreeti-shrestha', '_blank')}
          >
            <Linkedin size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="hover-lift rounded-none">
            <Mail size={20} />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};