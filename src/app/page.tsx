import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stephen Mistele | Software Engineer',
  description: 'Personal portfolio of Stephen Mistele, a Software Engineer with expertise in ML infrastructure, GenAI platforms, and distributed systems.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
