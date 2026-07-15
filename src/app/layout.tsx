import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SpotlightAndScroll from "@/components/SpotlightAndScroll/SpotlightAndScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debajyoti Dutta | Full Stack Developer",
  description:
    "Debajyoti Dutta is a Full Stack Developer & Software Engineer expert in the MERN stack (React, Node, Express, MongoDB), React Native, TypeScript, Python, and cloud deployments.",
  keywords: [
    "Debajyoti Dutta",
    "Full Stack Developer",
    "MERN Stack Developer Bangalore",
    "React Developer Bangalore",
    "NodeJS Developer Bangalore",
    "Software Engineer Bangalore",
    "Web Developer Kolkata",
    "React Native Developer",
    "Full Stack Web Developer",
    "Docker",
    "Python Developer",
  ],
  authors: [{ name: "Debajyoti Dutta", url: "https://debajyotidutta.com" }],
  creator: "Debajyoti Dutta",
  openGraph: {
    type: "profile",
    firstName: "Debajyoti",
    lastName: "Dutta",
    username: "debajyoti1",
    gender: "male",
    url: "https://debajyotidutta.com/",
    title: "Debajyoti Dutta | Full Stack Developer",
    description:
      "Explore the software engineering portfolio of Debajyoti Dutta, specializing in scalable React/Node web apps, mobile development, and modern cloud deployment architectures.",
    siteName: "Debajyoti Dutta Portfolio",
    images: [
      {
        url: "https://debajyotidutta.com/images/debajyoti-dutta.webp",
        alt: "Debajyoti Dutta - Full Stack Developer",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debajyoti Dutta | Full Stack Developer",
    description: "Explore the developer portfolio, projects, and full stack web solutions of Debajyoti Dutta.",
    images: ["https://debajyotidutta.com/images/debajyoti-dutta.webp"],
  },
  alternates: {
    canonical: "https://debajyotidutta.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://debajyotidutta.com/#website",
        url: "https://debajyotidutta.com/",
        name: "Debajyoti Dutta Portfolio",
        description:
          "Professional developer portfolio of Debajyoti Dutta, Full Stack Developer and Software Engineer.",
        publisher: {
          "@id": "https://debajyotidutta.com/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://debajyotidutta.com/#profilepage",
        url: "https://debajyotidutta.com/",
        name: "Debajyoti Dutta Professional Profile",
        description:
          "Full Stack Developer specializing in MERN Stack, Python, Javascript, NodeJS, Express, React, React Native, and DevOps automation.",
        isPartOf: {
          "@id": "https://debajyotidutta.com/#website",
        },
        mainEntity: {
          "@id": "https://debajyotidutta.com/#person",
        },
        about: {
          "@id": "https://debajyotidutta.com/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://debajyotidutta.com/#person",
        name: "Debajyoti Dutta",
        url: "https://debajyotidutta.com/",
        image: "https://debajyotidutta.com/images/debajyoti-dutta.webp",
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Kibbcom India Pvt. Ltd.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          }
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "B.P. Poddar Institute of Management & Technology",
          url: "http://www.bppimt.ac.in/"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        knowsAbout: [
          "https://en.wikipedia.org/wiki/JavaScript",
          "https://en.wikipedia.org/wiki/TypeScript",
          "https://en.wikipedia.org/wiki/React_(software)",
          "https://en.wikipedia.org/wiki/Node.js",
          "https://en.wikipedia.org/wiki/Express.js",
          "https://en.wikipedia.org/wiki/MongoDB",
          "https://en.wikipedia.org/wiki/PostgreSQL",
          "https://en.wikipedia.org/wiki/Google_Cloud_Platform",
          "https://en.wikipedia.org/wiki/Python_(programming_language)",
          "https://en.wikipedia.org/wiki/Docker_(software)",
          "https://en.wikipedia.org/wiki/Firebase",
          "https://en.wikipedia.org/wiki/DevOps",
          "https://en.wikipedia.org/wiki/Representational_state_transfer",
          "https://en.wikipedia.org/wiki/React_Native",
          "https://en.wikipedia.org/wiki/Microsoft_Azure",
          "https://en.wikipedia.org/wiki/Microservices",
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Google Cloud Platform",
          "Python",
          "Docker",
          "Firebase",
          "DevOps",
          "REST API",
          "React Native",
          "Azure",
          "Microservices",
          "MERN Stack"
        ],
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Full Stack Developer",
            occupationLocation: {
              "@type": "City",
              name: "Bangalore",
            },
            skills: [
              "React Web Development",
              "React Native Development",
              "Backend Development",
              "Node.js Express.js",
              "REST API Design",
              "Cloud Architecture",
              "DevOps Automation",
              "Microservices",
              "Python Development",
              "Docker Containerization",
              "Firebase Integration",
              "PostgreSQL Administration",
              "MongoDB Schema Design",
              "Azure DevOps CI/CD Pipelines",
            ],
          },
        ],
        sameAs: [
          "https://github.com/Debajyoti1",
          "https://www.linkedin.com/in/debajyoti-dutta/",
          "https://www.facebook.com/debajyoti.dutta.1/",
          "https://www.hackerrank.com/profile/debajyotidutta_2",
          "https://leetcode.com/u/debajyoti1/"
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure DevOps Engineer Expert (AZ-400)",
            recognizedBy: { 
              "@type": "Organization", 
              name: "Microsoft",
              url: "https://www.microsoft.com"
            },
            credentialCategory: "Professional Certification",
            url: "https://learn.microsoft.com/api/credentials/share/en-us/DebajyotiDutta-0691/11BF394A62E6AF17"
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure Developer Associate (AZ-204)",
            recognizedBy: { 
              "@type": "Organization", 
              name: "Microsoft",
              url: "https://www.microsoft.com"
            },
            credentialCategory: "Professional Certification",
            url: "https://learn.microsoft.com/api/credentials/share/en-us/DebajyotiDutta-0691/A09C85D5DABF928B"
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure Fundamentals (AZ-900)",
            recognizedBy: { 
              "@type": "Organization", 
              name: "Microsoft",
              url: "https://www.microsoft.com"
            },
            credentialCategory: "Professional Certification",
            url: "https://learn.microsoft.com/api/credentials/share/en-us/DebajyotiDutta-0691/89FF0026CFC489D6"
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        <SpotlightAndScroll />
        {children}
      </body>
    </html>
  );
}
