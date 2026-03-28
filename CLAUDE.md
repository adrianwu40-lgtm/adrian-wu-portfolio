# Adrian Wu Portfolio

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion for animations
- Deployed via **Vercel** at adrianwu.com

## Project Structure
- `components/HomeContent.tsx` — Main homepage layout with two-column blurbs and photo gallery
- `components/Overlay.tsx` — Blue overlay with SVG text, click-to-dismiss (no scroll)
- `components/HoverImage.tsx` — Reusable hover-to-reveal image component (edge-aware positioning, mobile tap support)
- `components/Sidebar.tsx` — Nav (Home, Essays, Projects) — lives below the fold
- `components/InfoCard.tsx` — About me popup (currently not linked from homepage)
- `public/images/` — Portfolio photos (rhythm, michelin, volleyball, conducting, kitchen)

## What We Did
- Overlay is now click-to-dismiss only (no scrolling back to it)
- Homepage is a clean two-column blurb layout (Newsreader serif font) with no heading or nav cluttering it
- Left blurb: intro + experience (Rhythm, restaurants, UIUC)
- Right blurb: interests + contact (court, concert hall, kitchen, LinkedIn, email)
- HoverImage component: hover over trigger words (navy blue text) to see floating photos with edge-aware positioning
- Right blurb has a "gallery" interaction: three dotted outlines below text that fill in when you hover (preview) or click (lock in) the words court/concert hall/kitchen
- Sidebar navigation moved below the fold with a bouncing down arrow to indicate scroll
- Down arrow updated to tall blue arrow with filled arrowhead (#0000DD), bouncing animation
- Page two wireframe: sticky top bar (name + contact), left sidebar (Experience, Text, Restaurants), placeholder content sections
- Color palette: background #FAFAFA, text #1A1A2E, primary #2D2BCC, secondary #64648C, hover-trigger text #1A1A6E

## Deployment
- Domain: adrianwu.com, registered on **Namecheap**
- Deployed via **Vercel**, connected to GitHub — pushes to main auto-deploy

## What We Still Have To Do
- [ ] Refine colors and typography across the site
- [ ] Fill in Experience section content on page two
- [ ] Fill in Text (writing/essays) section content on page two
- [ ] Build out Restaurants subpage with detailed content
- [ ] Visual design pass — better layout, spacing, positioning on homepage
- [ ] Contact card — cutout face image as a hovering universal contact card in the top corner; tapping it reveals blue text with contact info (replaces current InfoCard approach)
- [ ] Clean up loading states — box outlines, overlays, transitions, polish all the rough edges
- [ ] Decide on mobile optimization (TBD)
- [ ] Animation & delight pass (after content is solid) — multiple sweeps to add subtle animations, hover effects, and fun design touches

---

# Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (serves at `http://localhost:3000`)
- Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- **Always screenshot from localhost:** `node ~/vibes/screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node ~/vibes/screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in `~/vibes/` (shared across all projects). Puppeteer is installed globally.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- This is a Next.js + TypeScript + Tailwind project — use the existing component structure, not standalone HTML files.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
