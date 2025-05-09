import React from 'react';
import { ClientBlogSection } from './ClientComponents';

// Define types for our blog data
interface BlogPost {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link: string;
  tags: string[];
}

export const BlogSection = () => {
  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      title: "Optimizing SageMaker Training Jobs for Large Language Models",
      description: "Learn how we reduced job startup time by 75% and improved overall performance for training large language models on SageMaker.",
      date: "April 2025",
      imageUrl: "/images/blog/sagemaker-optimization.jpg",
      link: "#",
      tags: ["AWS", "SageMaker", "LLM", "Performance"]
    },
    {
      title: "Building Cost-Effective ML Infrastructure at Scale",
      description: "Strategies and techniques that helped us save over $440k in annual infrastructure costs while maintaining high performance.",
      date: "March 2025",
      imageUrl: "/images/blog/cost-optimization.jpg",
      link: "#",
      tags: ["Cost Optimization", "ML Infrastructure", "AWS", "Cloud Architecture"]
    },
    {
      title: "The Future of GenAI in Transportation Analytics",
      description: "How we built INRIX Compass, a GenAI-powered application that revolutionizes traffic analysis by combining multiple data sources.",
      date: "January 2025",
      imageUrl: "/images/blog/genai-transportation.jpg",
      link: "#",
      tags: ["GenAI", "Transportation", "Analytics", "INRIX"]
    }
  ];

  return (
    <ClientBlogSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
              {post.imageUrl ? (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image Placeholder: {post.title}
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={post.link} 
                className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action for more content */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Interested in more technical content and insights?
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow on Medium
          </a>
          <a 
            href="https://linkedin.com/in/stephenmistele" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </ClientBlogSection>
  );
};
