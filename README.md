Remi Ishola — Portfolio (Final)
===============================

This package contains a ready-to-upload static portfolio site for GitHub Pages.

Files:
- index.html
- styles.css
- script.js
- assets/
  - profile.png
  - project1.png
  - project2.png
  - project3.png
  - placeholder.png
  - Remi_Ishola_CV.pdf

How to update content:
1. Replace `assets/profile.png` with your real profile photo.
2. Replace `assets/project1.png`..`project3.png` with real screenshots for each project.
3. Replace `assets/Remi_Ishola_CV.pdf` with your actual resume PDF (keep the filename or update the link in index.html).
4. Edit contact links (GitHub, LinkedIn, Email, Website) directly in `index.html`.

Deploy to GitHub Pages (step-by-step)
------------------------------------
If you already created the repo `remiishola.github.io`, follow these steps. If not, create it first (Repo name EXACTLY: remiishola.github.io).

1. Open your terminal / command prompt.

2. Clone the repo (if you haven't already):
   ```
   git clone https://github.com/RemiIshola/remiishola.github.io.git
   cd remiishola.github.io
   ```

3. Copy the files from this package into the repo folder (overwrite if asked). For example (on macOS / Linux):
   ```
   unzip /path/to/remiishola_portfolio_final.zip -d /tmp/remi_portfolio
   cp -r /tmp/remi_portfolio/* /path/to/remiishola.github.io/
   ```

4. Commit and push:
   ```
   git add .
   git commit -m "Initial portfolio upload — Remi Ishola"
   git push origin main
   ```

5. Enable GitHub Pages (if not already):
   - Go to: https://github.com/RemiIshola/remiishola.github.io/settings/pages
   - Under "Build and deployment" set Branch to `main` and folder to `/ (root)`.
   - Save. The site should publish at https://remiishola.github.io within a minute or two.

6. Verify:
   - Visit: https://remiishola.github.io

Notes:
- The contact form in this static package is a demo. To receive messages, wire it to a form service (Formspree, Netlify Forms, or your own backend).
- You can change colors and text in `styles.css` and `index.html`.
- If you want, I can commit and push these files directly for you — provide a Personal Access Token (PAT) with repo permissions or add me as a collaborator. I can also provide exact git commands for your environment.

Need help?
- Tell me if you'd like me to push the files directly to your repo (I will guide on how to create a PAT securely), or I can walk you through the steps while you copy/paste commands.
