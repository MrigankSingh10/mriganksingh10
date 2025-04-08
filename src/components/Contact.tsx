
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
          
          <Card className="shadow-md bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
