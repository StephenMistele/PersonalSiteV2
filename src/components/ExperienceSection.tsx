import React from 'react';
import { ClientExperienceSection } from './ClientComponents';

// Define types for our experience data
interface FeaturedProject {
  title: string;
  description1: string;
  technologies: string[];
  achievements: string[];
}

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
  featuredProject?: FeaturedProject;
}

// AWS Experience subsections
interface AwsSubsection {
  title: string;
  description: string;
  items: string[];
}

export const ExperienceSection = () => {
  // Experience data
  const experiences: Experience[] = [
    {
      company: "Amazon Web Services (AWS) - SageMaker",
      role: "AI Infrastructure Engineer",
      period: "Feb 2024 - Present",
      location: "Seattle, WA",
      description: `
        I am a core service engineer on the SageMaker Training & Processing team, architecting infrastructure to support large-scale ML workloads, including LLM training, fine-tuning, and evaluation. Regularly asked to present as a Senior Amazon Speaker, and lead technical initiatives that improve performance, scalability, and developer experience across regions.`,
      featuredProject: {
        title: "AWS SageMaker",
        description1: "<a href=\"https://aws.amazon.com/sagemaker-ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">Amazon SageMaker</a> is a fully managed platform that supports the entire machine learning lifecycle, from data preparation to model deployment. I'm specifically a part of <a href=\"https://aws.amazon.com/sagemaker-ai/train/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">Amazon SageMaker Training</a>, which powers large-scale model training and fine-tuning on managed infrastructure, including distributed GPU clusters. It automates compute provisioning, scaling, and monitoring—enabling seamless, high-performance training workflows at scale.",
        technologies: ["AWS SageMaker", "ML Infrastructure"],
        achievements: ["Building scalable ML infrastructure", "Improving developer experience"]
      },
      projects: [
        {
          title: "Job Startup Optimization",
          description: "Helped re-architect and rebuild the jobs platform to reduce launch latency and improve system reliability.",
          technologies: ["AWS SageMaker", "EC2", "Docker"],
          achievements: [
            "Reduced job startup time by 75%",
            "Halved job failures and operational load"
          ]
        },
        {
          title: "Amazon Senior Speaker",
          description: "Regularly chosen to present on SageMaker, Bedrock at major internal and external conferences. Catch me presenting at the <a href=\"https://aws.amazon.com/events/summits/washington-dc/\" target=\"_blank\" class=\"text-blue-500\"> AWS Summit in DC</a> this June!",
          technologies: ["Public Speaking", "Technical Writing"],
          achievements: [
            "Presenting architectural series on model training and optimization at internal and external conferences",
            "Blog post pending publication to the official AWS blog series"
          ]
        },
        {
          title: "GPU Topology Optimization",
          description: "Refactored networking and GPU configuration to improve training performance.",
          technologies: ["EC2", "Distributed Training", "GPU Networking"],
          achievements: [
            "Reduced GPU communication latency by 15% in key workloads"
          ]
        },
        {
          title: "Datacenter Service Expansion",
          description: "Led buildout of new datacenter services to support regional scaling of training infrastructure. Developed automation to reduce future dev effort.",
          technologies: ["AWS Infrastructure", "CloudFormation", "Networking"],
          achievements: [
            "Reduced future region build engineering effort by 80%",
            "Saved 6 months of annual dev work"
          ]
        },
        {
          title: "Cost Optimization Initiative",
          description: "Identified and removed unused stack component to reduce unnecessary spending.",
          technologies: ["AWS Cost Explorer", "Infrastructure Review"],
          achievements: [
            "Saved $440k in annual infrastructure costs"
          ]
        },
        {
          title: "On-Call Automation and Support",
          description: "Maintained production readiness, put out fires, and built automation to improve on-call response times.",
          technologies: ["Python", "Monitoring", "Security Patching"],
          achievements: [
            "Reduced on-call load by 12% through targeted automation"
          ]
        },
        {
          title: "PySpark & PyTorch Tooling",
          description: "Individually responsible for maintaining customer-facing containers supporting ML workloads.",
          technologies: ["PyTorch", "PySpark", "Docker"],
          achievements: [
            "Build and maintain customer-available PySpark container and PyTorch toolkit"
          ]
        },
        {
          title: "University AI Workshops & Hackathons",
          description: "Led AI training workshops and hackathons at major universities in collaboration with AWS customers and leadership.",
          technologies: ["Education", "Workshops", "Model Training", "Hackathons"],
          achievements: [
            "Led GenAI hackathons at UW and SCU with 600+ participants"
          ]
        }
      ]
    },
    {
      company: "INRIX",
      role: "Full Stack Developer & Tech Lead",
      period: "Jan 2023 - Feb 2024",
      location: "Kirkland, WA",
      description: "Led development of AI-powered traffic analytics solutions and improved operational efficiency across multiple projects.",
      projects: [
        {
          title: "INRIX Compass",
          description: "Spearheaded team of 7 in building first iteration of <a href=\"https://inrix.com/press-releases/bedrock-compass-gen-ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">INRIX Compass</a>, a Bedrock-powered Gen-AI application that identified causes of traffic by leveraging RAG to combine INRIX Traffic, Parking, Saftey, and 3 other data lakes to provide real-time and historical transportation analysis.<br><br>Co-launched with AWS at AWS Re:Invent",
          technologies: ["AWS Bedrock", "Vue.js", "GraphQL", "AWS Step Functions", "Lambda", "EMR"],
          achievements: [
            "Presented Compass vision to leadership during 'innovation week', earned cross-org backing",
            "Built Compass v1, led a cross-functional team of 7 engineers",
            "Owned Compass MVP delivery, guiding architecture and execution"
          ]
        },
        {
          title: "Cost Optimization Initiative",
          description: "Identified and resolved a major inefficiency in AWS EMR usage costing $100k+ annually. ",
          technologies: ["AWS EMR", "AWS Athena", "Data Analysis"],
          achievements: [
            "Developed alternative solution using AWS Athena",
            "Led implementation of the cost-saving solution"
          ]
        },
        {
          "title": "University Recruiting Hackathons",
          "description": "Led three large-scale recruiting hackathons at Santa Clara University and the University of Washington in partnership with AWS, showcasing technical innovation and attracting engineering talent.",
          "technologies": ["Event Leadership", "GenAI Demos", "AWS Partnership", "University Outreach"],
          achievements: [
            "Organized and hosted 3 hackathons with ~250 attendees each",
            "Partnered with AWS to drive visibility, mentorship, and cloud credits",
            "Led GenAI workshops and judged submissions to spotlight engineering excellence",
            "Directly contributed to technical recruiting pipelines and brand presence at both universities"
          ]
        }
        
      ]
    },
    {
      company: "Panterix",
      role: "Founder & CEO",
      period: "2020 - 2021",
      location: "Santa Clara, CA",
      description: "Founded and led a startup focused on global road safety analytics. Spearheaded the development of a system that identified dangerous roads using INRIX APIs and other mobility data. With support from Santa Clara University faculty, the project gained traction, evolved into a venture-backed initiative, and received recognition from both academic and entrepreneurial communities.",
      projects: [
        {
          title: "Road Safety Identification System",
          description: "Built a real-time platform to detect and analyze high-risk roadways worldwide using traffic and safety data.",
          technologies: ["Vue.js", "C#"],
          achievements: [
            "Built and launched MVP using INRIX APIs and SCU-backed research",
            "<a href=\"https://www.youtube.com/watch?v=d4Ib1GSBP0E&t=1s&themeRefresh=1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">Presented</a> research <a href=\"https://dl.acm.org/doi/abs/10.1145/3411170.3411269\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">paper</a> at GoodTechs Conference"
          ]
        },
        {
          title: "Bronco Venture Accelerator",
          description: "Accepted into Santa Clara University’s flagship venture accelerator program supporting student entrepreneurs.",
          technologies: [],
          achievements: [
            "Won entry into the <a href=\"https://www.scu.edu/cioccacenter/bronco-ventures/bronco-venture-accelerator/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">Bronco Venture Accelerator</a>, received $5,000 grant to build the business"
          ]
        },
        {
          title: "Ciocca Center Pitch Competition",
          description: "Finalist in SCU’s university-wide business pitch competition hosted by the Ciocca Center.",
          technologies: [],
          achievements: [
            "Selected as a <a href=\"https://www.scu.edu/cioccacenter/bronco-ventures/business-pitch-competition/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-500 font-semibold hover:underline\">Business Pitch Competition</a> finalist among early-stage startups"
          ]
        }
      ]
    }     
  ];

  return (
    <ClientExperienceSection>
      <div className="space-y-16">
        {experiences.map((exp, index) => {
          let inrixDescription = null;
          if (exp.company === "INRIX") {
            inrixDescription = (
              <div className="w-full bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                <a href="https://inrix.com/" target="_blank" rel="noopener noreferrer">
                  <h4 className="text-lg font-semibold mb-2 text-secondary">INRIX <i className="fas fa-external-link-alt"></i></h4>
                </a>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-6">INRIX is a global leader in transportation analytics, providing real-time and historical traffic data, mobility insights, and connected vehicle services. Their platform helps cities, businesses, and drivers make smarter decisions by analyzing movement patterns across roadways and transportation networks.</p>
              </div>
            );
          }
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="heading-sm mb-6 text-primary">{exp.company}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.role}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">{exp.period}</p>
              </div>
              {exp.featuredProject && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-secondary">{exp.featuredProject.title} </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: exp.featuredProject.description1 + " It provides tools for every step of the ML lifecycle, from data preparation to production deployment." }}></p>
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-900 p-3 rounded-lg shadow-md">
                    <img
                      src="/images/SageMakerLogo.png"
                      alt="SageMaker Logo"
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
              {inrixDescription}
              <div className="w-full bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-lg font-semibold mb-2 text-secondary">My Role</h4>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-6" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.projects.map((project, idx) => (
                  <div key={idx} className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-secondary">{project.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    {project.technologies.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements</h5>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ClientExperienceSection>
  );
};
