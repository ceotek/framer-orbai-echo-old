import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import diLogo from '@/assets/di-logo.png';
import founderPhoto from '@/assets/founder-photo.jpg';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:py-20 lg:px-6 bg-gradient-hero relative overflow-visible">
      {/* Geometric Background Pattern - Constrained to prevent overflow */}
      <div className="absolute inset-0 opacity-30 overflow-hidden max-w-full">
        {/* Large Circle Ring */}
        <div className="absolute top-20 left-[10%] w-60 h-60 sm:w-80 sm:h-80 border border-muted-foreground/20 rounded-full"></div>
        
        {/* Medium Circle Ring */}
        <div className="absolute top-40 right-[15%] w-40 h-40 sm:w-48 sm:h-48 border border-muted-foreground/15 rounded-full"></div>
        
        {/* Small Circle Ring */}
        <div className="absolute bottom-32 left-[20%] w-20 h-20 sm:w-24 sm:h-24 border border-muted-foreground/10 rounded-full"></div>
        
        {/* Filled Circles */}
        <div className="absolute top-32 right-[25%] w-12 h-12 sm:w-16 sm:h-16 bg-muted-foreground/10 rounded-full"></div>
        <div className="absolute bottom-40 right-[30%] w-10 h-10 sm:w-12 sm:h-12 bg-muted-foreground/15 rounded-full"></div>
        
        {/* Small Dots */}
        <div className="absolute top-60 left-[15%] w-3 h-3 bg-muted-foreground/20 rounded-full"></div>
        <div className="absolute top-80 right-[35%] w-2 h-2 bg-muted-foreground/25 rounded-full"></div>
        <div className="absolute bottom-60 left-[35%] w-4 h-4 bg-muted-foreground/15 rounded-full"></div>
        <div className="absolute top-96 left-[50%] w-2 h-2 bg-muted-foreground/20 rounded-full"></div>
        <div className="absolute bottom-80 right-[20%] w-3 h-3 bg-muted-foreground/10 rounded-full"></div>
      </div>
      
      <div className="container-max relative z-10 max-w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 sm:mb-8 px-4 py-2 text-sm font-medium rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.1)] border border-border/40 backdrop-blur-sm">
            <div className="relative mr-2">
              {/* 3D shadow for sparkle icon */}
              <div className="absolute inset-0 transform translate-x-0.5 translate-y-1">
                <Sparkles className="w-4 h-4 text-black/30 blur-sm" />
              </div>
              <div className="absolute inset-0 transform translate-x-0.5 translate-y-0.5">
                <Sparkles className="w-4 h-4 text-black/20" />
              </div>
              {/* Main sparkle icon */}
              <Sparkles className="w-4 h-4 relative z-10" />
            </div>
            AI AUTOMATION FOR BUSINESSES
          </Badge>

          {/* Logo */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="relative">
              {/* Clean, static logo (remove layered shadow elements) */}
              
              {/* Main icon container - static, no hover transitions */}
              <div className="relative bg-black rounded-full overflow-hidden h-24 w-24 sm:h-[7.5rem] sm:w-[7.5rem] border border-white/30 flex items-center justify-center shadow-[0_6px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]">
                {/* Inner glow effect - keep subtle without shrinking the image area */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                <img
                  src={diLogo}
                  alt="Defend Info logo"
                  loading="eager"
                  decoding="sync"
                  draggable={false}
                  className="w-full h-full object-contain select-none"
                  style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            Cybersecurity Redefined
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2 max-w-full">
            Proactive. Adaptive. Relentless. Securing your digital presence when others fall short.
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
              "We excel in achieving what others consider unfeasible. Utilizing advanced technology and expert operatives, we secure evidence that others cannot obtain through complex tactics."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={founderPhoto}
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Founder of DEFEND INFO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;