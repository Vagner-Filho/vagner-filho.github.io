# vagner-filho.github.io

A portfolio inspired in Fallout's VAULT-TEC Terminals.

## Design

- **Aesthetic:** Vault-Tec terminal / Pip-Boy inspired — phosphor green on deep black, CRT scanlines, and chunky borders.
- **Typography:** Monospace throughout (`Courier Prime`) with ASCII art headers.
- **No frameworks:** Pure static files for maximum creative control and zero build steps.

## Structure

```
├── index.html       # Landing page with terminal boot sequence
├── about.html       # My person
├── projects.html    # My work
├── ai.html          # View on AI
├── contact.html     # Contact me
├── css/
│   ├── main.css         # Core styles, layout, nav, variables
│   ├── crt.css          # CRT overlay, scanlines, flicker, vignette
│   └── animations.css   # Typing, blink, glitch, fade-ins
├── js/
│   ├── main.js          # Nav/footer injection, utilities, year updater
│   └── terminal.js      # Boot sequence, typewriter effects
└── partials/
    ├── nav.html         # Shared navigation snippet
    └── footer.html      # Shared footer snippet
```

## Local Preview

You can open any `.html` file directly in your browser. No server or build step required.

If you prefer a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Customization

- **Colors:** Edit CSS variables in `css/main.css` (`:root`).
- **Projects:** Update the placeholder cards in `projects.html`.
- **Bio & Contact:** Edit `about.html` and `contact.html`.
- **ASCII Headers:** Swap the `<pre>` art on any page.
- **Nav/Footer:** Edit `partials/nav.html` and `partials/footer.html` — they are injected into every page via `fetch()`.

## Deployment

Push to the `main` (or `master`) branch of this repository. GitHub Pages will serve the static files automatically.
