import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const imagesDir = join(root, "assets", "images");

function listHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      listHtmlFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

const explicitImages = [
  ["live-visibility-monitoring.png", "solution-live-monitoring.png"],
  ["bio-mode-01-commercial-airline.png", "bio-mode-01-commercial-airline (2).png"],
  ["monitoring-usecase-03-sample-collection.png", "monitoring-usecase-03-sample-collection old.png"],
];

const htmlFiles = listHtmlFiles(root);

function normalizeBaseName(name) {
  return name.replace(/-(?:sm|md)$/i, "");
}

function addImageName(set, name) {
  const base = normalizeBaseName(name);
  if (base && base !== "logo" && base !== "favicon") {
    set.add(base);
  }
}

const imageNames = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");

  for (const match of html.matchAll(/srcset="[^"]*\/([^"/]+)\.png"/g)) {
    addImageName(imageNames, match[1]);
  }

  for (const match of html.matchAll(/src="[^"]*\/([^"/]+)\.png"/g)) {
    addImageName(imageNames, match[1]);
  }
}

for (const [outputBase] of explicitImages) {
  addImageName(imageNames, outputBase.replace(/\.png$/i, ""));
}

const sizes = [
  { suffix: "-sm", width: 480 },
  { suffix: "-md", width: 800 },
];

const sourceAliases = Object.fromEntries(
  explicitImages.map(([output, source]) => [output.replace(/\.png$/i, ""), source])
);

for (const baseName of [...imageNames].sort()) {
  const sourceName = sourceAliases[baseName] ?? `${baseName}.png`;
  const sourcePath = join(imagesDir, sourceName);

  if (!existsSync(sourcePath)) {
    console.warn(`Skip: source not found — ${sourceName}`);
    continue;
  }

  for (const { suffix, width } of sizes) {
    const outputPath = join(imagesDir, `${baseName}${suffix}.png`);

    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`Created ${baseName}${suffix}.png`);
  }
}
