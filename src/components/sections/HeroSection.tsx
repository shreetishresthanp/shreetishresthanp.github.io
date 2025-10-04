import { Button } from '@/components/ui/button';
import { ChevronDown, Download } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle paper-texture py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-justify fade-in w-full">
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
        
      </div>

      {/* Introduction & Journey Summary */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
        "
      >
        <div className="w-[90vw] max-w-3xl px-2 md:px-0 text-justify">
          <h2
            className="
              text-lg md:text-xl font-serif mb-2 font-bold text-foreground text-justify
              animate-fade-in-up animate-glow
              [animation-delay:.2s]
            "
            style={{
              animation: 'fadeInUp 1.2s cubic-bezier(0.23,1,0.32,1) both, glow 2.5s ease-in-out infinite alternate',
              animationDelay: '0.2s, 0s',
            }}
          >
            Hello, I am Shreeti
          </h2>
          <h2
            className="
              text-xs md:text-sm tracking-widest font-semibold text-accent mb-2 
              italic text-justify
              animate-gradient-x bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent
              [animation-delay:.1s]
            "
            style={{
              animation: 'gradientX 3s ease-in-out infinite alternate',
            }}
          >
            CURIOSITY DRIVES ME; REFLECTION SHAPES ME
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in-up text-justify" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
            {/* I'm currently deepening my expertise in advanced machine learning techniques while exploring opportunities to contribute to innovative research that bridges theory and practice. */}
            I'm currently deepening my expertise in advanced machine learning techniques at Northeastern University to blend rigorous academic research with practical engineering solutions.
            My recent work focuses on deep learning models that adapt to complex, non-linear patterns and decision support systems that are both technically sound and human-centered.
            Prior to this, I worked as a software engineer at Trimble Maps where I specialized in routing and navigation systems.
          </p>
          <p
            className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in-up animate-underline text-justify"
            style={{
              animationDelay: '0.35s, 1.2s',
              animationFillMode: 'both',
            }}
          >
            Always looking to connect with others who value thoughtful reflection and creative collaboration.
          </p>
          <h2
            className="
              text-xs md:text-sm tracking-widest font-semibold text-accent mb-2 
              italic text-justify
              animate-gradient-x bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent
              [animation-delay:.4s]
            "
            style={{
              animation: 'gradientX 3s ease-in-out infinite alternate',
            }}
          >
            RESEARCH STATEMENT
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-1 animate-fade-in-up text-justify" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
            To what extent can we mimic cognitive processes in neural networks to aid decision-making?
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-1 animate-fade-in-up text-justify" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            How do we effectively scale such computations?
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in-up text-justify" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
            How can we ensure data integrity when using such models?
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in-up text-justify" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            My goal lies in learning to integrate neural networks in decision support systems, ensuring we can build models that are robust, scalable, and interpretable.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

// Add these keyframes to your global CSS if not present:
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes gradientX {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes glow {
  0% { text-shadow: 0 0 0px #fff, 0 0 0px #fff; }
  100% { text-shadow: 0 0 8px #fff, 0 0 16px #a3e635; }
}
@keyframes underlineGrow {
  0% { background-size: 0% 2px; }
  100% { background-size: 100% 2px; }
}
.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.23,1,0.32,1) both;
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradientX 3s ease-in-out infinite alternate;
}
.animate-glow {
  animation: glow 2.5s ease-in-out infinite alternate;
}
.animate-underline {
  background-image: linear-gradient(90deg, #a3e635 0%, #38bdf8 100%);
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0% 2px;
  animation: underlineGrow 1.2s cubic-bezier(0.23,1,0.32,1) 1.2s forwards;
}
*/