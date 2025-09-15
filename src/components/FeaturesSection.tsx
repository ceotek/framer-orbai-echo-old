import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Zap, BarChart3, Headphones } from 'lucide-react';
import aiVisualization from '@/assets/ai-visualization.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cutting-Edge AI",
      description: "Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Workflows",
      description: "Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Insightful Analytics",
      description: "Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "AI-Powered Support",
      description: "Enhance customer experience with AI-driven virtual assistants available for support and engagement."
    }
  ];

  return (
    <section id="features" className="section-padding bg-brand-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full shadow-medium px-4 py-2">
            FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All features in 1 tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover features that simplify workflows & grow your business.
          </p>
        </div>

        {/* Main Graphic */}
        <div className="text-center mb-16">
          <img 
            src={aiVisualization}
            alt="AI Technology Visualization"
            className="mx-auto max-w-full h-auto rounded-2xl shadow-strong transform hover:-translate-y-2 transition-all duration-300"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-border shadow-strong hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full w-fit shadow-medium">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-strong transform hover:-translate-y-1 transition-all duration-300 h-11 py-3">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all duration-300 h-11 py-3">
            See Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;