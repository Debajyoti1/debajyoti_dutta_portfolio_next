"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

interface Certification {
  title: string;
  issuer: string;
  link?: string;
}

const Certifications = ({ certifications }: { certifications: Certification[] }) => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.title}>
          <span className={styles.highlight}>Certifications</span> & Accomplishments
        </h2>
        <div className={styles.grid}>
          {certifications.map((cert, index) => {
            const cardContent = (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.4)" }}
              >
                <div className={styles.cardIcon}>🏆</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.certTitle}>
                    {cert.title}
                    {cert.link && (
                      <span className={styles.linkIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', opacity: 0.7 }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </span>
                    )}
                  </h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              </motion.div>
            );

            return cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className={styles.cardWrapper}>
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
