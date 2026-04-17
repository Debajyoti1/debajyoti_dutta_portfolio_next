"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  progress: number;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className={styles.skillsGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className={`glass-panel ${styles.skillCard}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.05, borderColor: skill.color }}
          >
            <div className={styles.skillHeader}>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <span className={styles.skillPercentage} style={{ color: skill.color }}>
                {skill.progress}%
              </span>
            </div>
            <div className={styles.progressBarBg}>
              <motion.div 
                className={styles.progressBarFill} 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ 
                  background: skill.color,
                  boxShadow: `0 0 10px ${skill.color}80`
                }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
