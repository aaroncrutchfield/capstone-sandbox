# SAN-74 design spec

Link: https://claude.ai/artifact/GrMvMNbXKvHZWgETXzUGBQ (version 1795540068-072a, saved as-is in `artifact/index.html`)

## Screens

1. **Settings** (`web/settings.html`), one phone-width card: heading, the line under it, three switch rows with helper text, then a footer holding the Save settings button. The artifact shows only this screen, in a light theme and a dark theme (`prefers-color-scheme: dark`).

## Must match

Layout and hierarchy
- Page background `--bg` with a single centred card (`main`): max-width 24rem, card background, 1px `--line` border, 14px radius, overflow hidden. Page padding 2rem top/bottom, at least 16px left/right.
- Order inside the card: header (h1 + line) → list of three rows → footer with the button. Nothing after the button.
- Header padding 1.25rem 1.25rem .75rem. Line under the heading .25rem below it.
- Each row: flex, label block on the left, switch on the right, vertically centred, 1rem gap, padding .9rem 1.25rem, 1px `--line` top border.
- Footer: padding 1rem 1.25rem, 1px `--line` top border; button full width of the card's content.

Copy (exact)
- Heading: `Harbor Lantern Settings`
- Line under it: `Choose how the lantern app behaves on this phone.`
- Row 1: `Notifications` / `Alerts when a tide warning is issued` — **on**
- Row 2: `Sync over cellular` / `Uses mobile data when Wi-Fi is off` — **off**
- Row 3: `Dark mode` / `Follows the phone unless set here` — **off**
- Button: `Save settings`

States
- Switch: pill 2.75rem × 1.5rem, fully rounded; knob 1.125rem circle in `--card` colour, inset .1875rem.
- Off: track `--off`, knob on the left. On: track `--on`, knob on the right (left 1.4375rem).
- Each switch exposes its state (artifact uses `aria-label="On"` / `"Off"`).

Tokens
- Light: `--bg #eef2f6`, `--card #ffffff`, `--fg #17202b`, `--muted #5a6778`, `--line #d6dde6`, `--accent #1f6feb`, `--on #1f6feb`, `--off #b8c2cf`.
- Dark: `--bg #0f141a`, `--card #171e27`, `--fg #e6ebf1`, `--muted #9aa7b7`, `--line #2a3440`, `--accent #6ea8ff`, `--on #6ea8ff`, `--off #3a4554`.
- Type: heading Space Grotesk 600, 1.5rem; body Inter. Line under heading .875rem `--muted`. Row label Inter 500; helper text .8125rem `--muted`, .15rem below the label.
- Button: Inter 500 1rem, white text on `--accent`, no border, 10px radius, .75rem padding.

## Builder decides

- Markup elements and class names (e.g. a real `<input type="checkbox" role="switch">` or `<button>` instead of the artifact's `<i class="switch">`), as long as the rendered result and states match.
- Whether switches toggle on tap and what Save settings does (the artifact is static); focus, hover and pressed styles.
- How fonts load (Google Fonts link as in the artifact, or system fallback `system-ui, sans-serif`).
- Whether the dark theme is wired to a `data-theme` attribute in addition to `prefers-color-scheme`.
- CSS organisation, safe-area handling, page `<title>`, and how tests in `test/` assert WEB-004–006.
