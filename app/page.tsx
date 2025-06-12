'use client';

import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { EducationSection } from '@/components/education-section';
import { AchievementsSection } from '@/components/achievements-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}