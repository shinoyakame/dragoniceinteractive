# 3D Chip Demo

Simple demo showing a 3D "chip" (thin box) textured with 2D character images.

How to use
- Put your character images in `docs/3dcanvas/img/character/` (the three sample images are already there).
- **For local testing:** Run a local HTTP server from your repo root:
  ```
  python -m http.server 8000
  ```
  Then open http://localhost:8000/docs/3dcanvas/index.html
  
  OR use Node:
  ```
  npx http-server -p 8000 -o
  ```
  Then navigate to `/docs/3dcanvas/index.html`

- **For GitHub Pages:** Just push the files to your repo. The demo will work automatically when served via HTTPS.

Controls
- Click ◀ ▶ to change textures
- Drag the chip to rotate it
