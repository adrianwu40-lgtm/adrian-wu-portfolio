# Adrian Wu Portfolio

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion for animations
- Deployed via Vercel to adrianwu.com (auto-deploys on push to main)

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
- **Problem**: Old Vercel account (school email) is connected to the domain with the wrong GitHub account
- **Goal**: Deploy from `adrianwu40-lgtm/adrian-wu-portfolio` via personal email Vercel account
- **Steps remaining**:
  1. Remove `adrianwu.com` domain from old Vercel project (school email account)
  2. In personal Vercel account, import `adrian-wu-portfolio` repo — currently the GitHub app is installed but Vercel isn't showing the repo
  3. May need to: uninstall Vercel GitHub App from old GH account, then reinstall fresh on `adrianwu40-lgtm` and authorize for personal Vercel
  4. Once deployed, add `adrianwu.com` domain in new Vercel project settings
  5. Update Namecheap DNS: A record → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

## What We Still Have To Do
- [ ] Fix Vercel deployment (see above)
- [ ] Link face icon to info card (wire up click → InfoCard)
- [ ] Add info blurb content and flesh out sidebar content
- [ ] Refine typography and color to improve vibes
