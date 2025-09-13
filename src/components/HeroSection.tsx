import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';
import founderPhoto from '@/assets/founder-photo.jpg';

const HeroSection = () => {
  return (
    <section className="section-padding pt-32 bg-gradient-hero">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI AUTOMATION FOR BUSINESSES
          </Badge>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary rounded-full p-6 shadow-strong">
              <img src={orbaiLogo} alt="ORB AI" className="h-16 w-16 filter invert" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            ORB AI
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Custom AI solutions, built for the innovators of tomorrow
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Get Template
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" className="px-8 py-3">
              See Our Services
            </Button>
          </div>

          {/* Testimonial */}
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border max-w-2xl mx-auto">
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