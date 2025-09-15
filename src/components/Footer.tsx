import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              CONTACT
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-ultra border border-white/20 shadow-ultra hover:shadow-depth transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name"
                      className="bg-white/15 backdrop-blur-glass border-white/30 text-white placeholder:text-white/70 shadow-glass hover:shadow-glass-hover focus:shadow-glass-hover transition-all duration-300"
                    />
                    <Input 
                      placeholder="Last Name"
                      className="bg-white/15 backdrop-blur-glass border-white/30 text-white placeholder:text-white/70 shadow-glass hover:shadow-glass-hover focus:shadow-glass-hover transition-all duration-300"
                    />
                  </div>
                  <Input 
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/15 backdrop-blur-glass border-white/30 text-white placeholder:text-white/70 shadow-glass hover:shadow-glass-hover focus:shadow-glass-hover transition-all duration-300"
                  />
                  <Input 
                    placeholder="Company"
                    className="bg-white/15 backdrop-blur-glass border-white/30 text-white placeholder:text-white/70 shadow-glass hover:shadow-glass-hover focus:shadow-glass-hover transition-all duration-300"
                  />
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-white/15 backdrop-blur-glass border-white/30 text-white placeholder:text-white/70 shadow-glass hover:shadow-glass-hover focus:shadow-glass-hover transition-all duration-300"
                  />
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-white to-white/95 text-primary hover:from-white/95 hover:to-white/90 shadow-ultra hover:shadow-depth transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-primary-foreground/80">hello@orbai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-primary-foreground/80">
                        123 AI Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="bg-white/15 backdrop-blur-glass border-white/30 text-white hover:bg-white/25 shadow-glass hover:shadow-glass-hover transform hover:-translate-y-0.5 transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={orbaiLogo} alt="ORB AI" className="h-8 w-8 filter invert" />
              <div className="text-left">
                <p className="font-bold">OrbAI</p>
                <p className="text-sm text-primary-foreground/60">
                  © 2024 OrbAI. All rights reserved.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;