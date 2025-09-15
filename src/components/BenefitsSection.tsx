import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Clock, DollarSign } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Stay ahead with accurate, real-time performance tracking"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Driven Growth",
      description: "Make smarter moves with accurate, real-time business insights."
    }
  ];

  const stats = [
    { value: "20%", label: "Automation", type: "before" },
    { value: "60%", label: "Cost", type: "after" }
  ];

  const features = [
    "Faster Innovation",
    "Virtual Assistance", 
    "Scalable Solutions",
    "Personalized Experiences",
    "Cost Effective",
    "Real-Time Insights",
    "Automation",
    "Data-Driven Decisions"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full shadow-medium px-4 py-2">
            BENEFITS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with an AI agency delivering smart solutions.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-strong hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full w-fit shadow-medium">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card p-8 rounded-2xl shadow-strong border border-border">
              <div className="text-6xl md:text-8xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground mb-2">{stat.label}</div>
              <Badge variant={stat.type === "before" ? "secondary" : "default"} className="rounded-full shadow-medium">
                {stat.type.toUpperCase()}
              </Badge>
            </div>
          ))}
        </div>

        {/* Sync Section */}
        <Card className="bg-gradient-card border-border shadow-strong mb-16 rounded-2xl transform hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full shadow-medium">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Sync in real time
            </h3>
            <p className="text-muted-foreground">
              connect with your team instantly to track progress and updates
            </p>
          </CardContent>
        </Card>

        {/* Features Marquee */}
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {[...features, ...features, ...features].map((feature, index) => (
              <div key={index} className="flex-shrink-0 flex items-center space-x-2">
                <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                  • {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;