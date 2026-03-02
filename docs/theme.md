# Udream Branding & Theme Plan

This document defines the visual identity for **Udream**. The theme is inspired by vintage travel aesthetics, warmth, and adventure.

## 🎨 Color Palette

The color scheme is grounded in earthy, muted tones that evoke a sense of history and "old-world" exploration.

| Usage | Color | Hex | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | ![#9E414C](https://via.placeholder.com/15/9E414C?text=+) | `#9E414C` | **Adventure Red:** Used for the logo, key headings, and meaningful accents. |
| **Secondary** | ![#2E261E](https://via.placeholder.com/15/2E261E?text=+) | `#2E261E` | **Bistre Night:** A deep charcoal-brown for high-contrast text and dark backgrounds. |
| **Background**| ![#EBE6D9](https://via.placeholder.com/15/EBE6D9?text=+) | `#EBE6D9` | **Parchment:** A soft, warm beige for the main site background. |
| **Accent**    | ![#D4A373](https://via.placeholder.com/15/D4A373?text=+) | `#D4A373` | **Desert Sand:** A secondary accent for buttons, hover states, and highlights. |

## Typography ✍️

To match the logo's character, we use a mix of three distinct font styles:

### 1. The Script (Accent & Flourish)
- **Recommendation:** [Satisfy](https://fonts.google.com/specimen/Satisfy) or [Dancing Script](https://fonts.google.com/specimen/Dancing+Script)
- **Usage:** Small labels ("The", "Travels"), quotes, or decorative subtitles.
- **Vibe:** Personal, handwritten, authentic.

### 2. The Headline (Bold & Hero)
- **Recommendation:** [Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One) or [Playfair Display (Black 900)](https://fonts.google.com/specimen/Playfair+Display)
- **Usage:** Main Page Titles, "UDREAM" logo text, and Section Headers.
- **Vibe:** Robust, vintage, impactful.

### 3. The Body (Interface & Reading)
- **Recommendation:** [Inter](https://fonts.google.com/specimen/Inter) or [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Usage:** Paragraphs, menu items, button text.
- **Vibe:** Modern, highly readable, clean.

---

## 🛠️ Implementation (CSS Variables)

Add these to your global CSS (e.g., `src/app/globals.css` or `index.css`) for consistent styling across the app.

```css
:root {
  /* Colors */
  --color-primary: #9E414C;      /* Adventure Red */
  --color-secondary: #2E261E;    /* Bistre Night */
  --color-background: #EBE6D9;   /* Parchment */
  --color-accent: #D4A373;       /* Desert Sand */
  --color-text-main: #2E261E;
  --color-text-muted: #6B5E53;

  /* Fonts */
  --font-display: 'Alfa Slab One', serif;
  --font-script: 'Satisfy', cursive;
  --font-body: 'Inter', sans-serif;
}
```

## ✨ Visual Elements
- **Borders:** Subtle thin lines in `--color-secondary` for a "postcard" or "journal" feel.
- **Buttons:** Rounded corners (4px - 8px), using `--color-primary` with white text, transitioning to `--color-accent` on hover.
- **Images:** Subtle sepia tones or high-contrast textures to emphasize the travel blog aesthetic.
