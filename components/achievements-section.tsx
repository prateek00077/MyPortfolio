'use client';

import { motion } from 'framer-motion';
import { Trophy, Code, Briefcase, GraduationCap, Rocket, Bitcoin } from 'lucide-react';
import { achievements, type Achievement } from '@/data/achievements';

const iconMap = {
  trophy: Trophy,
  code: Code,
  briefcase: Briefcase,
  'graduation-cap': GraduationCap,
  rocket: Rocket,
  bitcoin: Bitcoin,
};

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground">{achievement.title}</h3>
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
              {achievement.year}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
          <span className="inline-block px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
            {achievement.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones and accomplishments throughout my journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}