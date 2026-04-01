# Awwwards-Level 3D Portfolio Experience

A visually stunning, high-performance interactive portfolio built focusing on maximum user engagement. It leverages **React**, **Three.js** (R3F), and **GSAP ScrollSmoother** to provide a buttery-smooth narrative experience as you scroll.

![Portfolio Preview Showcase](/public/images/mayanetra.png) *(Placeholder showcase preview)*

## ✨ Key Features
- 🚀 **Interactive 3D Avatar:** A dynamic 3D model that loads, tracks your cursor movements, and physically scrolls with you out of view via precise GSAP scroll triggers.
- 😂 **Physics-Enabled Tech Stack:** Built with `@react-three/rapier`, throwing around skill sphere nodes via realistic physics when navigating.
- 💨 **Buttery Smooth Scrolling:** Utilizes GSAP `ScrollSmoother` and advanced CSS transforms to ensure perfect 60fps scrolling without layout thrashing.
- 🏆 **Certifications Showcase:** A "touch-compatible" horizontal infinite slider powered by `react-fast-marquee`, wrapped in glassmorphism UI.
- 🎨 **Awwwards Level Aesthetics:** Minimalist typography, custom cursor, custom load-screens, subtle SVG-morphing glows, and dynamic magnetic UI hover links.

## 🛠️ Tech Stack & Dependencies
- **Frontend Framework**: React 18, Vite, TypeScript
- **3D Graphics & Physics**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` 
- **Animations & Routing**: GSAP (ScrollTrigger, ScrollSmoother, ScrollTo)
- **UI Components**: custom CSS, `react-fast-marquee`, `react-icons`
- **Analytics**: Vercel Analytics Hooked

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vedant7115/my-portfolio.git
   cd my-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the Vite Dev Server:**
   ```bash
   npm run dev
   ```
4. Check out the site at `http://localhost:5173/` !

## 🏗️ Architecture Note on GSAP
This project deeply integrates CSS transforms with the GSAP environment. Heavy DOM manipulation limits have been set, utilizing strictly GPU-backed properties (`transform`, `opacity`) to ensure the ScrollSmoother instance never suffers from jitter when computing `window.scrollY`.

---
*Developed with a passion for pushing UI/UX boundaries.*
