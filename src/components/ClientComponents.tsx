'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { smoothScrollTo } from '../utils/smoothScroll';

// Client-side Hero component
export const ClientHero = ({ children }: { children: React.ReactNode }) => {
  // Create motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  // Handle mouse move on the container
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-transparent pt-12 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img 
                src="/images/chillprofile.png" 
                alt="Stephen Mistele" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={() => smoothScrollTo('experience')}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

// Client-side Experience Section component
export const ClientExperienceSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="pt-12 pb-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-primary">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Building what powers AI at scale: My journey engineering scalable AI, building automation, and becoming an Amazon Senior Speaker!          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

// Client-side Skills Section component
export const ClientSkillsSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-primary">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical toolkit for building high-performance systems, ML infrastructure, and scalable solutions.
          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

// Client-side Blog Section component
export const ClientBlogSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-primary">Blog & Publications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing insights and experiences from my work in ML infrastructure, GenAI platforms, and distributed systems.
          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

// Client-side Contact Section component
export const ClientContactSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

// Client-side Footer component
export const ClientFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        {children}
      </div>
    </footer>
  );
};
