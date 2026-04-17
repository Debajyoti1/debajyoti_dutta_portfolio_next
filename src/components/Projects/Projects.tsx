"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className={styles.projectsGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`glass-panel ${styles.projectCard}`}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
          >
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.projectLink}>
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
