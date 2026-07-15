"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import TerminalCard from '@/components/Terminal/TerminalCard';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  resumeUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, subtitle, resumeUrl }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={styles.backgroundEffect}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <motion.div 
          className={styles.textContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.greeting}>Hello, I'm</motion.p>
          <motion.h1 variants={itemVariants} className={styles.name}>{name}</motion.h1>
          <motion.h2 variants={itemVariants} className={styles.title}>{title}</motion.h2>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            {subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className={styles.cta}>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              aria-label="Download Debajyoti Dutta's Resume (PDF)"
            >
              Download Resume
            </a>
            <a 
              href="#projects" 
              className={styles.secondaryBtn}
              aria-label="Scroll to Projects and Work section"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.terminalContainer}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
