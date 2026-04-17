"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <motion.div 
        className={styles.educationGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {education.map((item, index) => (
          <motion.div 
            key={index} 
            className={`glass-panel ${styles.eduCard}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className={styles.eduIcon}>🎓</div>
            <h3 className={styles.degree}>{item.degree}</h3>
            <h4 className={styles.institution}>{item.institution}</h4>
            <span className={styles.duration}>{item.duration}</span>
            <p className={styles.description}>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
