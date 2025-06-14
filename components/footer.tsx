'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Home, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: Home, href: '#', label: 'Website' },
  { icon: FileText, href: './resume.pdf', label: 'Resume' },
  { icon: Github, href: 'https://github.com/prateek00077', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prateek-pandey-a0278b228/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/prateek__077', label: 'Twitter' },
];

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/90 backdrop-blur-md border rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
            <div className="w-px h-6 bg-border mx-1" />
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
              aria-label="Toggle theme"
            >
              <Sun size={18} />
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/90 backdrop-blur-md border rounded-full px-6 py-3 shadow-lg"
      >
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-border mx-1" />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: socialLinks.length * 0.05 }}
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}