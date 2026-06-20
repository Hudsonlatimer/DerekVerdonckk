// One-off: normalize studio logos into uniform white-on-transparent silhouettes
// so they read as black & white and blend into the dark site.
// Run: node scripts/process-logos.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logos");
const OUT = path.join(SRC, "bw");
fs.mkdirSync(OUT, { recursive: true });

// source file -> output slug.
// Hallmark is handled separately (see scripts/process-hallmark.js): its source is a
// white wordmark over a photo background, so it needs a brightness/saturation extract
// rather than the white-background knockout used here.
const files = {
  "disney.png": "disney",
  "nirvana.png": "nelvana",
  "jim henson company.png": "jim-henson",
  "nickelodeon.png": "nickelodeon",
  "island of misfits.png": "island-of-misfits",
  "jamfiled.png": "jam-filled",
  "mainframe ent.png": "mainframe",
  "nscc.jpeg": "nscc",
};

const WORK_H = 400; // working resolution before final downscale

(async () => {
  for (const [file, slug] of Object.entries(files)) {
    const input = path.join(SRC, file);

    // 1. Flatten any transparency onto white so every logo starts on a known bg.
    //    density: render SVGs at high resolution before downscaling.
    const flat = await sharp(input, { density: 400 })
      .flatten({ background: "#ffffff" })
      .resize({ height: WORK_H, fit: "inside" })
      .toBuffer({ resolveWithObject: true });
    const { width, height } = flat.info;

    // 2. Build a white-on-transparent image. Alpha = distance from white, so even
    //    *light coloured* logos (glossy gradients, pale type) register as solid,
    //    while the white background drops out. GAIN pushes mid-tones to fully opaque;
    //    anti-aliased edges keep partial alpha and smooth further on downscale.
    const rgb = await sharp(flat.data).removeAlpha().raw().toBuffer();
    const GAIN = 2.6;
    const px = width * height;
    const rgba = Buffer.alloc(px * 4);
    for (let i = 0; i < px; i++) {
      const r = rgb[i * 3];
      const g = rgb[i * 3 + 1];
      const b = rgb[i * 3 + 2];
      const whiteness = Math.min(r, g, b); // 255 = white bg, low = content
      let a = (255 - whiteness) * GAIN;
      if (a > 255) a = 255;
      rgba[i * 4] = 255;
      rgba[i * 4 + 1] = 255;
      rgba[i * 4 + 2] = 255;
      rgba[i * 4 + 3] = a;
    }
    const composed = await sharp(rgba, { raw: { width, height, channels: 4 } })
      .png()
      .toBuffer();

    // 4. Trim transparent borders, then standardize height for the ribbon.
    await sharp(composed)
      .trim()
      .resize({ height: 120 })
      .png()
      .toFile(path.join(OUT, `${slug}.png`));

    console.log(`✓ ${slug}`);
  }
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
