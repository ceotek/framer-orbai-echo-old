import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, PenTool, MessageSquare, Workflow } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Digital Investigations",
      description: "High-profile investigations of white-collar crime and digital forensics with expert analysis",
      interactive: false
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Digital Footprint Removal",
      description: "We provide comprehensive digital footprint removal services to protect your privacy and reputation across all digital platforms.",
      interactive: true,
      buttons: ["Assess footprint", "Remove traces", "Monitor cleanup", "Generate report"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Threat Intelligence",
      description: "We develop advanced threat intelligence systems to identify, analyze, and neutralize digital threats before they impact your organization.",
      interactive: true,
      chatInput: true
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Digital Asset Recovery",
      description: "Recover stolen digital assets and secure evidence that others cannot obtain through advanced techniques",
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
            Our Cybersecurity Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced cybersecurity solutions that deliver results in the most challenging scenarios.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-strong hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 rounded-2xl">
              <CardContent className="p-8">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative flex-shrink-0">
                    {/* Ultra-realistic 3D shadow base for service icons */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300/60 to-gray-500/60 rounded-full blur-lg opacity-40 scale-110 transform translate-y-3"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400/40 to-gray-600/40 rounded-full blur-md opacity-30 scale-105 transform translate-y-2"></div>
                    
                    {/* Main icon container */}
                    <div className="relative bg-gradient-to-br from-white via-primary/5 to-primary/10 rounded-full p-3 shadow-icon-3d hover:shadow-icon-hover transition-all duration-400 transform hover:-translate-y-1 hover:scale-105 border border-white/30 backdrop-blur-sm">
                      {/* Inner highlight */}
                      <div className="absolute inset-1 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-primary">
                        {service.icon}
                      </div>
                    </div>
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