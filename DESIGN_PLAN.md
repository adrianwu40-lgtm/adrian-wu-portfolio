# Portfolio Redesign Plan

## Design Inspiration

### Source
- **Cargo.site templates** - Minimalist website builder platform
- Focus on templates: Wireframe Y082, Wireframe F853
- Reference screenshots saved at:
  - `~/Desktop/screenshot1.png` (Green tour schedule)
  - `~/Desktop/screenshot2.png` (Same as screenshot1)
  - Additional HyperCard and fishing person examples

### Key Design Principles
✓ **Bold, oversized typography**
✓ **Limited color palettes** (2-3 colors max)
✓ **Generous whitespace**
✓ **Simple, flat illustrations**
✓ **Playful personality** (not corporate)
✓ **Mix of typefaces** (serif + sans + italic)
✓ **Grid-based but creative layouts**

## Screenshot Analysis

### 1. Green Tour Schedule (screenshot1.png)
- Bold green background with white border frame
- Multi-column grid layout (3-4 columns)
- Mixed typefaces: Sans-serif headers + Italic dates + Serif venue names
- Playful white elephant illustration
- Arrow links (→) for social media
- Quote section with symbols (☂ ☀ ♥)

### 2. HyperCard Basics
- EXTREME minimalism - one massive typographic element
- Deep navy/blue serif on white background
- Small branding icon in corner
- Almost entirely whitespace
- Typography as the hero element

### 3. Fishing Person ("Will return shortly")
- Bold italic typography
- Simple black silhouette illustration
- Minimal color palette (black/white/blue accent)
- Playful, whimsical tone
- Horizontal accent line at bottom

## Proposed Portfolio Structure

### **Landing Page (Homepage)**
**Goal:** Minimal with strong text introduction

**Elements:**
- Short, strong intro text about Adrian
- Personal design touch around the text (minimal)
  - Options: small illustration/doodle, decorative border, unique symbol, hand-drawn accent
- Clean, focused layout
- Lots of whitespace

### **Email Link Interaction**
**Goal:** Playful popup/hover state

**Elements:**
- Inspired by fishing person illustration
- Could show personal doodle when hovering over email link
- Animated transition
- Whimsical personality

### **Experience/Work Section**
**Goal:** Information-heavy but visually striking

**Style:** HyperCard-inspired
- Massive typography for company names/roles
- Separate page or section (not on main landing)
- Route: `/experience` or `/work`
- Deep color on white or white on color
- Extreme typographic scale

### **Essays Section**
**Current State:** On homepage with list of essays
**Future:** TBD - needs decision on placement

## Current Portfolio Tech Stack

- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Features:** Dark/light theme toggle
- **Current Design:** Clean, centered layout (max-w-lg), warm color palette

### Current Color Palette
```css
/* Light mode */
--background: #FDFAE8 (cream)
--foreground: #171717 (near black)
--accent: #0E6931 (green)

/* Dark mode */
--background: #1a1a1a
--foreground: #e5e5e5
--accent: #4ade80
```

## Open Questions (To Answer Next Session)

1. **Intro text**: What should the main landing page text say?
   - Keep "figuring stuff out"?
   - Something more specific?
   - A stronger statement?

2. **Personal design touch**: What kind of minimal design element?
   - Small doodle/illustration (what subject?)
   - Decorative border/frame
   - Symbol or icon
   - Something else?

3. **Essays section placement**:
   - Separate page?
   - Below the fold on homepage?
   - Navigation link only?

4. **Navigation structure**:
   - Simple links like `Work` `Essays` `Email`?
   - Fixed position or inline?

5. **Color palette**:
   - Keep current warm cream/green?
   - Switch to bold color like the green schedule?
   - Go minimal black/white with accent?

## Next Steps

1. Answer the open questions above
2. Design the minimal landing page layout
3. Create the HyperCard-style experience page
4. Implement playful email interaction
5. Source or create personal doodle/illustration
6. Refine typography choices (mix serif + sans + italic)
7. Adjust color palette if needed

## Files to Modify

- `/app/page.tsx` - Main landing page
- `/components/HomeContent.tsx` - Homepage content component
- `/app/globals.css` - Global styles and colors
- New: `/app/experience/page.tsx` or `/app/work/page.tsx` - Experience section
- New: Email popup component
- Potentially restructure essay routing

## Design Philosophy

**Core Idea:** Let typography and whitespace do the work. Avoid over-designed, information-heavy personal sites. Instead, create a playful, confident, minimal portfolio that reflects personality through bold design choices and thoughtful details.
