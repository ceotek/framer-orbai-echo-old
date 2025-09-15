import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Emergency Response',
      description: '24/7 emergency cybersecurity response line',
      contact: '+1 (555) 123-SECURE',
      availability: 'Available 24/7'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Secure Communication',
      description: 'Encrypted email for sensitive inquiries',
      contact: 'secure@defendinfo.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Consultation Request',
      description: 'Schedule a confidential security consultation',
      contact: 'Book Online',
      availability: 'Same-day availability'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Secure Facility',
      description: 'Visit our secure operations center',
      contact: 'Multiple Global Locations',
      availability: 'By appointment only'
    }
  ];

  const expertise = [
    'Digital Investigations',
    'Threat Intelligence',
    'Asset Recovery',
    'Footprint Removal',
    'Incident Response',
    'Security Consulting'
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
                <Shield className="w-4 h-4 mr-2" />
                SECURE CONTACT
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Contact Our Security Experts
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Get in touch with our cybersecurity professionals for confidential consultations, 
                emergency response, or to discuss how we can protect your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center">
                  <CardContent className="p-6">
                    <div className="relative mb-4 mx-auto w-fit">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300/60 to-gray-500/60 rounded-full blur-lg opacity-40 scale-110 transform translate-y-2"></div>
                      <div className="relative bg-gradient-to-br from-white via-primary/5 to-primary/10 rounded-full p-3 shadow-icon-3d border border-white/30 backdrop-blur-sm">
                        <div className="text-primary">
                          {method.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    <p className="text-primary font-medium mb-2">
                      {method.contact}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{method.availability}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    Secure Contact Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    All communications are encrypted and handled with complete confidentiality.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <Input placeholder="Your full name" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Organization</label>
                      <Input placeholder="Company name" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input type="email" placeholder="your.email@domain.com" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Interest</label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-xl text-foreground">
                      <option>Select a service</option>
                      <option>Digital Investigations</option>
                      <option>Threat Intelligence</option>
                      <option>Digital Footprint Removal</option>
                      <option>Digital Asset Recovery</option>
                      <option>Security Consultation</option>
                      <option>Emergency Response</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      placeholder="Describe your security needs or incident details. All information is kept strictly confidential."
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>
                  
                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl">
                    <Shield className="w-4 h-4 inline mr-2" />
                    This form uses end-to-end encryption. Your information is secure and will only be accessed by authorized security personnel.
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-depth hover:shadow-ultra transform hover:-translate-y-1 transition-all duration-300 h-12">
                    <Send className="mr-2 h-5 w-5" />
                    Send Secure Message
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                {/* Expertise Areas */}
                <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Our Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {expertise.map((area, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Response Times */}
                <Card className="bg-card/80 backdrop-blur-glass border border-border/60 shadow-glass rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Emergency Incidents</span>
                      <span className="text-primary font-semibold">Immediate</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Security Consultations</span>
                      <span className="text-primary font-semibold">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">General Inquiries</span>
                      <span className="text-primary font-semibold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Project Proposals</span>
                      <span className="text-primary font-semibold">Within 48 hours</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Notice */}
                <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Confidentiality Guaranteed
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          All communications are protected by attorney-client privilege where applicable. 
                          We maintain the highest standards of operational security and confidentiality 
                          in all our client interactions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;