import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Code, Lightbulb } from 'lucide-react';

export const ResearchSection = () => {
  const researchProjects = [
    {
      title: "LLM Evaluation Frameworks",
      description: "Developing robust evaluation metrics for large language models in domain-specific applications.",
      status: "In Progress",
      tags: ["LLMs", "Evaluation", "NLP"],
      type: "research"
    },
    {
      title: "Ethical AI in Education",
      description: "Investigating the implications of AI-assisted learning and its impact on educational equity.",
      status: "Under Review",
      tags: ["AI Ethics", "Education", "Social Impact"],
      type: "research"
    },
    {
      title: "Multimodal Learning Systems",
      description: "Exploring cross-modal representations for enhanced understanding in AI systems.",
      status: "Published",
      tags: ["Multimodal", "Deep Learning", "Computer Vision"],
      type: "research"
    }
  ];

  const ongoingWork = [
    {
      title: "Weekly Research Synthesis",
      description: "Regular deep dives into cutting-edge ML research, distilled for practical insights.",
      icon: FileText
    },
    {
      title: "Experimental Implementations",
      description: "Building and testing novel approaches to current ML challenges.",
      icon: Code
    },
    {
      title: "Interdisciplinary Connections",
      description: "Exploring how ML intersects with philosophy, psychology, and human cognition.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="research" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">Research</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Exploring the frontiers of machine learning and artificial intelligence
        </p>
      </div>

      {/* Current Research Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif mb-8">Current Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project, index) => (
            <Card key={index} className="hover-lift bg-card shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-serif leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === 'Published' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  <ExternalLink size={16} className="mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Ongoing Work */}
      <div>
        <h3 className="text-2xl font-serif mb-8">Ongoing Work</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {ongoingWork.map((work, index) => (
            <Card key={index} className="hover-lift bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <work.icon className="text-accent mr-3" size={24} />
                  <h4 className="font-serif font-medium">{work.title}</h4>
                </div>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};