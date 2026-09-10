# CampStay — Next.js + TypeScript + Tailwind CSS

A responsive camping/travel landing page recreated from the supplied design reference.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- Lucide React icons

## Structure

```text
campstay-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── destinations.tsx
│   ├── feature-cards.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   └── newsletter.tsx
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

The page uses responsive Tailwind layouts, reusable components, mobile navigation, hover states, a working newsletter form interaction, and external Unsplash photography for the demo imagery.
