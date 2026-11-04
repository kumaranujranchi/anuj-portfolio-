# Anuj Kumar - Performance Marketer Portfolio

A modern, responsive, high-performance portfolio website built with **React** and **Vite**, based on the production-grade design system exported from Figma / visual design references.

---

## 🚀 Quick Start (Running on Localhost)

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## ⚡ Deploying to Cloudflare Pages

This project is pre-configured for **Cloudflare Pages** with:
- `public/_redirects`: Client-side SPA routing (`/* /index.html 200`)
- `public/_headers`: Security headers and immutable 1-year asset caching (`/assets/*`)
- `.nvmrc`: Node.js version 20
- `wrangler.toml`: Cloudflare Pages project configuration

### Method 1: Git + Cloudflare Pages Dashboard (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select this repository and set the following build settings:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty or default)
4. Click **Save and Deploy**. Cloudflare will automatically build and deploy the site with a free `*.pages.dev` domain and free SSL!

### Method 2: Direct CLI Deployment via Wrangler
If you want to deploy straight from your computer terminal without connecting Git:
```bash
# 1. Login to Cloudflare (one-time)
npx wrangler login

# 2. Build and deploy
npm run deploy
```
Wrangler will upload your `dist/` folder and give you a live production URL instantly.

---

## 📁 File Structure & Rearrangement

The files have been structured into a standard production React project, while keeping all original exported HTML mockups intact in `design-references/` for future reference:

```
Portfolio_Anuj/
├── index.html                   # HTML entry point with Space Grotesk, Inter & JetBrains Mono fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
│
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main application orchestrator & routing
│   │
│   ├── context/
│   │   └── ThemeContext.jsx     # Live Theme (Dark / Light) & Accent (Lime / Blue) switcher
│   │
│   ├── data/
│   │   └── portfolioData.js     # Centralized content for easy editing (stats, KPIs, case studies, etc.)
│   │
│   ├── styles/
│   │   └── pf.css               # Design system CSS tokens, components, and responsive media queries
│   │
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glass navbar with logo, nav links & theme toggles
│   │   ├── MobileDrawer.jsx     # Mobile slide-out navigation menu
│   │   ├── StickyMobileCTA.jsx  # Floating sticky "Book a Strategy Call" on mobile
│   │   ├── Hero.jsx             # Hero section with interactive live dashboard & KPI sparklines
│   │   ├── Marquee.jsx          # Infinite animated platform ticker
│   │   ├── ImpactStats.jsx      # High-impact metric cards
│   │   ├── PlatformsSection.jsx # Platform cards with expertise meters & hover specialty overlays
│   │   ├── ServicesSection.jsx  # 6 core service offerings with custom SVG iconography
│   │   ├── CaseStudiesSection.jsx # Case studies with category filtering & before/after charts
│   │   ├── ProcessSection.jsx   # 5-step growth process roadmap
│   │   ├── ToolsSection.jsx     # Tech stack grid
│   │   ├── TestimonialsSection.jsx # Client reviews carousel with pagination dots & metric badges
│   │   ├── CertificationsSection.jsx # Industry certification credentials
│   │   ├── AboutSection.jsx     # Bio, philosophy quote, and resume download
│   │   ├── ContactSection.jsx   # Free audit form, interactive platform selector & slot booking
│   │   └── Footer.jsx           # Footer links, newsletter subscription, and social channels
│   │
│   └── pages/
│       ├── HomePage.jsx         # Full portfolio homepage (Desktop & Mobile unified)
│       ├── CaseStudyPage.jsx    # Dedicated in-depth case study breakdown with funnel visual
│       └── DesignSystemPage.jsx # Interactive style guide & component library
│
└── design-references/           # Original exported HTML artboards
    ├── Homepage · Desktop 1440-html/
    ├── Homepage · Mobile 390-html/
    ├── Case study detail-html/
    └── Mini design system-html/
```

---

## ✨ Features & Highlights

1. **Unified Responsive Design**:
   - Seamlessly transitions from 390px mobile screens to large desktop monitors (1440px+).
   - Features mobile hamburger navigation drawer and touch-optimized controls.

2. **Live Theme & Accent Controls**:
   - **Themes**: Dark Mode (default) & Light Mode.
   - **Accents**: Electric Lime & Signal Blue.
   - Switchable directly from the top navigation bar or mobile drawer, with preferences saved to `localStorage`.

3. **Interactive Visualizations**:
   - **Animated KPI Cards**: Smooth counter animation with dynamic SVG sparkline paths.
   - **Revenue vs. Ad Spend Line & Area Chart**: Animated growth curve.
   - **Before / After Bar Charts**: Visual comparison of ROAS and key metrics.
   - **Interactive Platform Cards**: Hover or tap reveals platform specialties.

4. **Multi-Page Routing**:
   - **Main Portfolio (`/`)**: Complete presentation of work, services, and proof points.
   - **Case Study Detail (`#case-study`)**: Deep-dive with 3-tier funnel diagram, creative tests, and weekly revenue curve.
   - **Mini Design System (`#design-system`)**: Interactive token viewer showing color palettes, type scale, buttons, badges, chips, and charts.

5. **Contact & Lead Generation**:
   - Request Free Audit form with interactive multi-select platform chips and monthly ad budget selector.
   - Direct 30-min strategy call booking slots.
   - One-tap links for WhatsApp, Email, and LinkedIn.

---

## 📝 How to Update Content

All content, metrics, case studies, and client names are centralized in:
👉 [`src/data/portfolioData.js`](file:///Users/anujkumarsingh/Downloads/Portfolio_Anuj/src/data/portfolioData.js)

You can update numbers, add new case studies, change client names, or update social links in that single file without touching component code.

