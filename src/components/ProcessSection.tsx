import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import teamWorking from '@/assets/team-working.jpg';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Workflow Assessment",
      description: "We begin by examining your existing workflows to identify where AI can deliver the greatest impact.",
      image: teamWorking
    },
    {
      number: "02", 
      title: "Deploy with Confidence",
      description: "Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.",
      image: teamWorking
    },
    {
      number: "03",
      title: "Ongoing Support & Optimization", 
      description: "After deployment, we provide support and refine your AI systems to keep them performing at their best.",
      image: teamWorking
    }
  ];

  return (
    <section className="section-padding bg-brand-gray">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            PROCESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple & Scalable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent process of collaboration and feedback
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Card className="overflow-hidden shadow-medium">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;