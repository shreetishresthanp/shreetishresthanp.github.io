import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Heart, Lightbulb, Brain, Code } from 'lucide-react';

export const AboutSection = () => {
  const mlSkills = [
    'Machine Learning', 'Large Language Models', 'PyTorch', 
    'Deep Learning', 'Neural Networks', 'Research Methods', 'Data Analysis'
  ];

  const softwareSkills = [
    'Python', 'Algorithms', 'Data Structures', 'Technical Writing',
    'Software Architecture', 'Version Control', 'Testing'
  ];

  const interests = [ 'Deep Learning', 'Neural Networks', 'AI Ethics', 'Human-Centered Computing', 'XAI'];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">About</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          ML/AI engineer in training — building thoughtful systems and asking better questions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Academic Journey */}
        <Card className="hover-lift bg-card shadow-soft">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-accent mr-3" size={24} />
              <h3 className="text-card-title font-serif">Academic Qualifications</h3>
            </div>
            <div className="space-y-4 text-body">
              <div>
                <h4 className="font-medium mb-1">Master's in Computer Science</h4>
                <p className="text-muted-foreground text-sm">Northeastern University</p>
                <p className="text-muted-foreground text-sm">January 2025 - Present</p>
                <p className="text-muted-foreground mt-2">Currently pursuing advanced studies in ML/AI research</p>

              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Philosophy */}
        <Card className="hover-lift bg-card shadow-soft">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="text-accent mr-3" size={24} />
              <h3 className="text-card-title font-serif">Philosophy</h3>
            </div>
            <div className="text-body space-y-3">
              <p className="leading-relaxed">
                Curiosity drives me. Reflection shapes me. 
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I combine thoughtful observation with continuous learning to create solutions that are both effective and meaningful.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills & Interests */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-card-title font-serif mb-6 flex items-center">
            <Briefcase className="mr-3" size={20} />
            Technical Skills
          </h3>
          
          {/* ML Skills Subsection */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center">
              <Brain className="mr-2" size={16} />
              Machine Learning & Research
            </h4>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-sans">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Software Engineering Skills Subsection */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center">
              <Code className="mr-2" size={16} />
              Software Engineering
            </h4>
            <div className="flex flex-wrap gap-2">
              {softwareSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-sans">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-card-title font-serif mb-6 flex items-center">
            <Lightbulb className="mr-3" size={20} />
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest} variant="outline" className="font-sans">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};