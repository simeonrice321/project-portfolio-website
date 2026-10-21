# Simeon Rice — Engineering Project Portfolio

Static site built from the project portfolio PDF. Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder (do not commit `.venv/` or `_pdf_preview/`).
2. In the repository, open **Settings → Pages**.
3. Set the source to the `main` branch and the folder to `/` (root).
4. After the site builds, GitHub shows a URL like `https://<username>.github.io/<repo>/`.

The resume download is `assets/resume/Simeon-Rice-Resume-2026.pdf`. Project photos live in `assets/images/projects/`.
