import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const htmlFiles = globSync("**/*.html", {
  cwd: root,
  ignore: ["node_modules/**"],
});

const imgPattern =
  /<img\s+src="([^"]+)"\s+width="(\d+)"\s*(?:height="(\d+)"\s*)?alt="([^"]*)"\s+loading="lazy"\s+decoding="async">/g;

const multilineImgPattern =
  /<img\s+src="([^"]+)"\s+width="(\d+)"\s*\n\s*height="(\d+)"\s*\n\s*alt="([^"]*)"\s+loading="lazy"\s+decoding="async">/g;

function shouldSkip(src) {
  return (
    src.includes("logo.png") ||
    src.includes("favicon") ||
    src.endsWith("-sm.png")
  );
}

function toPicture(src, width, height, alt) {
  const match = src.match(/^(.*\/)([^/]+)\.png$/);
  if (!match) return null;

  const [, prefix, base] = match;
  const w = Number(width);
  const h = Number(height);
  const mdW = Math.min(800, w);
  const mdH = h ? Math.round((mdW / w) * h) : undefined;
  const smW = Math.min(480, w);
  const smH = h ? Math.round((smW / w) * h) : undefined;

  const mdDims = mdH ? ` width="${mdW}" height="${mdH}"` : "";
  const smDims = smH ? ` width="${smW}" height="${smH}"` : "";
  const fullDims = h ? ` width="${w}" height="${h}"` : ` width="${w}"`;

  return `<picture>
                            <source media="(min-width: 1024px)" srcset="${prefix}${base}.png"${fullDims}>
                            <source media="(min-width: 640px)" srcset="${prefix}${base}-md.png"${mdDims}>
                            <img src="${prefix}${base}-sm.png"
                                alt="${alt}"${smDims}
                                loading="lazy" decoding="async">
                        </picture>`;
}

let total = 0;

for (const file of htmlFiles) {
  const filePath = join(root, file);
  let html = readFileSync(filePath, "utf8");
  const original = html;

  html = html.replace(multilineImgPattern, (match, src, width, height, alt) => {
    if (shouldSkip(src) || match.includes("<picture>")) return match;
    const picture = toPicture(src, width, height, alt);
    if (!picture) return match;
    total += 1;
    return picture;
  });

  html = html.replace(imgPattern, (match, src, width, height, alt) => {
    if (shouldSkip(src) || match.includes("<picture>")) return match;
    const picture = toPicture(src, width, height || "", alt);
    if (!picture) return match;
    total += 1;
    return picture;
  });

  if (html !== original) {
    writeFileSync(filePath, html, "utf8");
    console.log(`Updated ${file}`);
  }
}

console.log(`Converted ${total} images to <picture>`);
