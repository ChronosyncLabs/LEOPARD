# Nike Tiger Landing Page

A premium, high-performance Nike landing page featuring an immersive "Tiger/Cheetah Run" scrollytelling intro built with Next.js, GSAP, and Lenis.

## Features

- **Dual-Canvas Tiger Scrollytelling**: 242 frame-by-frame animation with a revolutionary dual-canvas rendering system
  - Foreground canvas with gradient masking for seamless fade
  - Ambient background canvas with blur and saturation for zero-seam immersion
  - Prevents black bars on mobile devices

- **Premium Design System**:
  - Nike-inspired typography using Antonio (headings) and Archivo Narrow (body)
  - Aggressive, editorial design language
  - Pure white backgrounds with deep black text

- **Smooth Scroll Experience**: Lenis integration with GSAP ScrollTrigger for buttery smooth scrolling

- **Fully Responsive**: Mobile-first approach with pixel-perfect mobile responsiveness

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- GSAP (ScrollTrigger)
- Lenis (Smooth Scroll)
- React 19

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and design system
├── components/
│   ├── TigerExperience.tsx # Dual-canvas scrollytelling hero
│   ├── SmoothScroll.tsx    # Lenis smooth scroll provider
│   ├── ProductIntro.tsx    # First Look section
│   ├── BestOfAirMax.tsx    # Product carousel
│   ├── FeaturedBanner.tsx  # Cinematic banner
│   ├── Essentials.tsx      # 3-column grid
│   └── Footer.tsx          # Footer
└── public/
    └── Nike tiger images/  # 242 tiger animation frames
```

## Performance Optimizations

- Debounced resize handlers
- RequestAnimationFrame for canvas rendering
- Image preloading strategy
- Efficient GSAP timeline management
- Mobile-optimized smooth scrolling

## Design Guidelines

- **Typography**: Use `.nike-heading` for condensed titles, `.nike-body` for regular text
- **No em-dashes**: Use clean, direct language
- **Colors**: Pure white (#ffffff), Nike Black (#111), Carbon (#0b0b0b)
- **Spacing**: Generous whitespace following Nike's design principles

## Build

```bash
npm run build
npm start
```

## Notes

- The tiger images are located in `public/Nike tiger images/`
- Each frame is named `ezgif-frame-001.jpg` through `ezgif-frame-242.jpg`
- The dual-canvas technique ensures "HUNGRY FOR MORE" text is never cropped on mobile

Built with precision and attention to Awwwards-winning detail.
