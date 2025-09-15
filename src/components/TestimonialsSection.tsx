import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Their AI-driven approach helped us reach the right audience and grow faster with smarter insights—streamlining our strategy, improving engagement, and delivering results we couldn't achieve before.",
      author: "Brendan",
      title: "Marketing Director at StratIQ",
      avatar: testimonial1
    },
    {
      quote: "We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us",
      author: "Lena M",
      title: "Manager at NovaTech", 
      avatar: testimonial2
    },
    {
      quote: "Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.",
      author: "Eli R",
      title: "COO at GridFrame",
      avatar: testimonial3
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-brand-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full shadow-medium px-4 py-2">
            CUSTOMERS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join customers who trust AI to transform their business.
          </p>
        </div>

        {/* Main Testimonial */}
        <Card className="bg-background border-border shadow-strong mb-16 rounded-2xl transform hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-12">
            <div className="text-center max-w-4xl mx-auto">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "{currentTest.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={currentTest.avatar}
                  alt={currentTest.author}
                  className="w-16 h-16 rounded-full object-cover shadow-medium"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground">
                    {currentTest.author}
                  </p>
                  <p className="text-muted-foreground">
                    {currentTest.title}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 mb-16">
          <Button
            variant="outline"
            size="lg"
            onClick={prevTestimonial}
            className="rounded-full shadow-medium hover:shadow-strong transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextTestimonial}
            className="rounded-full shadow-medium hover:shadow-strong transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card p-8 rounded-2xl shadow-strong border border-border transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-lg text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;