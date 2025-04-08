
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold font-heading">Mrigank Singh</h2>
            <p className="mt-2 text-accent-foreground">Senior Software Engineer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mriganksingh10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:mrigank2303239@gmail.com" 
                className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-foreground">&copy; {currentYear} Mrigank Singh. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="flex items-center gap-2 hover:text-primary"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
