import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, PenTool, MessageSquare, Workflow } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Strategy Consulting",
      description: "Get expert guidance to implement AI solutions that drive business growth",
      interactive: false
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Generation",
      description: "We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand's voice.",
      interactive: true,
      buttons: ["Continue writing", "Fix spelling", "Explain in detail", "Generate"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI-Powered Chatbots",
      description: "We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations.",
      interactive: true,
      chatInput: true
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automated Workflows",
      description: "Automate workflows to streamline tasks, boost efficiency, and save time",
      interactive: false
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full shadow-medium px-4 py-2">
            SERVICES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our AI-Driven Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage AI features that boost performance to your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-strong hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full shadow-medium">
                    <img src={orbaiLogo} alt="Service Icon" className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Elements */}
                {service.interactive && service.buttons && (
                  <div className="space-y-3 mb-4">
                    {service.buttons.map((button, btnIndex) => (
                      <Button 
                        key={btnIndex}
                        variant="outline" 
                        size="sm"
                        className="w-full justify-start text-left rounded-2xl shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-300 h-9 py-2"
                      >
                        {button}
                      </Button>
                    ))}
                  </div>
                )}

                {service.interactive && service.chatInput && (
                  <div className="mt-6">
                    <div className="bg-muted rounded-2xl p-4 mb-3 shadow-soft">
                      <p className="text-sm text-muted-foreground">
                        Type a message
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;