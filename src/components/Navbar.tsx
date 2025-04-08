
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
  { label: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
  { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash navigation when route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # symbol
      setTimeout(() => {
        scrollToSection(id);
      }, 0);
    }
  }, [location]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1); // remove the # symbol
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="font-heading font-bold text-xl text-primary">Mrigank Singh</a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white"
              onClick={(e) => handleNavLinkClick(e, item.href)}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
