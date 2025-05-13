import React from 'react';
import { ClientSkillsSection } from './ClientComponents';

// Define types for our skills data
interface Skill {
  name: string;
  level: number; // 1-5 scale
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const SkillsSection = () => {
  // Skills data organized by category
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 5, icon: "🐍" },
        { name: "Java", level: 4, icon: "☕" },
        { name: "C++", level: 4, icon: "🔧" },
        { name: "TypeScript", level: 4, icon: "📝" },
        { name: "JavaScript", level: 4, icon: "🌐" }
      ]
    },
    {
      name: "ML/AI Technologies",
      skills: [
        { name: "PyTorch", level: 5, icon: "🔥" },
        { name: "Spark", level: 4, icon: "⚡" },
        { name: "ML Infrastructure", level: 5, icon: "🏗️" },
        { name: "Distributed Training", level: 5, icon: "🌐" },
        { name: "GenAI", level: 4, icon: "🤖" }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      skills: [
        { name: "AWS SageMaker", level: 5, icon: "☁️" },
        { name: "AWS Bedrock", level: 4, icon: "🪨" },
        { name: "AWS EC2", level: 5, icon: "🖥️" },
        { name: "AWS Lambda", level: 4, icon: "λ" },
        { name: "Docker", level: 4, icon: "🐳" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "Vue.js", level: 4, icon: "📱" },
        { name: "React", level: 3, icon: "⚛️" },
        { name: "GraphQL", level: 4, icon: "📊" },
        { name: "REST APIs", level: 4, icon: "🔄" }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Cost Optimization", level: 5, icon: "💰" },
        { name: "Technical Leadership", level: 4, icon: "👨‍💼" },
        { name: "Public Speaking", level: 4, icon: "🎤" },
        { name: "Agentic Automation", level: 4, icon: "🤖" }
      ]
    }
  ];

  // Function to render skill level bars
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-6 rounded-full ${
              i <= level ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <ClientSkillsSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="heading-sm mb-6 text-primary">{category.name}</h3>
            <div className="space-y-6">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {skill.icon && (
                      <span className="text-xl mr-3">{skill.icon}</span>
                    )}
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </ClientSkillsSection>
  );
};
