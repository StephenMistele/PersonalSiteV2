'use client';

import React from 'react';
import { ClientHero } from './ClientComponents';
import { smoothScrollTo } from '../utils/smoothScroll';

// Client component for smooth scrolling buttons
const SmoothScrollButton = ({ 
  href, 
  className, 
  children 
}: { 
  href: string; 
  className: string; 
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    smoothScrollTo(targetId);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export const Hero = () => {
  return (
    <ClientHero>
      <h1 className="heading-xl mb-4 text-primary">
        Stephen Mistele
      </h1>
      <h2 className="heading-md mb-2 text-gray-700 dark:text-gray-300">
        AI Infrastructure Engineer - AWS<br />
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
        Distributed Model Training @ <a href="https://aws.amazon.com/sagemaker-ai/train/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Amazon SageMaker AI</a>
      </h3>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
        Hi! I'm Stephen. Nice to meet you!
        <br/>
        <br/>
        I specialize in building large-scale ML infrastructure and GenAI platforms. With 4+ years of experience, I've developed strong skills in high-performance distributed systems, ML pipelines, and scalable compute solutions. I'm a proven leader in optimizing performance, reducing costs, and driving production-ready AI/ML features.
      </p>
      <div className="flex flex-wrap gap-4">
        <SmoothScrollButton href="#experience" className="btn-primary">
          View My Work
        </SmoothScrollButton>
        <SmoothScrollButton href="#contact" className="btn-outline">
          Contact Me
        </SmoothScrollButton>
      </div>
    </ClientHero>
  );
};
