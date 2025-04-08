
import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin,
  CheckCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  achievements,
}) => {
  return (
    <div className="experience-card mb-10 animate-fade-in">
      <div className="flex items-center mb-2">
        <Briefcase className="w-5 h-5 text-primary mr-2" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-2 text-muted-foreground">
        <div className="flex items-center">
          <span className="font-medium">{company}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{period}</span>
        </div>
      </div>
      <div className="mt-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start mb-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <Card className="p-6 mt-8 bg-white shadow-md">
          <ExperienceItem
            title="Senior Software Engineer"
            company="Petco"
            location="Gurugram, Haryana, India"
            period="December 2024 - Present (5 months)"
            achievements={[
              "Driving innovation in data channel optimization by migrating systems to AWS MSK (Managed Streaming for Kafka), cutting manual effort by 30% and boosting system performance.",
              "Leading a team of 2 members in transitioning from REST to GraphQL, leveraging Apollo and Python to enhance API performance, flexibility, and developer experience.",
              "Gather and document business requirements by collaborating with stakeholders to ensure alignment with organizational goals and create clear, actionable technical specifications.",
              "Work closely with developers and cross-functional teams to design, develop, and deliver high-quality, fully functional products that meet business needs."
            ]}
          />
          
          <ExperienceItem
            title="Software Engineer"
            company="Petco"
            location="Gurugram, Haryana, India"
            period="December 2023 - December 2024 (1 year 1 month)"
            achievements={[
              "Implemented seamless data quality automation, ensuring consistency while saving over 300 hours annually.",
              "Designed faster, more efficient APIs that reduced data retrieval time by 40%, helping the Infosec/Legal team work smarter.",
              "Streamlined AWS costs by analyzing resource usage and upgrading legacy systems, cutting expenses by 15%.",
              "Mentored 10+ team members through detailed documentation and hands-on training, improving onboarding efficiency."
            ]}
          />
          
          <ExperienceItem
            title="Software Development Engineer 1"
            company="Ecom Express Private Limited"
            location="Gurugram, Haryana, India"
            period="May 2022 - December 2023 (1 year 8 months)"
            achievements={[
              "Boosted inventory performance across distribution centers by 20% through efficient integration of Django APIs, Angular UI, and Kafka.",
              "Designed and scaled a core 'single shipment' service managing over 400,000 shipments daily for 8,000+ MSMEs. Developed fraud prevention mechanisms and improved delivery efficiency, reducing financial losses by 2-3%.",
              "Implemented AES-256 encryption to protect sensitive customer data, ensuring compliance with privacy standards.",
              "Automated KYC verification, reducing onboarding time for 400+ customers daily and improving retention by 40%. Enhanced authentication mechanisms with OTP, email, and SMS features.",
              "Achievements: Received the Gladiator Award for resolving a critical production issue impacting over 10,000 shipments, demonstrating strong problem-solving skills under pressure."
            ]}
          />
          
          <ExperienceItem
            title="Graduate Engineer Trainee"
            company="Ecom Express Private Limited"
            location="Gurugram, Haryana, India"
            period="June 2021 - May 2022 (1 year)"
            achievements={[
              "Contributed to front-end development using Angular and TypeScript, enhancing user interfaces for internal tools and customer-facing applications.",
              "Contributed in API creation to handle new features in existing projects.",
              "Improved workflow efficiency by integrating testing and monitoring tools such as Selenium.",
              "Worked closely with senior engineers to support the development and maintenance of core services, laying the foundation for future advancements."
            ]}
          />
          
          <ExperienceItem
            title="Campus Ambassador"
            company="Coding Ninjas India"
            location="Gurugram, Haryana, India"
            period="November 2019 - July 2020 (9 months)"
            achievements={[
              "Promoted coding education and events among university students.",
              "Organized workshops and coding competitions to enhance programming skills among peers."
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Experience;
