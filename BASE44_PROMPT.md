# Base44 prompt — BodySense AI cinematic landing

Paste everything below into Base44. First, **upload your 3 app screenshots** (the
"Health Guardian", "Predictive Alerts", and "Wearable Insights" images) so Base44 can place them.

---

Build a full-viewport, cinematic landing page for a health app called **BodySense AI**.
Dark, premium, Apple-keynote feel. Use React + Tailwind CSS.

**Global**
- Body background: pure black (#000). All text white.
- Body font: **Barlow** (Google Fonts). Headings font: **Inter** (Google Fonts).

**Fixed video background (behind everything, z-0)**
- Fullscreen `<video>`: autoplay, muted, loop, playsInline, object-cover; wrapper scaled to 1.08, origin center.
- Source URL (use exactly): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4`
- On loadedmetadata, set playbackRate = 1.25.
- Mouse parallax: translate the video up to ~20px toward the cursor, eased (lerp ~0.06).
- Overlay a gradient from black/40 at the top to solid black at the bottom for text legibility.

**Liquid-glass style (reusable class `.liquid-glass`)**
```css
.liquid-glass{background:rgba(255,255,255,.01);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);box-shadow:inset 0 1px 1px rgba(255,255,255,.1);position:relative;overflow:hidden;}
.liquid-glass::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.4px;background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.15) 20%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 60%,rgba(255,255,255,.15) 80%,rgba(255,255,255,.45));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}
```

**Header (fixed top, z-50, flex, space-between, padded)**
- Left: wordmark `BodySense AI` with a small superscript ™.
- Center: a `.liquid-glass` rounded-full pill nav with links: HOW IT WORKS · FEATURES · METHODOLOGY · TESTFLIGHT (11px, uppercase, letter-spacing 0.12em, white/90 → white on hover). Hide on mobile.
- Right: `.liquid-glass` rounded-full pill "GET THE APP".

**Hero (full screen, centered, text-center)**
- Headline in Inter, font-size clamp(40px, 5.4vw, 72px), line-height 1.1, letter-spacing -0.02em:
  - Line 1 (white): `Understand your body.`
  - Line 2 (white at 55% opacity): `Live your way.`
  - Fade + rise in on load.
- Near the bottom of the hero (fade in slightly later):
  - Paragraph, max-width 620px: white `BodySense AI reads your real signals — glucose, blood pressure, HRV, sleep — and turns them into simple daily guidance.` then muted ` Tailored to your body, grounded in NHS NICE.`
  - A white pill button (black text), rounded-full, label `Join the TestFlight`, hover: scale 1.03 + white glow shadow.
  - A small row: a lock icon + `PRIVATE BY DESIGN. ON-DEVICE FIRST.` (11px, letter-spacing 0.14em, white/70).

**App showcase section (below the hero, on a SOLID BLACK background)**
- Eyebrow: `YOUR BODY, UNDERSTOOD`. Heading in Inter: `See it in your day.` Subtext: "BodySense AI turns your real signals into small, doable actions — so understanding your body becomes living better, every single day."
- Show the **three uploaded app screenshots** as floating **glassmorphism** cards in **3D**: the centre phone forward and a little larger; the left and right phones angled inward (rotateY about +20° and −20°). Put each phone in a frosted-glass frame with rounded corners, and a soft **coloured glow halo** behind it — **emerald/green** behind the 1st, **amber** behind the 2nd (centre), **sky-blue** behind the 3rd.
- **Beautiful parallax**: as the user scrolls through the section, each phone drifts vertically at a *different* speed (centre slower, sides faster) for depth; also add a subtle tilt of the whole group toward the mouse.
- Below the phones: three small `.liquid-glass` chips: `Predictions & early warnings` · `Daily AI guidance` · `Trends & wearable insights`.

**Footer (centered, solid black)**
- Heading in Inter: `Understand your body.` + muted `Live your way.`
- White pill button `Join the TestFlight`.
- Small line: `© 2026 BODYSENSE AI · MADE IN MANCHESTER`.
