import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, BookOpen } from 'lucide-react';

export const BooksSection = () => {
  const books = [
    {
      title: "The Alignment Problem",
      author: "Brian Christian",
      rating: 5,
      category: "AI Ethics",
      thoughts: "A profound exploration of how we might align AI systems with human values. Christian's accessible writing makes complex concepts digestible while never losing the philosophical depth.",
      currentlyReading: false,
      dateRead: "Oct 2024"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      rating: 4,
      category: "Cognitive Science",
      thoughts: "Essential reading for anyone working in AI/ML. Understanding human cognitive biases is crucial for building systems that complement rather than replicate our limitations.",
      currentlyReading: false,
      dateRead: "Sep 2024"
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      rating: 5,
      category: "Design",
      thoughts: "Norman's principles apply beautifully to AI interface design. The book reinforced my belief that the most powerful technology should feel invisible and intuitive.",
      currentlyReading: false,
      dateRead: "Aug 2024"
    },
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      rating: 5,
      category: "Philosophy",
      thoughts: "Currently savoring this masterpiece. The connections between mathematics, art, and consciousness feel particularly relevant to current AI discussions.",
      currentlyReading: true,
      dateRead: ""
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-accent text-accent" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section id="books" className="py-20 px-6 max-w-none slide-up lg:mr-64 lg:ml-8 ml-0 mr-0 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-section mb-4 font-serif">Books</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Thoughts on books that shape how I think about technology, learning, and life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {books.map((book, index) => (
          <Card key={index} className="hover-lift bg-card shadow-soft">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge 
                  variant={book.currentlyReading ? "default" : "secondary"} 
                  className="text-xs"
                >
                  {book.currentlyReading ? "Currently Reading" : book.category}
                </Badge>
                <div className="flex items-center">
                  {renderStars(book.rating)}
                </div>
              </div>
              <CardTitle className="text-xl font-serif leading-tight">
                {book.title}
              </CardTitle>
              <p className="text-muted-foreground font-medium">by {book.author}</p>
            </CardHeader>
            <CardContent>
              <p className="text-body text-muted-foreground mb-4 leading-relaxed italic">
                "{book.thoughts}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {book.currentlyReading ? "In Progress" : book.dateRead}
                </span>
                <Button variant="ghost" size="sm">
                  <ExternalLink size={16} className="mr-2" />
                  Goodreads
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reading Philosophy */}
      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-gradient-subtle shadow-soft">
          <CardContent className="p-8 text-center">
            <BookOpen className="mx-auto mb-4 text-accent" size={32} />
            <h3 className="text-xl font-serif mb-4">Reading Philosophy</h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              I read slowly and deliberately, often returning to passages that challenge my thinking. 
              Each book is a conversation partner in my ongoing exploration of how we learn, create, and connect.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};