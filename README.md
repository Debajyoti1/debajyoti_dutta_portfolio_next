# Modern Professional Portfolio | Debajyoti Dutta

A premium, high-performance portfolio website built with **Next.js 15**, **Framer Motion**, and **Vanilla CSS Modules**. This site is designed with a futuristic dark aesthetic, focusing on smooth interactions, professional storytelling, and top-tier SEO optimization.

## 🚀 Key Features

- **Futuristic Aesthetics**: Sleek dark mode design with glassmorphism effects and neon accents.
- **Dynamic Animations**: Seamless scroll-reveals, hover-lifts, and staggered mount animations powered by Framer Motion.
- **Performance Optimized**: 
  - Dynamic loading of components for faster Time to Interactive (TTI).
  - Optimized images and font loading using Next.js internal APIs.
  - Zero layout shift (CLS optimization).
- **Advanced SEO & Metadata**:
  - Full Metadata API integration for Open Graph and Twitter Cards.
  - Rich JSON-LD Schema markup for Person, ProfilePage, and WebSite entities.
  - Semantic HTML5 structure for accessibility and search engine crawlability.
- **Responsive Design**: Mobile-first architecture with a custom-built, modern hamburger navigation system.
- **Credential Verification**: Integrated certifications section with direct links to professional transcripts (Azure, HackerRank, etc.).

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Sass](https://sass-lang.com/) & CSS Modules (Vanilla CSS approach for flexibility)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Layouts, Pages, Metadata)
├── components/     # Modular UI Components (Navbar, Hero, Skills, etc.)
│   ├── Component/
│   │   ├── Component.tsx
│   │   └── Component.module.css
├── data/           # Centralized portfolio data (data.ts)
└── public/         # Static assets (images, documents)
```

## ⚙️ Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build the production bundle:
   ```bash
   npm run build
   ```

## 📄 License

This project is open-source and available under the MIT License.
