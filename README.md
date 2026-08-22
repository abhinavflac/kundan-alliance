# kundan-alliance

Kundan Alliance — Channel Partner Awards 2026 homepage.

**Stack:** Next.js (App Router) · TypeScript · SCSS · Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Enabling entrance animations

Entrance animations are currently **disabled** on purpose. They live entirely in `src/app/globals.scss`, so re-enabling them only requires undoing two comments there:

1. **Scroll reveals** (sections, hero subline/quote, CTA buttons) — uncomment the `[data-reveal] { ... }` block.

2. **Headline rise** ("Channel Partner Awards 2026") — in `.line-mask > span`, replace `transform: none;` with:

   ```scss
   transform: translateY(115%);
   animation: line-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
   animation-delay: var(--d, 0s);
   ```

No other files need to change — the `Reveal` component and `@keyframes` definitions are left intact.
