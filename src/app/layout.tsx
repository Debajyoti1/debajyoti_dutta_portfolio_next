import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debajyoti Dutta | Full Stack Developer | Software Engineer",
  description:
    "Debajyoti Dutta is a Full Stack Developer skilled in MERN stack, Python, Javascript, React, Node JS, Express JS, Docker, Azure, and DevOps.",
  keywords: [
    "Debajyoti Dutta",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React Native Developer",
    "Web Developer Kolkata",
    "Azure Certified",
    "React",
    "NodeJS",
    "Python",
    "Pune",
    "Portfolio",
  ],
  authors: [{ name: "Debajyoti Dutta", url: "https://debajyotidutta.com" }],
  creator: "Debajyoti Dutta",
  openGraph: {
    type: "website",
    url: "https://debajyotidutta.com/",
    title: "Debajyoti Dutta | Full Stack Developer",
    description:
      "Software Engineer & Full Stack Developer specializing in MERN Stack, Python, Javascript, NodeJS, Express, React, and DevOps.",
    siteName: "Debajyoti Dutta",
    images: [
      {
        url: "https://debajyotidutta.com/images/debajyoti-dutta.webp",
        alt: "Debajyoti Dutta - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debajyoti Dutta | Full Stack Developer",
    description: "Explore projects, experience, and skills of Debajyoti Dutta.",
    images: ["https://debajyotidutta.com/images/debajyoti-dutta.webp"],
  },
  alternates: {
    canonical: "https://debajyotidutta.com/",
  },
  robots: {
    index: true,
    follow: true,
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
        name: "Debajyoti Dutta",
        description:
          "Debajyoti Dutta - Software Engineer and Full Stack Developer.",
        publisher: {
          "@id": "https://debajyotidutta.com/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://debajyotidutta.com/#profilepage",
        url: "https://debajyotidutta.com/",
        name: "Debajyoti Dutta",
        description:
          "Software Engineer & Full Stack Developer specializing in MERN Stack, Python, Javascript, NodeJS, Express, React, and DevOps.",
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
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "B.P. Poddar Institute of Management & Technology",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        knowsAbout: [
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
              "Cloud",
              "DevOps",
              "Microservices",
              "Python",
              "Docker",
              "Firebase",
              "PostgreSQL",
              "MongoDB",
              "Azure",
            ],
          },
        ],
        sameAs: [
          "https://github.com/Debajyoti1",
          "https://www.linkedin.com/in/debajyoti-dutta/",
          "https://www.facebook.com/debajyoti.dutta.1/",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure DevOps Engineer Expert (AZ-400)",
            recognizedBy: { "@type": "Organization", name: "Microsoft" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure Developer Associate (AZ-204)",
            recognizedBy: { "@type": "Organization", name: "Microsoft" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Azure Fundamentals (AZ-900)",
            recognizedBy: { "@type": "Organization", name: "Microsoft" },
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
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
