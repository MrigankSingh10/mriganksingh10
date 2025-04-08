
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    Almost 4 years of professional experience in full-stack development, 
                    including 1+ year as a Senior Software Engineer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    BTech in Computer Engineering from Amity University (2017-2021)
                    with multiple IBM certifications in Data Science.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Achievements</h3>
                  <p className="text-muted-foreground">
                    Gladiator Award winner for resolving critical production issues.
                    Gold medals in Kho-Kho and academic excellence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-bold text-2xl mb-4">Summary</h3>
              <p className="text-lg leading-relaxed">
                I'm a software engineer with almost 4 years of experience building full-stack web applications. 
                My core stack is Python/Django, Angular/TypeScript, AWS, Terraform, REST APIs, Kafka and Selenium.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I'm passionate about solving software challenges, including the quick resolution of production bugs, designing scalable solutions, 
                and delivering high-quality, fully functional products that meet business needs.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Currently working at Petco as a Senior Software Engineer, focusing on data channel optimization, 
                API performance enhancement with GraphQL and Apollo, and collaborating with cross-functional teams.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
