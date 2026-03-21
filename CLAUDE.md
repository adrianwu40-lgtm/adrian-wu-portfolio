# Adrian Wu Portfolio

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion for animations
- **NOT YET DEPLOYED** — need to set up Vercel (see Deployment Issue below)

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
- Overlay uses SVG text on solid blue background (was knockout/see-through, changed to solid)
- Updated color palette: background #FAFAFA, text #1A1A2E (dark navy), primary #2D2BCC, secondary #64648C
- Added Newsreader font (Google Fonts) but decided against it — serif doesn't match the minimal overlay vibe
- Heading stays Alte Haas Grotesk Bold to match overlay

## Deployment Issue (In Progress)
- Domain: adrianwu.com, registered on **Namecheap**
- Want to deploy via **Vercel** (not GitHub Pages)
- **Root cause**: GitHub account `adrianwu40-lgtm` is still associated with a deleted Vercel account (old school email). This blocks "Continue with GitHub" signup and the GitHub app integration.
- **Old school email Vercel account was deleted**, but GitHub association wasn't cleaned up
- **Next step**: Contact Vercel support (https://vercel.com/help) to release the `adrianwu40-lgtm` GitHub association from the deleted account. Then sign up fresh with "Continue with GitHub."
- After Vercel is set up: add `adrianwu.com` domain, update Namecheap DNS (A record → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`)

## What We Still Have To Do
- [ ] Fix Vercel deployment (see above)
- [ ] Continue refining typography and UI — want homepage to match the minimalistic vibe of the overlay. Tried serif (Newsreader), didn't fit. Explore other directions.
- [ ] Add info blurb content and flesh out sidebar content
- [ ] General content pass across all pages

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
