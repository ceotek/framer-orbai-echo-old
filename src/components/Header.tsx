import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import diLogo from '@/assets/di-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Mentoring', href: '/mentoring' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-ultra border-b border-border/60 shadow-glass">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              {/* Simplified logo container to prevent visual issues */}
              <div className="relative p-1 rounded-xl bg-black shadow-glass hover:shadow-glass-hover transition-all duration-300 border border-white/20 backdrop-blur-sm">
                <img
                  src={diLogo}
                  alt="DEFEND INFO logo"
                  width={40}
                  height={40}
                  loading="eager"
                  decoding="sync"
                  draggable={false}
                  className="relative z-10 h-10 w-10 object-contain select-none"
                  style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">DEFEND INFO</span>
          </a>

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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;