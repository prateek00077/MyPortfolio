'use client';

import { motion } from 'framer-motion';
import { experiences, type Experience } from '@/data/experience';

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 py-4"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-sm border">
          <span className="text-lg font-bold text-foreground">
            {experience.company.charAt(0)}
          </span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{experience.company}</h3>
        <p className="text-sm text-muted-foreground">{experience.position}</p>
      </div>
      <div className="text-sm text-muted-foreground text-right">
        {experience.duration}
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Work Experience</h2>
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}