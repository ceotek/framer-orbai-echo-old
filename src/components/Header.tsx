import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import orbaiLogo from '@/assets/orbai-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Services', href: '#services' },
    { name: 'Updates', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-ultra border-b border-border/60 shadow-glass">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-glass">
              <img src={orbaiLogo} alt="ORB AI" className="h-8 w-8 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">OrbAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full px-4 py-2 bg-card/60 backdrop-blur-glass shadow-glass hover:shadow-glass-hover border border-border/40 hover:border-border/60 transform hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 rounded-2xl shadow-ultra hover:shadow-depth transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 backdrop-blur-glass border border-primary/20 h-11 py-3">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden shadow-glass"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-ultra border-t border-border/60 shadow-glass">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 p-3 rounded-xl bg-card/40 backdrop-blur-glass shadow-glass hover:shadow-glass-hover border border-border/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 mt-4 rounded-2xl shadow-ultra backdrop-blur-glass h-11 py-3">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;