import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Brain } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Adaptive Tutoring Assistant",
      description: `Developed an LLM-powered LSAT tutoring prototype using Streamlit with Firebase backend, leveraging the Gemini API for real-time dialogue-based instruction. 
      Conducted A/B testing comparing AI tutor interactions with textbook-based learning, integrating pre/post quizzes and user surveys to assess critical thinking outcomes.`,
      technologies: ["Python", "Streamlit", "Firebase", "Gemini API"],
      status: "Completed",
      category: "AI Application",
      icon: Code,
      links: {
        github: "https://github.com/shreetishresthanp/adaptive_tutoring_assistant",
        demo: "https://huggingface.co/spaces/LSATAdaptiveTutor/chatbot_tutor"
      }
    },
    {
      title: "Medical Summaries Evaluation Pipeline",
      description: `RQ: How readable and semantically accurate are NLP-generated medical summaries? \n Built an NLP evaluation pipeline combining automated metrics (ROUGE, BLEU, BERTScore, Flesch-Kincaid) with human feedback surveys. Generated 150 plain-language summaries of medical abstracts and automated result analysis to assess readability and semantic quality.`  ,
      technologies: ["Python", "Transformers", "Hugging Face"],
      status: "Completed",
      category: "NLP Evaluation",
      icon: Brain,
      links: {
        github: "https://github.com/shreetishresthanp/medical_summaries_evaluation",
        paper: "/pdfs/EvaluatingMedicalSummaries.pdf"
      }
    }
    // {
    //   title: "Research Paper Analyzer",
    //   description: "NLP tool that extracts key insights from academic papers and identifies potential research gaps in specific domains.",
    //   technologies: ["Python", "spaCy", "transformers", "FastAPI"],
    //   status: "Published",
    //   category: "NLP Tool",
    //   icon: Database,
    //   links: {
    //     github: "#",
    //     paper: "#"
    //   }
    // }
  ];

  const getStatusColor = (status: string): "default" | "secondary" | "outline" => {
    const statusColors: Record<string, "default" | "secondary" | "outline"> = {
      "Completed": "secondary",
      "Beta Testing": "secondary",
      "Published": "outline",
      "Under Review": "secondary"
    };
    return statusColors[status] || "outline";
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-section font-sans">Projects</h2>
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
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.paper && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Paper
                        </a>
                      </Button>            
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

    </section>
  );
};