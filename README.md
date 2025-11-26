# PD Protocols Microsite (Astro)

A fast, content-focused microsite for exploring evidence-based healing protocols for Parkinson's Disease, built with Astro for optimal performance.

## Features

- **Landing Page** (`/pd`) - Browse protocols by resource tier (Maximum/Average/Limited) with dynamic sorting
- **Learn More Page** (`/pd/learn-more`) - Deep-dive science page covering brain mechanisms, gut-brain axis, and contributing factors
- **Protocol Detail Pages** (`/pd/protocols/[slug]`) - Individual blog-style pages for each protocol with evidence, benefits, risks, and references
- **Dynamic Sorting** - Sort protocols by importance, cost, or ease of implementation (React island)
- **Resource Tier Filtering** - Filter protocols by available resources (Maximum/Average/Limited)

## Why Astro?

This site uses Astro's "islands architecture" - most of the site is static HTML (fast!), and only the interactive filtering/sorting component loads as JavaScript. This results in:

- **Smaller JavaScript bundles** - Only interactive parts load as JS
- **Better performance** - Static content is pre-rendered
- **Faster page loads** - Minimal JavaScript for content pages
- **Great for content sites** - Perfect fit for this content-focused microsite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The site will redirect to `/pd`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home (redirects to /pd)
│   │   └── pd/
│   │       ├── index.astro          # Landing page
│   │       ├── learn-more.astro     # Science deep-dive page
│   │       └── protocols/
│   │           └── [slug].astro     # Protocol detail pages
│   ├── layouts/
│   │   └── Layout.astro             # Root layout
│   ├── components/
│   │   ├── ProtocolFilter.tsx       # React island for filtering/sorting
│   │   ├── BackButton.tsx           # Back button component
│   │   └── ui/                      # shadcn/ui components
│   ├── lib/
│   │   ├── protocolsConfig.ts       # Protocol data and configuration
│   │   └── utils.ts                 # Utility functions
│   └── styles/
│       └── globals.css              # Global styles
├── astro.config.mjs                 # Astro configuration
└── package.json
```

## Protocol Data

All protocol data is centralized in `src/lib/protocolsConfig.ts`. Each protocol includes:

- Name and slug
- Importance, cost, and ease scores (1-10)
- Resource tiers (max/average/limited)
- Summary, benefits, evidence, risks, and references

## Technologies

- **Astro 4** - Static site generator with islands architecture
- **React** - For interactive components (filtering/sorting)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library (React components)

## Performance

- Static pages are pre-rendered at build time
- Only the ProtocolFilter component loads as JavaScript
- Minimal JavaScript bundle size
- Optimized for fast page loads and smooth scrolling

## License

MIT
# parkinsons-protocols
