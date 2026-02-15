# TODO: Favicon Setup

## What You Need to Create

The app is configured to look for these favicon files in the `/public` directory:

### Required Files:

1. **`/public/favicon.ico`** (required)
   - Size: 16x16, 32x32, 48x48 (multi-size .ico file)
   - Used by browsers for tabs and bookmarks

2. **`/public/apple-touch-icon.png`** (recommended)
   - Size: 180x180 pixels
   - Used when users add your site to their iOS home screen

3. **`/public/og-image.png`** (recommended for social sharing)
   - Size: 1200x630 pixels
   - Used for Open Graph previews (Twitter, Facebook, LinkedIn, etc.)

4. **`/public/site.webmanifest`** (optional)
   - PWA manifest file for installable web app support

---

## How to Generate Favicons

### Option 1: Use Favicon Generator (Easiest)
1. Go to https://realfavicongenerator.net/
2. Upload your logo (the yellow "B" logo would work great)
3. Download the generated package
4. Place files in `/public` directory

### Option 2: Manual Creation
1. Create a square logo (512x512 or 1024x1024)
2. Use a tool like:
   - https://favicon.io/ (free online generator)
   - Photoshop/Figma
   - ImageMagick CLI
3. Export the required sizes listed above

---

## Current Status

✅ Metadata configured in `src/app/layout.tsx`
⏳ Actual favicon files need to be created
⏳ OG image needs to be designed

---

## Quick Tip

For now, you can:
1. Export your Bold Studio logo as a 512x512 PNG
2. Use https://favicon.io/favicon-converter/ to generate all sizes
3. Drop the files in the `/public` folder
