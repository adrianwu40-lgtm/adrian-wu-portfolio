# Adrian Wu Portfolio

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion for animations
- Deployed via GitHub Pages (or Vercel — TBD)

## Project Structure
- `components/HomeContent.tsx` — Main homepage layout (fixed behind overlay)
- `components/Overlay.tsx` — Blue overlay with SVG knockout text effect
- `components/Sidebar.tsx` — Left nav (Home, Essays, Projects)
- `components/InfoCard.tsx` — About me popup triggered by face icon

## What We Did
- Rearranged homepage to match mollymielke.com-inspired reference layout
- "Adrian Wu" at top of screen, left-aligned at 30vw
- Face icon in top-right corner (opens InfoCard)
- Sidebar in upper-left at 10vw inset
- Central blurb column at 30vw ("figuring stuff out" placeholder)
- Overlay uses SVG knockout text effect — letters are see-through holes in blue layer

## What We Still Have To Do
- [ ] Link face icon to info card (wire up click → InfoCard)
- [ ] Add info blurb content and flesh out sidebar content
- [ ] Refine typography and color to improve vibes
