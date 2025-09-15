import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ShieldCheck, 
  Eye, 
  HardDrive, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'digital-investigations',
      icon: <Search className="w-8 h-8" />,
      title: 'Digital Investigations',
      shortDescription: 'High-profile investigations of white-collar crime and digital forensics',
      fullDescription: 'We specialize in complex digital investigations involving white-collar crime, corporate fraud, and cybercrime. Our expert investigators utilize advanced forensic techniques and cutting-edge technology to uncover digital evidence that others cannot obtain. We handle sensitive cases with complete discretion and provide comprehensive reports that stand up in legal proceedings.',
      features: [
        'White-collar crime investigation',
        'Corporate fraud analysis',
        'Digital evidence collection',
        'Forensic data recovery',
        'Legal compliance reporting',
        'Expert witness testimony'
      ],
      timeline: '2-8 weeks',
      teamSize: '3-6 experts'
    },
    {
      id: 'digital-footprint-removal',
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Digital Footprint Removal',
      shortDescription: 'Comprehensive digital footprint removal to protect privacy and reputation',
      fullDescription: 'Our digital footprint removal service provides comprehensive protection of your online privacy and reputation. We systematically identify, assess, and remove unwanted digital traces across the internet, including social media platforms, search engines, data brokers, and public records. Our advanced techniques ensure permanent removal while protecting your legitimate online presence.',
      features: [
        'Complete digital footprint assessment',
        'Social media trace removal',
        'Search engine result cleanup',
        'Data broker opt-outs',
        'Public records removal',
        'Ongoing monitoring and protection'
      ],
      timeline: '4-12 weeks',
      teamSize: '2-4 specialists'
    },
    {
      id: 'threat-intelligence',
      icon: <Eye className="w-8 h-8" />,
      title: 'Threat Intelligence',
      shortDescription: 'Advanced threat analysis and intelligence gathering services',
      fullDescription: 'Our threat intelligence service provides comprehensive analysis of digital threats targeting your organization. We monitor dark web activities, analyze attack patterns, and provide actionable intelligence to prevent cyber attacks. Our global network of analysts delivers real-time threat assessments and strategic recommendations to protect your digital assets.',
      features: [
        'Dark web monitoring',
        'Threat actor profiling',
        'Attack pattern analysis',
        'Real-time threat alerts',
        'Strategic risk assessment',
        'Incident response planning'
      ],
      timeline: 'Ongoing service',
      teamSize: '4-8 analysts'
    },
    {
      id: 'digital-asset-recovery',
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Digital Asset Recovery',
      shortDescription: 'Recovery of stolen digital assets using advanced techniques',
      fullDescription: 'We specialize in the recovery of stolen or compromised digital assets including cryptocurrencies, intellectual property, and sensitive data. Our team employs advanced blockchain analysis, digital forensics, and international coordination to trace and recover assets that others consider permanently lost. We work closely with law enforcement and legal teams to ensure successful recovery.',
      features: [
        'Cryptocurrency tracing and recovery',
        'Intellectual property retrieval',
        'Stolen data recovery',
        'Blockchain analysis',
        'International asset coordination',
        'Legal proceeding support'
      ],
      timeline: '6-16 weeks',
      teamSize: '3-7 specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-primary/[0.03] pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:py-20">
          <div className="container-max max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full shadow-medium">
                <ShieldCheck className="w-4 h-4 mr-2" />
                CYBERSECURITY SERVICES
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Advanced Cybersecurity Solutions
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We excel in achieving what others consider unfeasible. Our comprehensive cybersecurity services 
                deliver results in the most challenging scenarios, utilizing advanced technology and expert operatives.
              </p>
              
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-12 text-base font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <Card key={service.id} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300/60 to-gray-500/60 rounded-full blur-lg opacity-40 scale-110 transform translate-y-3"></div>
                        <div className="relative bg-gradient-to-br from-white via-primary/5 to-primary/10 rounded-full p-4 shadow-icon-3d hover:shadow-icon-hover transition-all duration-400 transform hover:-translate-y-1 hover:scale-105 border border-white/30 backdrop-blur-sm">
                          <div className="absolute inset-1 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm"></div>
                          <div className="relative z-10 text-primary">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground mb-4">
                          {service.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{service.teamSize}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="w-4 h-4" />
                            <span>Global Coverage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4">Key Capabilities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-medium transform hover:-translate-y-1 transition-all duration-300">
                        Request Consultation
                      </Button>
                      <Button variant="outline" className="rounded-2xl shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <div className="text-center py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl border border-border/30">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Secure Your Organization?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our cybersecurity experts today for a comprehensive security assessment 
                and customized protection strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 h-14 text-lg font-medium shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  Contact Security Team
                </Button>
                <Button size="lg" variant="outline" className="px-12 py-4 h-14 text-lg font-medium shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 transition-all duration-300 border border-border/60 rounded-2xl">
                  Schedule Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;