
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:mrigank2303239@gmail.com" className="font-medium hover:text-primary">
                    mrigank2303239@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Gurugram, Haryana, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/mriganksingh10" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary"
                  >
                    linkedin.com/in/mriganksingh10
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="https://www.linkedin.com/in/mriganksingh10" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="mailto:mrigank2303239@gmail.com">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Contact;
