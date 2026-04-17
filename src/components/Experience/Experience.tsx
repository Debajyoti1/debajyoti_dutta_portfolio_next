"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className={styles.timeline}>
        {experience.map((item, index) => (
          <motion.div 
            key={index} 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={styles.timelineDot}></div>
            <div className={`glass-panel ${styles.timelineContent}`}>
              <h3 className={styles.role}>{item.role}</h3>
              <h4 className={styles.company}>{item.company}</h4>
              <span className={styles.duration}>{item.duration}</span>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
