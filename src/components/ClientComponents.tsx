'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Client-side Hero component
export const ClientHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-transparent pt-20 pb-32">
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
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="text-lg">Profile Image Placeholder</span>
              </div>
            </div>
            
            {/* Tech icons floating around */}
            <motion.div 
              className="absolute -top-10 -left-10 p-4 bg-white dark:bg-dark rounded-full shadow-lg"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">🐍</span> {/* Python */}
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 -right-8 p-4 bg-white dark:bg-dark rounded-full shadow-lg"
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">☁️</span> {/* AWS */}
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 -left-8 p-4 bg-white dark:bg-dark rounded-full shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">🤖</span> {/* AI */}
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-10 right-1/4 p-4 bg-white dark:bg-dark rounded-full shadow-lg"
              animate={{ y: [0, 12, 0], x: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">⚛️</span> {/* React */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
    <section id="experience" className="py-20 bg-light dark:bg-dark" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-primary">Experience & Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey building large-scale ML infrastructure, GenAI platforms, and distributed systems.
          </p>
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
    <section id="blog" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
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
