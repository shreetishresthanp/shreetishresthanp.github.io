import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Brain } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "ML Model Evaluation Suite",
      description: "A comprehensive framework for evaluating large language models across multiple dimensions including accuracy, bias, and computational efficiency.",
      technologies: ["Python", "PyTorch", "Hugging Face", "Docker"],
      status: "Active Development",
      category: "Research Tool",
      icon: Brain,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Educational AI Assistant",
      description: "An intelligent tutoring system that adapts to individual learning styles while maintaining transparency in its reasoning process.",
      technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
      status: "Beta Testing",
      category: "AI Application",
      icon: Code,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Research Paper Analyzer",
      description: "NLP tool that extracts key insights from academic papers and identifies potential research gaps in specific domains.",
      technologies: ["Python", "spaCy", "transformers", "FastAPI"],
      status: "Published",
      category: "NLP Tool",
      icon: Database,
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Ethical AI Framework",
      description: "A practical framework for assessing and improving the ethical implications of AI systems in educational contexts.",
      technologies: ["Python", "Jupyter", "pandas", "scikit-learn"],
      status: "Under Review",
      category: "Research",
      icon: Brain,
      links: {
        github: "#",
        paper: "#"
      }
    }
  ];

  const getStatusColor = (status: string): "default" | "secondary" | "outline" => {
    const statusColors: Record<string, "default" | "secondary" | "outline"> = {
      "Active Development": "default",
      "Beta Testing": "secondary",
      "Published": "outline",
      "Under Review": "secondary"
    };
    return statusColors[status] || "outline";
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">Projects</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Building tools and frameworks that bridge research insights with practical applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Card key={index} className="hover-lift bg-card shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <Icon className="text-accent mr-3" size={24} />
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <Badge variant={getStatusColor(project.status)} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-serif leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="ghost" size="sm">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Development Philosophy */}
      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-gradient-subtle shadow-soft">
          <CardContent className="p-8 text-center">
            <Code className="mx-auto mb-4 text-accent" size={32} />
            <h3 className="text-xl font-serif mb-4">Development Philosophy</h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              I believe in building tools that are not just functional, but thoughtful. 
              Every project is an opportunity to bridge the gap between research insights and real-world impact, 
              always keeping human needs and ethical considerations at the center.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};