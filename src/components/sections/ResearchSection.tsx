import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Code, Lightbulb } from 'lucide-react';

export const ResearchSection = () => {
  const publications = [{
    title: "Ontology",
    citation: "An Ontology for Psychological Ownership to Predict Organizational Ambidexterity\nS Shrestha, N Varma - 2021 - Society of Advanced Management",
    abstract_link: "https://www.ramapo.edu/scholarsday/wp-content/uploads/sites/26/formidable/11/ScholarsWeek2021_Shreeti_Shrestha_Abstract.pdf"
  }]
  const researchProjects = [
    {
      title: "Adaptive Tutoring Assistant: LLM-Powered Learning vs. Traditional Methods",
      researchQuestion: "RQ: How does an AI-powered tutoring assistant affect overall learning, engagement, and user experience compared to traditional textbook-based study? ",
      description: "Developed an LSAT tutor prototype using Gemini API and Streamlit. Conducted an A/B testing pilot with an AI tutor (experimental group) versus textbook-based learning (control group). Collected pre/post quiz scores and survey feedback to explore benefits and user experience, without aiming for definitive conclusions.",
      status: "Completed",
      tags: ["LLMs", "Education", "Human-Centered NLP"],
      type: "research",
      learnMore: "/pdfs/AdaptiveTutoringAssistant.pdf"
    },
    {
      title: "Usability Testing Study Design for Health Information Chatbots",
      researchQuestion: "RQ: How do source citations influence user trust and usability in health information chatbots? ",
      description: `Designed a split-plot study with quantitative metrics (System Usability Scale, Credibility Perception Scale, interaction patterns) 
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
    <section id="research" className="py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-section font-sans">Research</h2>
      </div>

      {/* Publications */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif mb-8">Publications</h3>
        {publications.map((publication, index) => (
          <div className='border-black'>
                    <p className="text-body text-muted-foreground max-w-2xl text-xl mb-10">
              AI in Passive Sensing Dashboards (Coming Soon...) </p>
            <div className="text-body text-muted-foreground text-xl">
              <div>An Ontology for Psychological Ownership to Predict Organizational Ambidexterity</div>
              <div className="text-sm text-gray-500 mt-1">S Shrestha, N Varma - 2021 - ramapo.edu</div>
            </div>
          <Button variant="ghost" size="sm" className="" asChild>
            <a href={publication.abstract_link} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              View Abstract
            </a>
          </Button>

            </div>
          ))}
      </div>
      {/* Current Research Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif mb-8"> Experiments</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
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
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed text-justify font-bold">
                 {project.researchQuestion}
    </p>
                <p className="text-body text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
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
    </section>
  );
};