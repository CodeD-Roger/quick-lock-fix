

## Google Search Console — Verification File

Google asks you to host the file `google238d000ca359a0ae.html` at the root of your domain so it can verify ownership.

### Plan

1. **Copy the uploaded file** `user-uploads://google238d000ca359a0ae.html` to `public/google238d000ca359a0ae.html`

That's it. Vite serves everything in `public/` at the root, so the file will be accessible at `https://albert-serrurerie.com/google238d000ca359a0ae.html`, which is exactly what Google Search Console expects.

After deployment, click **VALIDER** in the Search Console interface.

