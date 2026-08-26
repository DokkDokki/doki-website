import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const displayRoot = path.join(projectRoot, "public", "images", "display");

// Keep this manifest limited to photographs used by the active v2 routes.
const sources = [
  "personal/doki-hikari.jpg",
  "personal/doki-intheroom-portrait.jpg",
  "personal/2004-doki-baby-1.JPG",
  "personal/2004-doki-and-grandpa.JPG",
  "personal/2004-doki-and-grandma.JPG",
  "personal/2005-doki-baby-2.JPG",
  "personal/2005-doki-baby-1.JPG",
  "personal/2006-doki-baby-1.JPG",
  "personal/2007-doki-sunflower.JPG",
  "personal/2007-doki-and-shinkansen.JPG",
  "personal/2007-doki-ride-train.JPG",
  "personal/2007-doki-laptop.JPG",
  "personal/2010-doki-airport-link.JPG",
  "personal/2024-doki-disneyland-2.jpg",
  "personal/2026-doki-vocaunity.JPG",
  "events/otaqlab_2025.jpg",
  "events/singapore_2025.jpg",
  "photography/shinkansen-e7-nippori.jpg",
  "photography/keihin-tohoku-e233-akabane.jpg",
  "photography/sakura-chidorigafuchi-park.jpg",
  "photography/niigata-2025-street.jpg",
  "photography/kari-dazai-osamu.jpg",
  "photography/kari-stare.jpg",
  "photography/kari-glass.jpg",
  "photography/kari-siamsquare.jpg",
  "photography/kari-halloween.jpg",
  "photography/tokaido-line-e231-nippori.jpg",
];

const MAX_EDGE = 1920;

async function generateDisplayCopy(relativeSource) {
  const source = path.join(projectRoot, "public", "images", relativeSource);
  const destination = path.join(
    displayRoot,
    relativeSource.replace(/\.[^.]+$/, ".webp"),
  );

  await fs.mkdir(path.dirname(destination), { recursive: true });
  const result = await sharp(source)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 6 })
    .toFile(destination);

  return {
    source: relativeSource,
    output: path.relative(projectRoot, destination).replaceAll("\\", "/"),
    dimensions: `${result.width}x${result.height}`,
    bytes: result.size,
  };
}

const results = await Promise.all(sources.map(generateDisplayCopy));
for (const result of results) {
  console.log(
    `${result.output}\t${result.dimensions}\t${(result.bytes / 1024).toFixed(1)} KiB`,
  );
}

console.log(`Generated ${results.length} WebP display copies.`);
