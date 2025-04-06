import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
        const sectionHeight = section.getBoundingClientRect().height;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-navy/90 py-4 shadow-md backdrop-blur-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="#home" className="text-2xl font-heading font-bold text-white">
          <span className="text-accent1">P</span>ortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url} 
                  className={cn(
                    'nav-link',
                    activeSection === link.url.substring(1) && 'active-nav-link'
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#resume" 
                className="btn btn-outline"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-slate-lighter"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-navy-light py-6 px-6 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url} 
                  className={cn(
                    'nav-link text-lg',
                    activeSection === link.url.substring(1) && 'active-nav-link'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="#resume" 
                className="btn btn-outline inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
