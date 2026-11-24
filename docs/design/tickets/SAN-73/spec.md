# SAN-73 design spec

Design: https://claude.ai/artifact/GrMvMNbXKvHZWgETXzUGBQ (version 1795539150-f602, saved as [artifact/index.html](artifact/index.html))

## Screens

The artifact shows one screen.

1. **Settings (phone width).** One card centred on a tinted page. From top to bottom it holds a header (heading and the line under it), three switch rows, and a footer with the Save settings button.

## Must match

Layout
- One card, `max-width: 24rem`, centred (`margin-inline: auto`), 1px `--line` border, 14px radius, `overflow: hidden`. The page has a 16px side gutter and 2rem top and bottom padding. No horizontal scroll at phone width.
- Header padding is `1.25rem 1.25rem .75rem`.
- Each switch row is a flex row with the label and helper text on the left and the switch on the right (`justify-content: space-between`, `align-items: center`, gap 1rem). Padding is `.9rem 1.25rem` with a 1px `--line` top border.
- The footer has `1rem 1.25rem` padding and a 1px `--line` top border. The button fills the footer width (`width: 100%`).

Hierarchy and order
- Heading, then the line under it, then three rows in this order: Notifications, Sync over cellular, Dark mode. Save settings is last.

Copy (exact)
- Heading: `Harbor Lantern Settings`
- Line under it: `Choose how the lantern app behaves on this phone.`
- Row 1: `Notifications`, helper `Alerts when a tide warning is issued`
- Row 2: `Sync over cellular`, helper `Uses mobile data when Wi-Fi is off`
- Row 3: `Dark mode`, helper `Follows the phone unless set here`
- Button: `Save settings`

States
- Notifications is **on**. Sync over cellular is **off**. Dark mode is **off**.
- Switch track is 2.75rem × 1.5rem, fully rounded. Its knob is a 1.125rem circle in `--card`, inset .1875rem. Off: the track is `--off` and the knob is on the left. On: the track is `--on` and the knob is at `left: 1.4375rem` (right side).
- Each switch has an accessible on or off state (the artifact uses `aria-label="On"` / `"Off"`).

Tokens (light / dark)
- `--bg` #eef2f6 / #0f141a
- `--card` #ffffff / #171e27
- `--fg` #17202b / #e6ebf1
- `--muted` #5a6778 / #9aa7b7 (line under the heading, helper text)
- `--line` #d6dde6 / #2a3440
- `--accent` / `--on` #1f6feb / #6ea8ff
- `--off` #b8c2cf / #3a4554
- Dark values apply under `prefers-color-scheme: dark` unless `data-theme="light"` is set, and also under `data-theme="dark"`.

Type
- Heading: Space Grotesk 600, 1.5rem, margin 0, `text-wrap: balance`.
- Body: Inter (400/500). The line under the heading is .875rem `--muted` with a .25rem top margin. Row labels are weight 500. Helper text is .8125rem `--muted`, block, with a .15rem top margin.
- Button: Inter 500 1rem, white text on `--accent`, no border, 10px radius, `.75rem` padding.

## Builder decides

- The markup elements and class names (for example a real `<input type="checkbox" role="switch">` or `<button role="switch">` instead of the artifact's `<i class="switch">`), as long as each switch looks and is announced as on or off.
- Whether the switches toggle and what Save settings does when pressed. The design shows only the static state.
- How fonts load (Google Fonts link, self-hosted, or system fallback), and the fallback stacks.
- Focus, hover and pressed styles, and transitions.
- The page `<title>`, and how the CSS is organised (inline or a separate file).
- How tests check WEB-001 to WEB-003, and the wording of docs/behaviors/web.md.
