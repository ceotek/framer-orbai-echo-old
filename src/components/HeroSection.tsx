import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';
import founderPhoto from '@/assets/founder-photo.jpg';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:py-20 lg:px-6 bg-gradient-hero relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        {/* Large Circle Ring */}
        <div className="absolute top-20 left-1/4 w-80 h-80 sm:w-96 sm:h-96 border border-muted-foreground/20 rounded-full"></div>
        
        {/* Medium Circle Ring */}
        <div className="absolute top-40 right-1/3 w-48 h-48 sm:w-64 sm:h-64 border border-muted-foreground/15 rounded-full"></div>
        
        {/* Small Circle Ring */}
        <div className="absolute bottom-32 left-1/3 w-24 h-24 sm:w-32 sm:h-32 border border-muted-foreground/10 rounded-full"></div>
        
        {/* Filled Circles */}
        <div className="absolute top-32 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-muted-foreground/10 rounded-full"></div>
        <div className="absolute bottom-40 right-1/5 w-12 h-12 sm:w-16 sm:h-16 bg-muted-foreground/15 rounded-full"></div>
        
        {/* Small Dots */}
        <div className="absolute top-60 left-1/5 w-3 h-3 bg-muted-foreground/20 rounded-full"></div>
        <div className="absolute top-80 right-2/5 w-2 h-2 bg-muted-foreground/25 rounded-full"></div>
        <div className="absolute bottom-60 left-2/5 w-4 h-4 bg-muted-foreground/15 rounded-full"></div>
        <div className="absolute top-96 left-3/5 w-2 h-2 bg-muted-foreground/20 rounded-full"></div>
        <div className="absolute bottom-80 right-1/6 w-3 h-3 bg-muted-foreground/10 rounded-full"></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-44 left-1/6 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
        <div className="absolute top-72 right-1/3 w-1 h-1 bg-muted-foreground/25 rounded-full"></div>
        <div className="absolute bottom-96 left-2/3 w-1 h-1 bg-muted-foreground/20 rounded-full"></div>
        <div className="absolute top-52 right-1/5 w-1 h-1 bg-muted-foreground/15 rounded-full"></div>
        <div className="absolute bottom-52 left-1/4 w-1 h-1 bg-muted-foreground/25 rounded-full"></div>
      </div>
      
      <div className="container-max relative z-10 max-w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 sm:mb-8 px-4 py-2 text-sm font-medium rounded-full shadow-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI AUTOMATION FOR BUSINESSES
          </Badge>

          {/* Logo */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="bg-primary rounded-full p-4 sm:p-6 shadow-strong border border-border">
              <img src={orbaiLogo} alt="ORB AI" className="h-12 w-12 sm:h-16 sm:w-16 filter invert" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            ORB AI
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2 max-w-full">
            Custom AI solutions, built for the innovators of tomorrow
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 max-w-full">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-12 py-3 h-11 text-sm sm:text-base font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 border-0 rounded-2xl flex-1 max-w-[200px] sm:min-w-[240px] sm:w-auto">
              Get Template
              <ArrowRight className="ml-1 sm:ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-6 sm:px-12 py-3 h-11 text-sm sm:text-base font-medium shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 transition-all duration-300 border border-border/60 rounded-2xl flex-1 max-w-[200px] sm:min-w-[240px] sm:w-auto">
              See Our Services
            </Button>
          </div>

          {/* Testimonial */}
          <div className="bg-card rounded-2xl p-8 shadow-strong border border-border max-w-2xl mx-auto">
            <blockquote className="text-lg md:text-xl font-medium text-foreground mb-6 leading-relaxed">
              "We harness your data, understand your audience, and use AI to help your brand rise above the noise. The best part? We execute, too."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={founderPhoto}
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Founder of ORB AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;