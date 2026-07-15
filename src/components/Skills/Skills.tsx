"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaPython, FaLinux, FaDocker } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandReactNative, TbBrandAzure } from 'react-icons/tb';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  progress: number;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
}

const getSkillIcon = (name: string, color: string) => {
  const props = { size: 28, style: { color } };
  switch (name.toLowerCase()) {
    case 'javascript':
      return <IoLogoJavascript {...props} />;
    case 'nodejs':
      return <FaNodeJs {...props} />;
    case 'express.js':
      return <SiExpress {...props} />;
    case 'react':
      return <FaReact {...props} />;
    case 'mongodb':
      return <SiMongodb {...props} />;
    case 'postgresql':
      return <BiLogoPostgresql {...props} />;
    case 'react native':
      return <TbBrandReactNative {...props} />;
    case 'python':
      return <FaPython {...props} />;
    case 'linux':
      return <FaLinux {...props} />;
    case 'docker':
      return <FaDocker {...props} />;
    case 'azure':
      return <TbBrandAzure {...props} />;
    default:
      return null;
  }
};

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
              <div className={styles.skillTitleGroup}>
                {getSkillIcon(skill.name, skill.color)}
                <h3 className={styles.skillName}>{skill.name}</h3>
              </div>
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
