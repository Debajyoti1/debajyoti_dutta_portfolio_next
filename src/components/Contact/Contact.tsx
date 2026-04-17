"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

interface ContactProps {
  address: string;
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
  };
}

const Contact: React.FC<ContactProps> = ({ address, socials }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`section container`}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <div className={styles.contactContainer}>
        <motion.div 
          className={`glass-panel ${styles.formWrapper}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          {submitted && (
            <motion.div 
              className={styles.alertSuccess}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Your message is sent! I will get back to you shortly.
            </motion.div>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <textarea
                placeholder="Message"
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </motion.div>

        <motion.div 
          className={styles.infoWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>My Address</h3>
            <p className={styles.infoText}>{address}</p>
          </div>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              <a href={socials.github} target="_blank" rel="noreferrer" className={styles.socialIcon}>
                GitHub
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className={styles.socialIcon}>
                LinkedIn
              </a>
              <a href={socials.facebook} target="_blank" rel="noreferrer" className={styles.socialIcon}>
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Debajyoti Dutta | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Contact;
