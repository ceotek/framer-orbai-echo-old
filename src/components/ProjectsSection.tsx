import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: "01",
      title: "MedixCare—AI Triage Assistant for Healthcare",
      description: "We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.",
      metrics: [
        { value: "45", label: "Reduced average wait", unit: "%" },
        { value: "92", label: "Rise in patient satisfaction", unit: "%" }
      ]
    },
    {
      id: "02", 
      title: "RetailBot—Smart Customer Service AI",
      description: "Developed an intelligent chatbot that handles customer inquiries and provides personalized product recommendations.",
      metrics: [
        { value: "60", label: "Response time improvement", unit: "%" },
        { value: "85", label: "Customer satisfaction increase", unit: "%" }
      ]
    },
    {
      id: "03",
      title: "FinanceFlow—Automated Document Processing",
      description: "Created an AI system that processes financial documents and extracts key data points for faster decision making.",
      metrics: [
        { value: "70", label: "Processing time reduction", unit: "%" },
        { value: "95", label: "Accuracy improvement", unit: "%" }
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            PROJECTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven Impact & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Projects that reflect our AI expertise & real world impact
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {projects.map((_, index) => (
              <Button
                key={index}
                variant={index === currentProject ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentProject(index)}
                className="px-6"
              >
                PROJECT {index + 1}
              </Button>
            ))}
          </div>
        </div>

        {/* Current Project Display */}
        <Card className="bg-gradient-card border-border shadow-medium mb-8">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Content */}
              <div className="space-y-6">
                <div className="text-8xl font-bold text-primary/20">
                  {currentProjectData.id}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {currentProjectData.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentProjectData.description}
                </p>
              </div>

              {/* Project Metrics */}
              <div className="space-y-8">
                {currentProjectData.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-background rounded-xl shadow-soft">
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                      {metric.value}
                      <span className="text-3xl">{metric.unit}</span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevProject}
            className="px-8"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextProject}
            className="px-8"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;