# UPT PLUS — Cybersecurity & Cloud Computing

Enterprise Digital Platform for **UPT PLUS**, delivering mission-critical cybersecurity architectures, cloud computing fabrics, digital infrastructure, application modernization, and continuous managed technology operations.

---

## 🏛️ System Architecture & Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Animation & Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Visual Design System**: UPT Control Plane (Navy `#080D1A`, Purple Security Perimeters `#6B21A8`, Action Orange `#FF7A00`)
- **Internationalization**: Bilingual English / Arabic with comprehensive bidirectional (LTR/RTL) layout continuity
- **Typography**: Space Grotesk (Architectural Headlines), Plus Jakarta Sans (Editorial Body), IBM Plex Sans Arabic (Arabic Typography), JetBrains Mono (Technical Numerals)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18+ (v20+ recommended)
- **Package Manager**: npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/mom056/upt-plus.git
cd upt-plus

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be running at `http://localhost:3000`.

---

## 🛠️ Verification & Quality Scripts

```bash
# TypeScript Typecheck
npx tsc --noEmit

# ESLint Validation
npm run lint

# Production Build
npm run build
```

---

## 🌐 Deploying to Vercel

This repository is optimized for one-click zero-configuration deployment on **Vercel**:

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** → **Project**.
3. Import the GitHub repository: **`mom056/upt-plus`**.
4. Select **Next.js** framework preset (detected automatically).
5. Click **Deploy**.

Every future push to `main` will automatically trigger a production build and deployment.

