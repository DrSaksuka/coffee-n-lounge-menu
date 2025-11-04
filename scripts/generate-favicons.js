#!/usr/bin/env node
/*
Generate favicon images from a source PNG.

Usage:
  1) Install dependencies (once):
     npm install --save-dev sharp png-to-ico

  2) Run the script (from project root):
     node ./scripts/generate-favicons.js ./public/n-logo.png

This will generate multiple PNG sizes in `public/` and a `public/favicon.ico`.

Note: On Windows, installing `sharp` may require build tools; the package usually provides prebuilt binaries.
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
// `png-to-ico` may export the function as the module export or under `.default` depending on
// how Node resolves the package (CJS vs ESM). Normalize to a callable function.
let pngToIcoMod = require('png-to-ico');
const pngToIco = typeof pngToIcoMod === 'function' ? pngToIcoMod : (pngToIcoMod && pngToIcoMod.default) ? pngToIcoMod.default : pngToIcoMod;

async function generate(srcPath) {
    if (!srcPath) {
        console.error('Usage: node scripts/generate-favicons.js <source-png-path>');
        process.exit(1);
    }

    const outDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
    const promises = sizes.map(async (size) => {
        const outFile = path.join(outDir, `favicon-${size}x${size}.png`);
        await sharp(srcPath)
            .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(outFile);
        console.log('Created', outFile);
        return outFile;
    });

    const pngFiles = await Promise.all(promises);

    // Create normal favicon (32,16,48) as ico using a subset of sizes (16,32,48)
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
        icoSizes.map((s) => sharp(srcPath).resize(s, s).png().toBuffer())
    );

    const icoBuffer = await pngToIco(icoBuffers);
    const icoPath = path.join(outDir, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Created', icoPath);

    // Also copy an Apple-touch icon (180) to apple-touch-icon.png
    const appleSrc = path.join(outDir, 'favicon-180x180.png');
    const appleDst = path.join(outDir, 'apple-touch-icon.png');
    if (fs.existsSync(appleSrc)) {
        fs.copyFileSync(appleSrc, appleDst);
        console.log('Copied', appleSrc, '->', appleDst);
    }

    console.log('\nDone. Add the following tags to your <head> or ensure Next metadata points to these files:');
    console.log(`<link rel="icon" href="/favicon.ico">`);
    console.log(`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`);
    console.log(`<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`);
    console.log(`<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`);
}

const input = process.argv[2] || './public/n-logo.png';
generate(input).catch((err) => {
    console.error(err);
    process.exit(1);
});
