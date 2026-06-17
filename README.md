# Ashlen — personal site

React (Vite) + React Router. Pure white, DM Sans, bottom-left floater, masonry gallery with lightbox.

## Run it
```
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## Build for hosting
```
npm run build
```
Outputs to `dist/`. Deploy that folder to Vercel or Cloudflare Pages.
On Vercel: import the repo, framework preset "Vite", done.
NOTE: for client-side routing to work on refresh, add a rewrite so all paths
serve index.html. On Vercel create `vercel.json`:
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }

## Where to put your content (no component edits needed)
- Projects:  src/data/projects.js   (each entry = one case study + its URL)
- Gallery:   src/data/gallery.js     (designs[], photos[], craft[] — point src at /gallery/*.webp)
- Writing:   src/data/posts.js        (each entry = one post)

## Where to put images
Drop .webp files in `public/`. Reference them as "/filename.webp".
Suggested: public/gallery/ for gallery images.
For each gallery image set w and h to the file's real pixel size so the
masonry reserves space and nothing jumps while loading.

## Footer 3D asset
In src/components/Footer.jsx, replace the placeholder slot with:
<img src="/ashlen-3d.webp" alt="Ashlen" />
(drop the file in public/)

## Tokens (colours, fonts, spacing)
All in src/styles/tokens.css. Change --green there to retune the accent.
