# MitchBentz.com

A simple retro inspired personal site for Mitch "Michelle" Bentz. Desktop first with clean mobile layout.

## Pages

- `/` Home with about and website cards
- `/interests.html` Interests sections to fill in
- `/links.html` Websites and social links

## How to use with GitHub Desktop

1. Open GitHub Desktop.
2. Create a new repository called `MitchBentz.com` (or clone an empty repo first).
3. Choose a local path and create the repo.
4. From your file manager, copy the files from this folder into the repo folder.
5. Return to GitHub Desktop. You will see the changes. Commit with a message like `Add initial site`.
6. Click `Publish repository`.
7. In the repository settings on GitHub, enable Pages:
   - Settings -> Pages -> Source: `Deploy from a branch`
   - Branch: `main` (or `master`) and folder `/root`
8. Add your custom domain:
   - In Pages settings set the custom domain to `mitchbentz.com`.
   - Create a file named `CNAME` at the repo root that contains exactly `mitchbentz.com` (already included here).
9. DNS:
   - Point your domain `mitchbentz.com` at GitHub Pages with A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `www` CNAME to `yourusername.github.io`.
   - If you already use GitHub Pages for other custom domains, you likely have this set up.

## Customize

- Replace placeholder screenshots in `/images/` with real captures and keep the same filenames or update the `<img>` `src` in `index.html`.
- Fill in repo link for HuxP in `index.html` if you want it listed.
- Edit colors in `assets/styles.css` in the `:root` block.
- Edit content directly on GitHub in your browser or via GitHub Desktop.

## Notes

- The "skip to main content" link is hidden until keyboard focus for accessibility. It will not show during normal browsing.
- No em dashes or curly quotes in the code.
