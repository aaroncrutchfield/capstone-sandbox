# SAN-72 design: the settings screen

Design: https://claude.ai/artifact/GrMvMNbXKvHZWgETXzUGBQ (version `1795539150-f602`, saved as-is in [`artifact/index.html`](artifact/index.html))

## Screens

The artifact shows one screen.

1. **Settings** (`web/settings.html`): a single phone-width card centred on a tinted page. Top to bottom, it holds a header (the heading and the line under it), a list of three switch rows, and a footer holding the Save settings button.

## Must match

Layout and hierarchy
- One card (`main`), at most 24rem wide, centred horizontally, on the page background. The page has 2rem top and bottom padding and at least 16px side gutters.
- The card has a 1px `--line` border, a 14px radius and the `--card` background. Its children, in order: header, then the list of three rows, then the footer. Nothing comes after the footer (WEB-003).
- Header: 1.25rem padding at the top and sides, .75rem at the bottom. It holds an `h1` and then one paragraph under it.
- Each row: label and helper text stacked on the left, a switch on the right (flex, `space-between`, vertically centred, 1rem gap). Padding .9rem × 1.25rem. A 1px `--line` rule above each row.
- Footer: 1rem × 1.25rem padding with a 1px `--line` rule above it. It holds one full-width button.

Copy (exact)
- Heading (`h1`): **Harbor Lantern Settings**
- Line under it: **Choose how the lantern app behaves on this phone.**
- Row 1: **Notifications**, with the helper text *Alerts when a tide warning is issued*. Its switch is **on**.
- Row 2: **Sync over cellular**, with the helper text *Uses mobile data when Wi-Fi is off*. Its switch is **off**.
- Row 3: **Dark mode**, with the helper text *Follows the phone unless set here*. Its switch is **off**.
- Button: **Save settings**

States
- Switch: a 2.75rem × 1.5rem pill. When off, the track is `--off` and the 1.125rem knob (`--card` colour) sits .1875rem from the left. When on, the track is `--on` and the knob sits at 1.4375rem from the left.
- Each switch exposes its state to assistive tech and tests, as "On" or "Off" (the artifact uses `aria-label`).
- Initial states: on, off, off, in the order above.

Tokens (light / dark)
- `--bg` #eef2f6 / #0f141a · `--card` #ffffff / #171e27 · `--fg` #17202b / #e6ebf1 · `--muted` #5a6778 / #9aa7b7 · `--line` #d6dde6 / #2a3440 · `--accent` and `--on` #1f6feb / #6ea8ff · `--off` #b8c2cf / #3a4554
- Dark values apply under `prefers-color-scheme: dark` unless `data-theme="light"` is set, and always under `data-theme="dark"`.
- Type: the `h1` uses Space Grotesk 600 at 1.5rem. The body uses Inter: row labels at weight 500 and base size, helper text at .8125rem in `--muted`, and the line under the heading at .875rem in `--muted`.
- Button: full width, Inter 500 at 1rem, white text on `--accent`, no border, 10px radius, .75rem padding.

## Builder decides

- The markup that carries the switches: a real `<input type="checkbox" role="switch">` or `<button aria-pressed>` styled as the pill is fine, and better than the artifact's `<i>`, provided it looks the same and exposes on/off.
- Whether the switches toggle, and what Save settings does when clicked: the artifact shows neither, and the ticket asks only for the static screen.
- Form field `name`s, ids, class names, and whether CSS is inline or in a separate file.
- How the fonts load (the Google Fonts link or system fallbacks), with `system-ui` as the fallback.
- The page `<title>`. The artifact's is "Lantern Settings Screen".
- Hover, focus and pressed styles; focus must stay visible.
- Transitions and animation.
- How `web/serve.mjs` serves the page, and how the tests are structured, as long as they are named by WEB-001..003.
