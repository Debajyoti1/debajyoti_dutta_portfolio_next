import React from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import { portfolioData } from "@/data/data";

// Lazily load components below the fold to dramatically enhance PageSpeed performance (TTI & Hydration Time)
const About = dynamic(() => import('@/components/About/About'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills/Skills'), { ssr: true });
const Experience = dynamic(() => import('@/components/Experience/Experience'), { ssr: true });
const Education = dynamic(() => import('@/components/Education/Education'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects/Projects'), { ssr: true });
const Certifications = dynamic(() => import('@/components/Certifications/Certifications'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact/Contact'), { ssr: true });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero 
        name={portfolioData.about.name}
        title={portfolioData.about.title}
        subtitle={portfolioData.about.subtitle}
        resumeUrl={portfolioData.about.resumeUrl}
      />
      <About 
        description={portfolioData.about.description}
        image={portfolioData.about.image}
      />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Certifications certifications={portfolioData.certifications} />
      <Projects projects={portfolioData.projects} />
      <Contact 
        address={portfolioData.contact.address}
        socials={portfolioData.contact.socials}
      />
    </main>
  );
}
