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
      <h2 className="heading-md mb-6 text-gray-700 dark:text-gray-300">
        Software Engineer specializing in ML Infrastructure & GenAI Platforms
      </h2>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
        With 4+ years of experience building large-scale ML infrastructure and GenAI platforms at AWS and INRIX. 
        Skilled in high-performance distributed systems, ML pipelines, and scalable compute solutions.
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
