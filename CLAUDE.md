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
- Overlay uses SVG knockout text effect — letters are see-through holes in blue layer

## Deployment Issue (In Progress)
- Domain: adrianwu.com, registered on **Namecheap**
- Want to deploy via **Vercel** (not GitHub Pages)
- **Root cause**: GitHub account `adrianwu40-lgtm` is still associated with a deleted Vercel account (old school email). This blocks "Continue with GitHub" signup and the GitHub app integration.
- **Old school email Vercel account was deleted**, but GitHub association wasn't cleaned up
- **Next step**: Contact Vercel support (https://vercel.com/help) to release the `adrianwu40-lgtm` GitHub association from the deleted account. Then sign up fresh with "Continue with GitHub."
- After Vercel is set up: add `adrianwu.com` domain, update Namecheap DNS (A record → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`)

## What We Still Have To Do
- [ ] Fix Vercel deployment (see above)
- [ ] Link face icon to info card (wire up click → InfoCard)
- [ ] Add info blurb content and flesh out sidebar content
- [ ] Refine typography and color to improve vibes
