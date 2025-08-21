import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Code, Lightbulb } from 'lucide-react';

export const ResearchSection = () => {
  const researchProjects = [
    {
      title: "Adaptive Tutoring Assistant: LLM-Powered Learning vs. Traditional Methods",
      description: `RQ: How does an AI-powered tutoring assistant affect overall learning, engagement, and user experience compared to traditional textbook-based study? 
      Developed an LSAT tutor prototype using Gemini API and Streamlit. Conducted an A/B testing pilot with an AI tutor (experimental group) versus textbook-based learning (control group). Collected pre/post quiz scores and survey feedback to explore benefits and user experience, without aiming for definitive conclusions.`,
      status: "Completed",
      tags: ["LLMs", "Education", "Human-Centered NLP"],
      type: "research",
      learnMore: "/pdfs/AdaptiveTutoringAssistant.pdf"
    },
   {
      title: "Evaluating NLP-Generated Medical Summaries: Standard Metrics & Human Feedback",
      // title: "Evaluating Model Outputs with NLP Metrics and Human Feedback for Medical Summaries",
      description: ` RQ: How readable and semantically accurate are NLP-generated medical summaries? 
      Evaluated outputs with automated metrics (ROUGE, BLEU, BERTScore, Flesch-Kincaid) 
      and human Likert-scale feedback, identifying accessibility gaps and proposing improvements 
      through prompt tuning and domain-specific data.`,
      status: "Completed",
      tags: ["LLMs", "NLP Evaluation", "Healthcare NLP"],
     type: "research",
      learnMore: "/pdfs/EvaluatingMedicalSummaries.pdf"
    },
    {
      title: "Usability Testing Study Design for Health Information Chatbots",
      description: `RQ: How do source citations influence user trust and usability in health information chatbots? 
      Designed a split-plot study with quantitative metrics (System Usability Scale, Credibility Perception Scale, interaction patterns) 
      and qualitative thematic analysis of debrief responses to assess trust cues, perceived safety, and clarity.`,
      status: "Completed",
      tags: ["Usability", "Human-Centered NLP", "Healthcare AI", "AI Ethics"],
      type: "research",
      learnMore:"/pdfs/UsabilityStudyDesign.pdf"
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

      {/* Publications */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif mb-8">Publications</h3>
        <p className="text-body text-muted-foreground max-w-2xl text-xl">
          Coming Soon ... </p>
      </div>
      {/* Current Research Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif mb-8">Current Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                <p className="text-body text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                 {project.learnMore && (
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <a href={project.learnMore} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Learn More
                      </a>
                    </Button>
                  )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Statement */}
      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-gradient-subtle shadow-soft">
          <CardContent className="p-8 text-center">
            <Code className="mx-auto mb-4 text-accent" size={32} />
            <h3 className="text-xl font-serif mb-4">Research Statement</h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              My goal lies in learning to integrate neural networks in decision support systems, ensuring we can build models that are robust, scalable, and interpretable.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};