### IMAGE CAROSUEL

A lightweight, accessible, and responsive image carousel built from scratch with React + TypeScript and Tailwind CSS.  
Supports keyboard navigation, swipe/drag and optional thumbnails—perfect as a portfolio showcase.
autoplay with sensible pause rules, lazy loading, and optional thumbnails—perfect as a portfolio showcase.

You can find the Image Carousel [here](https://image-carousel-ecru-delta.vercel.app/).

---

## ✨ Features

- **A11y-first**: roles, live region updates, keyboard (←/→), visible focus
- **Touch & mouse swipe**: horizontal threshold + vertical scroll guard
- **Autoplay**: interval timer, pause on hover, pause when tab hidden 
- **Virtualized slides**: render only current ±1 for smooth performance 
- **Lazy loading & neighbor prefetch**
- **Clean UI**: full-bleed or padded-card layouts, indicators, captions
- **Configurable**: loop/clamp, aspect ratio (16:9 by default)
- **TypeScript**: typed props and events for clarity

---

## 📦 Tech Stack

- **React** + **TypeScript**
- **Vite** (dev/build)
- **Tailwind CSS** (utility styling)

---
<!-- 
## 🗂️ Project Structure

src/
components/
ImageCarousel/
ImageCarousel.tsx
demo/
DemoPage.tsx
styles/
globals.css
App.tsx


> The carousel keeps its logic internal; `demo/DemoPage.tsx` just feeds images and shows variants.

--- -->

## 🚀 Getting Started

### Create the app (Vite + TS)
```bash
npm create vite@latest image-carousel -- --template react-ts
cd image-carousel
npm install
```


### Run
```bash
npm run dev
```
<!-- 
---
### 🧭 Props (API)

| Prop             | Type                        | Default  | Description                                |          |          |                     |
| ---------------- | --------------------------- | -------- | ------------------------------------------ | -------- | -------- | ------------------- |
| `images`         | `Slide[]`                   | —        | Array of `{src, alt, caption?}`.           |          |          |                     |
| `initial`        | `number`                    | `0`      | Start index.                               |          |          |                     |
| `loop`           | `boolean`                   | `true`   | Wrap around at edges; otherwise clamp.     |          |          |                     |
| `autoPlay`       | `boolean`                   | `true`   | Enable autoplay.                           |          |          |                     |
| `interval`       | `number` (ms)               | `3500`   | Time between slides.                       |          |          |                     |
| `aspect`         | \`"16/9" \\                 | "4/3" \\ | "1/1" \\                                   | "21/9"\` | `"16/9"` | Stage aspect ratio. |
| `showIndicators` | `boolean`                   | `true`   | Show dot indicators below the stage.       |          |          |                     |
| `showThumbnails` | `boolean`                   | `false`  | Show a thumbnail strip (optional feature). |          |          |                     |
| `onIndexChange`  | `(current: number) => void` | —        | Callback when slide changes.               |          |          |                     |
| `className`      | `string`                    | —        | Optional wrapper classes.                  |          |          |                     | -->
---

## ♿ Accessibility

- Root has `role="region"` and `aria-roledescription="carousel"`.
- Buttons have `aria-label`: “Previous slide”, “Next slide”.
- Play/Pause (if present) uses `aria-pressed`.
- Indicators are buttons: `aria-label="Go to slide N"`.
- **Live region** announces: “Slide X of Y: {alt}”.
- Keyboard:
  - **Left/Right** arrows navigate when the stage is focused.
  <!-- - **Space** toggles play/pause (if autoplay control is present). -->
- Visible focus rings on interactive elements.

---

## 📱 Interaction Model

**Navigation**
- Prev/Next buttons (overlay, center-left/right)
- Clickable indicators (dots)
- Optional thumbnails (click-to-jump)
<!-- 
**Swipe / Drag**
- Horizontal drag with distance threshold (~10–15% width or ~56px)
- Vertical movement bias cancels swipe (preserves page scroll)
-->
**Autoplay**
- Single timeout schedules `next()` at `interval`
- Paused on: hover, dragging, or hidden tab (`visibilitychange`)
- Resumes when conditions clear 

## GIF

<!-- ![Demo](image-carousel.gif) -->

<!-- ![React Image Carousel Demo](./assets/image-carousel.gif) -->

<video src="assets/image-carousel.mp4" width="800" autoplay loop muted playsinline></video>

---
## ⏱️ Milestones

**MVP**
- Stage with fixed aspect (16:9), single image rendering
- Prev/Next buttons + indicators (dots)
- Keyboard arrows
- Base a11y labels
- Deploy MVP demo


**Core polish**
- Autoplay + hover pause + visibility pause
- Live region announcements
- Lazy load + neighbor prefetch
- (Optional) Virtualize slides (current ±1)

**Future**
- Thumbnails strip
- Storybook variants
- Tests (autoplay timing, keyboard, a11y)
- Lightbox modal (zoom/pan)

--- 

## 🧪 Manual QA Checklist

- Buttons, dots, keyboard all navigate correctly
- Loop on/off works (wrap vs clamp with disabled edges)
<!-- - Swipe: horizontal flick changes slide; vertical drag scrolls page -->
- Autoplay pauses on hover, drag, and hidden tab; resumes properly
- Screen reader announces “Slide X of Y: alt”
- Only current ±1 slides mounted (when virtualization on)
<!-- - Mobile: touch targets ≥ 44px; no image ghost-drag -->
- No console warnings; layout stable on resize

---

## 🛠️ Troubleshooting

- **Tailwind v4 PostCSS error**:  
  Install `@tailwindcss/postcss` and use it in `postcss.config.js`.
- **npx on Windows can’t find Tailwind**:  
  Install locally, then run `node node_modules/tailwindcss/lib/cli.js init -p`.
- **Image too tall / too short**:  
  Ensure the stage has a fixed aspect (e.g., `aspect-video`), make image fill and use `object-cover` (or `object-contain` for letterboxing).
- **Arrows not clickable with overlay**:  
  Don’t set `pointer-events: none` on the controls wrapper; keep it clickable and layer it above the image.

---

## 🙌 Credits

Unsplash for demo images; you for building a clean, accessible carousel from scratch.
