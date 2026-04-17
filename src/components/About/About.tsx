"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

interface AboutProps {
  description: string;
  image: string;
}

const About: React.FC<AboutProps> = ({ description, image }) => {
  return (
    <section id="about" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className={styles.aboutContent}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src={image} 
              alt="Debajyoti Dutta" 
              fill
              sizes="(max-width: 768px) 250px, 300px"
              className={styles.image} 
              priority={false}
            />
            <div className={styles.imageBorder}></div>
          </div>
        </motion.div>
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel">
            <p className={styles.description}>{description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
