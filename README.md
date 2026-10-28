# Box Machine website (Hugo, custom design)

One-page site: full-screen photo opening, number strip, services, results, about, contact.
Plain CSS and a few lines of JavaScript. There is no third-party theme, so nothing else to install or update.

## Editing the words
Almost everything you read on the page is in `content/_index.md` (the block at the top between the `---` lines):
tagline, numbers, the banner line, services, results, about, and the contact heading.
Contact details (email, phone, location) are in `hugo.toml` under `[params]`.

## House rule: no company names in the text
Company and client names may appear inside photos, but not in written text anywhere on the site
(page copy, photo descriptions, page title, search description, file names).
Re-run a quick search for names before each publish.

## Photos
Photos live in `assets/images/`. Hugo makes the smaller sizes automatically.
- Opening photo: `hero-dusk.jpg` (landscape, about 3000px wide or more)
- Banner photo: `band-pit.jpg`
- Result cards: `case-underground.jpg`, `case-refuelling.jpg`, `case-loading.jpg`
  (named in `content/_index.md`; `pos` sets which part of the photo stays in view)
Before adding a photo: remove its GPS/EXIF data and confirm you have permission to show the site, equipment and any logos.

## Colours and fonts
All in `assets/css/main.css`. The palette is the variables at the top (`--deep`, `--sky`, `--pur`, `--pink`).

## Draft mode
`noindex = true` in `hugo.toml` asks search engines not to list the site. Set it to `false` when you launch.

## Preview on your computer
Install Hugo (standard edition is enough) and run `hugo server`.

## Publishing (GitHub Pages)
Account `boxmachine-consulting`, repository `boxmachine-site`, Settings > Pages > Source: **GitHub Actions**.
Every push to `main` rebuilds and publishes via `.github/workflows/hugo.yml`.
Current address: `consulting.boxmachine.org` (`baseURL` in `hugo.toml` and `static/CNAME`).

## Moving to boxmachine.com.au later
1. Verify `boxmachine.com.au` in your GitHub account Pages settings.
2. Change `baseURL` in `hugo.toml` and the text in `static/CNAME` to `boxmachine.com.au`, then push.
3. Settings > Pages > Custom domain: `boxmachine.com.au`.
4. At the .com.au DNS provider: four A records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153),
   optionally four AAAA records (2606:50c0:8000::153 to 2606:50c0:8003::153), and a CNAME `www` to `boxmachine-consulting.github.io`.
   Tick Enforce HTTPS when it appears.
5. At boxmachine.org, replace the `consulting` CNAME with a redirect to the new address.
