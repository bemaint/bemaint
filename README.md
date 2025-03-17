# BeMaint - Smart Maintenance Management System

BeMaint is a landing page application for a smart equipment maintenance CRM system. This project is built with [Next.js](https://nextjs.org) and follows the Atomic Design pattern.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

The project is organized according to the Atomic Design model with components divided as follows:

### Atoms

The most basic interface components:

- `Button`: Button component with variants (primary, secondary, outline, text) and sizes (small, medium, large).
- `Typography`: Text component with types (h1-h6, body1, body2, caption).
- `Container`: Component for layout management and alignment.
- `Card`: Component for displaying card-based content, with options for elevation and borders.
- `Icon`: Component for displaying icons, supporting different sizes and colors.

### Molecules

Components combined from atoms:

- `FeatureCard`: Combines Card, Typography, and Image to display CRM system features.
- `Hero`: Main title component displaying title, subtitle, and call-to-action buttons, optionally with images.
- `Navbar`: Navigation bar including logo, navigation links, and call-to-action button. Also supports responsive functionality on mobile devices.
- `Footer`: Footer with logo, description, links, and copyright information.

### Organisms

More complex components, combined from molecules:

- `FeatureSection`: Section displaying product features as a grid of FeatureCards.
- `TestimonialSection`: Section displaying customer testimonials about the product.
- `CTASection`: Call-to-action section with background image, title, and action buttons.

### Templates

Complete page templates:

- `LandingPage`: Home page template combining all the above components to create a complete landing page.

## Technologies Used

The project uses the following technologies:

- [Next.js](https://nextjs.org/) - React framework for web development
- [TypeScript](https://www.typescriptlang.org/) - JavaScript extension language with static typing
- [CSS Modules](https://github.com/css-modules/css-modules) - Local CSS management for each component

## Learn More

Learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
