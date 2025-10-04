import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Moon, Sunrise, Cloud } from 'lucide-react';

export const ReflectionsSection = () => {
  const reflections = [
    {
      title: "On Quiet Confidence",
      content: "There's something profound about the confidence that comes from deep understanding rather than loud proclamation. In research, I've learned that the most powerful insights often emerge from patient observation and thoughtful questioning, not from rushing to conclusions.",
      mood: "contemplative",
      date: "November 15, 2024",
      icon: Moon
    },
    {
      title: "Coffee Shop Observations",
      content: "Watching people work in cafes reminds me why user experience matters so much in AI. The way someone pauses before typing, the micro-expressions of confusion or delight—these small moments hold keys to building technology that truly serves human needs.",
      mood: "curious",
      date: "November 8, 2024", 
      icon: Coffee
    },
    {
      title: "The Learning Paradox",
      content: "As language models become more capable, I wonder about the value of struggle in learning. There's something irreplaceable about wrestling with a concept until understanding clicks. Maybe the goal isn't to eliminate that struggle, but to make it more meaningful.",
      mood: "wondering",
      date: "October 28, 2024",
      icon: Cloud
    },
    {
      title: "Morning Ritual",
      content: "My best insights come during morning walks, before the day's agenda takes over. There's a clarity in those early moments—mind quiet but alert, open to connections that emerge naturally. I'm trying to protect this time more deliberately.",
      mood: "peaceful",
      date: "October 20, 2024",
      icon: Sunrise
    }
  ];

  const getMoodColor = (mood: string): "default" | "secondary" | "outline" => {
    const moodColors: Record<string, "default" | "secondary" | "outline"> = {
      contemplative: "default",
      curious: "secondary", 
      wondering: "outline",
      peaceful: "secondary"
    };
    return moodColors[mood] || "outline";
  };

  return (
    <section id="reflections" className="py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">Reflections</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Quiet moments of introspection and observation from the journey
        </p>
      </div>

      <div className="space-y-8">
        {reflections.map((reflection, index) => {
          const Icon = reflection.icon;
          return (
            <Card key={index} className="hover-lift bg-card shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Icon className="text-accent mr-3" size={20} />
                    <Badge variant={getMoodColor(reflection.mood)} className="text-xs capitalize">
                      {reflection.mood}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{reflection.date}</span>
                </div>
                <CardTitle className="text-xl font-serif leading-tight">
                  {reflection.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body leading-relaxed">
                  {reflection.content}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Personal Note */}
      <div className="mt-16">
        <Card className="bg-gradient-subtle shadow-soft">
          <CardContent className="p-8 text-center">
            <Coffee className="mx-auto mb-4 text-accent" size={32} />
            <h3 className="text-xl font-serif mb-4">A Personal Note</h3>
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              These reflections capture moments of pause in an otherwise busy journey through research and learning. 
              They're reminders that growth happens not just in the lab or classroom, but in the quiet spaces between.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};