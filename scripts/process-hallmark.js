// One-off: the Hallmark source is a white wordmark over a blurred photo background,
// so the white-background knockout in process-logos.js doesn't apply. Instead we
// center-crop to the wordmark and keep only bright, low-saturation (whitish) pixels.
// Run: node scripts/process-hallmark.js
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logos", "hallmark channel.png");
const OUT = path.join(__dirname, "..", "public", "logos", "bw", "hallmark.png");

(async () => {
  const base = await sharp(SRC).resize({ height: 500, fit: "inside" }).toBuffer({ resolveWithObject: true });
  const W = base.info.width;
  const H = base.info.height;

  // Crop to the centered wordmark to exclude bright highlights in the corner photos.
  const flat = await sharp(base.data)
    .extract({
      left: Math.round(W * 0.26),
      top: Math.round(H * 0.3),
      width: Math.round(W * 0.46),
      height: Math.round(H * 0.46),
    })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = flat.info;
  const d = flat.data;
  const px = width * height;
  const out = Buffer.alloc(px * 4);
  for (let i = 0; i < px; i++) {
    const r = d[i * 3];
    const g = d[i * 3 + 1];
    const b = d[i * 3 + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    const sat = mx === 0 ? 0 : (mx - mn) / mx;
    let a = 0;
    if (lum > 200 && sat < 0.22) a = Math.min(255, (lum - 200) * 6);
    out[i * 4] = 255;
    out[i * 4 + 1] = 255;
    out[i * 4 + 2] = 255;
    out[i * 4 + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ height: 120 })
    .png()
    .toFile(OUT);
  console.log("✓ hallmark");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
