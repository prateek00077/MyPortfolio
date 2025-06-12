'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              I am a passionate developer with expertise in web technologies like{' '}
              <a href="#" className="text-foreground font-medium hover:underline">
                React, Node.js, and MongoDB
              </a>
              .{' '}
              I love building fast, interactive applications and {' '}
              <a href="#" className="text-foreground font-medium hover:underline">
                solving complex problems through code
              </a>
              .{' '}
              With a strong background in{' '}
              <a href="#" className="text-foreground font-medium hover:underline">
                competitive programming
              </a>
              ,{' '}
              I thrive on challenges and continuous learning.
              When I’m not coding, you’ll find me{' '}
              <a href="#" className="text-foreground font-medium hover:underline">
                organizing tech events
              </a>{' '}
              or contributing to community initiatives. 
              Let’s create something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}