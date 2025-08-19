import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, Coffee, Lightbulb, BookOpen } from 'lucide-react';

export const WritingSection = () => {
  const writings = [
    {
      title: "On the Quiet Confidence of Code",
      excerpt: "Reflections on how programming teaches us patience, precision, and the beauty of iterative improvement.",
      category: "Technical Philosophy",
      readTime: "5 min read",
      date: "Nov 2024",
      type: "reflection"
    },
    {
      title: "Coffee Shop Algorithms",
      excerpt: "What observing people in cafes taught me about human-computer interaction and the importance of context.",
      category: "Observation",
      readTime: "3 min read", 
      date: "Oct 2024",
      type: "observation"
    },
    {
      title: "The Art of Technical Documentation",
      excerpt: "Why clear documentation is an act of empathy, and how it connects to deeper questions about knowledge sharing.",
      category: "Technical Writing",
      readTime: "7 min read",
      date: "Sep 2024",
      type: "technical"
    },
    {
      title: "Learning in the Age of LLMs",
      excerpt: "How large language models are changing what it means to learn, and what remains uniquely human in the process.",
      category: "AI & Learning",
      readTime: "6 min read",
      date: "Aug 2024",
      type: "research"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'reflection': return Coffee;
      case 'observation': return Lightbulb;
      case 'technical': return BookOpen;
      case 'research': return BookOpen;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string): "default" | "destructive" | "outline" | "secondary" => {
    const colors: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      'Technical Philosophy': 'default',
      'Observation': 'secondary',
      'Technical Writing': 'outline',
      'AI & Learning': 'default'
    };
    return colors[category] || 'outline';
  };

  return (
    <section id="writing" className="py-20 px-6 max-w-6xl mx-auto slide-up">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">Writing</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Thoughts on technology, learning, and the quiet moments that shape understanding
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {writings.map((writing, index) => {
          const Icon = getIcon(writing.type);
          return (
            <Card key={index} className="hover-lift bg-card shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <Icon className="text-accent mr-2" size={20} />
                    <Badge variant={getCategoryColor(writing.category)} className="text-xs">
                      {writing.category}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock size={14} className="mr-1" />
                    {writing.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif leading-tight">
                  {writing.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-muted-foreground mb-4 leading-relaxed">
                  {writing.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{writing.date}</span>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};