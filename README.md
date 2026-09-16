# Orythavion Technologies — Website

## Structure
```
orythavion-site/
├── index.html        # all 5 "pages" (Home, About, Internships, Projects, Contact)
├── style.css
├── script.js      # nav routing, accordions, project filter
└── images/
    └── Logo.png
```

## How it works
This is a single HTML file where each "page" is a `<section>`. Navigation
links use `#hash` routes (`#home`, `#about`, `#internships`, `#projects`,
`#contact`) and `script.js` shows/hides the matching section — so it behaves
like a 5-page site without needing a server or build step.

## Running it
Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:
```
npx serve .
```

## To turn this into real separate pages later
If you'd rather have real URLs (`/internships`, `/projects`, etc.) instead of
hash routing — for example once you add a backend or want each internship to
have its own indexable URL — split each `<section>...</section>` block in
`index.html` into its own `.html` file, keep `css/style.css` and
`assets/Logo.png` shared, and update the `<nav>` links to point to the new
filenames instead of `#hash` values.

## Known placeholders to replace
- WhatsApp / LinkedIn / Instagram links in the header... actually footer and
  Contact section (currently `#`)
- Contact form (`onsubmit` just shows an alert — wire it to email or a
  backend)
- Pricing mentioned in the FAQ ("shared when you apply")
- Project entries (currently placeholders except the two "Company" ones)
