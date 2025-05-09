import React from 'react';
import { ClientExperienceSection } from './ClientComponents';

// Define types for our experience data
interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  projects: Project[];
}

// AWS Experience subsections
interface AwsSubsection {
  title: string;
  description: string;
  items: string[];
}

export const ExperienceSection = () => {
  // AWS Experience subsections data
  const awsSubsections: AwsSubsection[] = [
    {
      title: "ML Infrastructure",
      description: "Designed and built end-to-end ML infrastructure to support model training, fine-tuning, evaluation, quantization, hyperparameter turning, and data processing.",
      items: [
        "Re-architecture that reduced job startup time by 75%",
        "Halved job failures and operational load",
        "Optimized GPU communication latency for large-scale distributed training",
        "Built and maintained PySpark container & PyTorch toolkit"
      ]
    },
    {
      title: "Cost Optimization",
      description: "Identified and implemented cost-saving measures across SageMaker infrastructure.",
      items: [
        "Identified, scoped, and deprecated redundant stack component",
        "Saved $440k in annual infrastructure costs",
        "Optimized resource utilization for training jobs"
      ]
    },
    {
      title: "Senior Speaker",
      description: "Represented AWS as a technical speaker at internal and external events.",
      items: [
        "Regular presenter on SageMaker and Bedrock",
        "Delivered technical talks at internal and external conferences",
        "Created educational content for AWS services"
      ]
    },
    {
      title: "Automation",
      description: "Developed automation solutions to improve operational efficiency.",
      items: [
        "Reduced development work for future region builds by 80%",
        "Saved 6 months of engineering effort annually",
        "Developed automation reducing on-call load by 12%"
      ]
    },
    {
      title: "Giving Back",
      description: "Engaged with the community through educational initiatives.",
      items: [
        "Led AI workshops and GenAI hackathons at UW and SCU",
        "Engaged AWS leadership with 600+ participants",
        "Authored technical blog post for AWS blog series"
      ]
    }
  ];

  // Experience data
  const experiences: Experience[] = [
    {
      company: "Amazon SageMaker AI (AWS)",
      role: "AI Infrastructure Engineer",
      period: "Feb 2024 - Present",
      location: "Seattle, WA",
      description: "Developer on core service team for SageMaker Training and Processing Jobs, building ML infrastructure for LLM scale workloads.",
      projects: [
        {
          title: "SageMaker Training Infrastructure",
          description: "Designed and built end-to-end ML infrastructure to support model training, fine-tuning, evaluation, quantization, hyperparameter turning, and data processing.",
          technologies: ["Distributed GPU Clusters", "AWS", "Python", "Java"],
          achievements: ["75% reduction in job startup time", "Halved job failures", "Reduced operational load"]
        },
        {
          title: "Datacenter Service Builds",
          description: "Led datacenter service builds for SageMaker jobs platforms.",
          technologies: ["AWS", "Infrastructure as Code", "Automation"],
          achievements: ["80% reduction in dev work for future region builds", "Saved 6 months of engineering effort annually"]
        }
      ]
    },
    {
      company: "INRIX",
      role: "Full Stack Developer & Tech Lead",
      period: "Jan 2023 - Feb 2024",
      location: "Kirkland, WA",
      description: "Spearheaded team of 7 in building a Gen-AI powered application for real-time transportation analytics.",
      projects: [
        {
          title: "INRIX Compass",
          description: "Built a Gen-AI powered application that identified causes of traffic by combining 8 data lakes across INRIX's product suite.",
          technologies: ["Vue.js", "GraphQL", "AWS Step Functions", "Lambda", "EMR"],
          achievements: ["Product launched at AWS Re:Invent", "Saved $100k+ in AWS costs annually"]
        }
      ]
    },
    {
      company: "Panterix",
      role: "Founder & CEO",
      period: "2020 - 2021",
      location: "Santa Clara, CA",
      description: "Led hackathon team in development of a product that could identify dangerous roads globally.",
      projects: [
        {
          title: "Road Safety Identification System",
          description: "Developed a system to identify dangerous roads globally using various data sources.",
          technologies: ["Vue.js", "C#"],
          achievements: ["Won entry into Bronco Venture Accelerator", "Presented research paper at GoodTechs conference"]
        }
      ]
    }
  ];

  return (
    <ClientExperienceSection>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h3 className="heading-md text-primary">{exp.company}</h3>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">{exp.role}</p>
                <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">{exp.period}</p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
            
            {/* AWS specific subsections */}
            {exp.company.includes("AWS") && (
              <div className="mb-8">
                <h4 className="heading-sm mb-4 text-secondary">Key Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {awsSubsections.map((subsection, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h5 className="text-lg font-semibold mb-2 text-primary">{subsection.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{subsection.description}</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {subsection.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="space-y-6">
              {exp.projects.map((project, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-secondary">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ClientExperienceSection>
  );
};
