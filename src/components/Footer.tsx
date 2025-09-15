import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Github } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={orbaiLogo} alt="DEFEND INFO" className="h-8 w-8 filter invert" />
              <div className="text-left">
                <p className="font-bold">DEFEND INFO</p>
                <p className="text-sm text-primary-foreground/60">
                  © 2024 DEFEND INFO. All rights reserved.
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