
import React from 'react';
import { Check } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "HTML5", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "FastAPI", "Angular", "React", "Apollo GraphQL"]
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "PostgreSQL", "Redis", "AWS S3"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Terraform"]
  },
  {
    title: "Tools & Others",
    skills: ["Kafka", "REST APIs", "GraphQL", "Selenium", "Git"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-bold text-xl mb-4 text-primary">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4 text-center">Top Skills Highlight</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
            {["Apollo GraphQL", "HTML5", "CSS", "Python", "AWS", "Kafka"].map((skill, index) => (
              <div 
                key={index} 
                className="bg-secondary flex items-center justify-center p-4 rounded-lg text-center font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-3">Languages</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">English:</span>
                <span>Full Professional</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Hindi:</span>
                <span>Full Professional</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">German:</span>
                <span>Limited Working</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
