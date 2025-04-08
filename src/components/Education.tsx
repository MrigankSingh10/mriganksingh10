
import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar,
  FileText,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="border-l-2 border-primary pl-4 ml-3 mt-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold">Amity University</h4>
                  <p className="text-muted-foreground">BTech - Bachelor of Technology, Computer Engineering</p>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2017 - 2021</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="border-l-2 border-primary pl-4 ml-3 mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.credly.com/badges/fa00f157-be85-4c58-8a87-d512c4fcd939/linked_in_profile" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      MTA: Introduction to Programming Using Python
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">Microsoft - Certified 2019</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/3HJ8573GANXW" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Introduction to Data Science Specialization
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">IBM</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/VU45JXAYSNZB" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      IBM Data Science Specialization
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">IBM</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.linkedin.com/in/mriganksingh10/details/certifications/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Applied AI with DeepLearning
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">IBM</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.apollographql.com/tutorials/certifications/c2093bd0-e5e6-47b1-919c-c78d27f8211c" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Apollo Graph Associate
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">Apollo</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold flex items-center">
                    <a href="https://www.apollographql.com/tutorials/certifications/b292879b-b7b5-4aa8-b287-7229c002ace3" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Apollo Graph Professional
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground">Apollo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card className="shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Publications</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">
                    <a href="https://www.a2zjournals.com/jieee/uploadpdf/JIEEE_1623580468P93.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Media Control Using Hand Gestures
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Research paper on computer vision techniques for gesture recognition.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold">
                    <a href="https://medium.com/@mrigank10/never-start-a-sprint-how-to-win-the-long-game-ba978b3eaba7" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-primary transition-colors inline-flex items-center">
                      Never Start a Sprint - How to win the long game
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Article on sustainable development practices and long-term project management strategies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card className="shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Honors & Awards</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold">Gold Medal in Kho-Kho</h4>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold">Gold Medal in Kho-Kho</h4>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold">Bronze Medal in Kho-Kho</h4>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold">Gladiator Award</h4>
                  <p className="text-sm text-muted-foreground mt-1">For resolving critical production issues</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
