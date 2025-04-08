
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
              Hi, I'm <span className="text-primary">Mrigank Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
              Senior Software Engineer
            </h2>
            <p className="text-lg mb-6 max-w-md">
              I'm a software engineer with almost 4 years of experience building
              full-stack web applications with expertise in Python, Django, FastAPI, AWS, Kafka, MySQL and Angular.
            </p>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/mriganksingh10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:mrigank2303239@gmail.com" 
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge bg-tech-python/10 text-tech-python">Python</span>
              <span className="tech-badge bg-tech-django/10 text-tech-django">Django</span>
              <span className="tech-badge bg-tech-fastapi/10 text-tech-fastapi">FastAPI</span>
              <span className="tech-badge bg-tech-aws/10 text-tech-aws">AWS</span>
              <span className="tech-badge bg-tech-kafka/10 text-black">Kafka</span>
              <span className="tech-badge bg-tech-mysql/10 text-tech-mysql">MySQL</span>
              <span className="tech-badge bg-tech-angular/10 text-tech-angular">Angular</span>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="/lovable-uploads/a7cb7eef-a032-4ef8-853d-d63737163293.png" 
                alt="Mrigank Singh" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
