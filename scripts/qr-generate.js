// scripts/qr-generate.js
// CommonJS script to generate a PNG QR code for your production URL.
// Usage (from project root):
// 1) npm install qrcode
// 2) node scripts/qr-generate.js "https://your-project.vercel.app"

const fs = require('fs');
const QRCode = require('qrcode');

const url = process.argv[2];
if (!url) {
    console.error('Usage: node scripts/qr-generate.js "https://your-project.vercel.app"');
    process.exit(1);
}

const outFile = 'site-qr.png';

QRCode.toFile(outFile, url, {
    color: {
        dark: '#000000',
        light: '#FFFFFF'
    },
    width: 400
}, function (err) {
    if (err) {
        console.error('QR generation failed:', err);
        process.exit(1);
    }
    console.log('QR kaydedildi:', outFile);
});
