import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Zap, BarChart3, Headphones } from 'lucide-react';
import aiVisualization from '@/assets/ai-visualization.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "Deploy cutting-edge cybersecurity technology that adapts quickly and scales with evolving digital threats."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expert Operatives",
      description: "Utilize our network of expert operatives with specialized skills in digital forensics and threat neutralization."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Global Intelligence",
      description: "Access comprehensive global intelligence networks to reveal concealed truths and provide critical insights."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Response Team",
      description: "Round-the-clock cybersecurity response team available for immediate threat assessment and incident management."
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
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover capabilities that secure your organization and neutralize complex threats.
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
              Secure Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all duration-300 h-11 py-3">
              Contact Security Team
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;