import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function buildIcons() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sourceIcon = path.join(rootDir, 'icon_512x512.png');
  if (!fs.existsSync(sourceIcon)) {
    console.error('Source icon_512x512.png not found, skipping icon generation');
    return;
  }

  console.log('Generating PNG icons from icon_512x512.png during build...');

  const sizes = [
    { name: 'pwa-512.png', size: 512 },
    { name: 'icon_512.png', size: 512 },
    { name: 'pwa-256.png', size: 256 },
    { name: 'icon_256.png', size: 256 },
    { name: 'pwa-192.png', size: 192 },
    { name: 'icon_192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon.png', size: 64 }
  ];

  for (const item of sizes) {
    const dest = path.join(publicDir, item.name);
    await sharp(sourceIcon)
      .resize(item.size, item.size)
      .png()
      .toFile(dest);
    console.log(`Generated: ${item.name} (${item.size}x${item.size})`);
  }

  console.log('All icons generated successfully!');
}

buildIcons().catch(console.error);
