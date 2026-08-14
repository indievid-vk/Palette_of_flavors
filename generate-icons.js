import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// High-fidelity SVG matching the Palette of Flavors app icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Pastel Rainbow Gradient -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFD6E8"/>
      <stop offset="25%" stop-color="#E8DBFF"/>
      <stop offset="50%" stop-color="#D0F0FF"/>
      <stop offset="75%" stop-color="#D2F8E5"/>
      <stop offset="100%" stop-color="#FFEBC6"/>
    </linearGradient>

    <!-- Additional Soft Radial Highlight for 3D depth -->
    <radialGradient id="bgHighlight" cx="256" cy="180" r="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass Palette Fill Gradient -->
    <linearGradient id="glassFill" x1="120" y1="80" x2="400" y2="380" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.65"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.55"/>
    </linearGradient>

    <!-- Glass Specular Rim Stroke -->
    <linearGradient id="glassRim" x1="100" y1="60" x2="420" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="#EAEFFF" stop-opacity="0.7"/>
      <stop offset="80%" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#FFD8E5" stop-opacity="0.8"/>
    </linearGradient>

    <!-- Cream Swirl Gradient -->
    <radialGradient id="creamSwirl" cx="256" cy="230" r="110" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="40%" stop-color="#FFEEDD"/>
      <stop offset="70%" stop-color="#FFD1DC"/>
      <stop offset="100%" stop-color="#CBE5FF"/>
    </radialGradient>

    <!-- Shadows -->
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#5B3A48" flood-opacity="0.18"/>
    </filter>
    
    <filter id="elementShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#2D1A10" flood-opacity="0.22"/>
    </filter>

    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#2D1A10" flood-opacity="0.3"/>
    </filter>

    <!-- Chocolate Gradients -->
    <radialGradient id="chocDark" cx="135" cy="175" r="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6B3E36"/>
      <stop offset="70%" stop-color="#3D1E18"/>
      <stop offset="100%" stop-color="#210F0B"/>
    </radialGradient>
    <radialGradient id="chocMilk" cx="280" cy="120" r="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8C5347"/>
      <stop offset="70%" stop-color="#542B23"/>
      <stop offset="100%" stop-color="#331712"/>
    </radialGradient>

    <!-- Blueberry Gradient -->
    <radialGradient id="blueberryGrad" cx="125" cy="245" r="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7B93FF"/>
      <stop offset="40%" stop-color="#3A56D4"/>
      <stop offset="85%" stop-color="#1A287B"/>
      <stop offset="100%" stop-color="#0E154A"/>
    </radialGradient>

    <!-- Strawberry Gradient -->
    <radialGradient id="strawberryGrad" cx="345" cy="160" r="32" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF758F"/>
      <stop offset="45%" stop-color="#E61E43"/>
      <stop offset="90%" stop-color="#9E001C"/>
    </radialGradient>

    <!-- Mint Jelly Gradient -->
    <radialGradient id="mintGrad" cx="256" cy="315" r="25" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#A8FBD3"/>
      <stop offset="50%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </radialGradient>

    <!-- Citrus Jelly Gradient -->
    <radialGradient id="citrusGrad" cx="180" cy="300" r="26" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFD166"/>
      <stop offset="50%" stop-color="#F78C6C"/>
      <stop offset="100%" stop-color="#E05236"/>
    </radialGradient>
  </defs>

  <!-- Squircle Base Frame -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect width="512" height="512" rx="112" fill="url(#bgHighlight)"/>

  <!-- Inner Glass Border of Squircle Frame -->
  <rect x="6" y="6" width="500" height="500" rx="106" fill="none" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="3"/>

  <!-- PAINTER'S GLASS PALETTE -->
  <g filter="url(#softShadow)">
    <!-- Main Palette Body Path -->
    <path d="M 256 95 
             C 350 95, 420 135, 420 220 
             C 420 270, 395 295, 365 310
             C 340 322, 335 345, 350 365
             C 365 385, 345 405, 300 405
             C 210 405, 95 350, 95 240
             C 95 145, 170 95, 256 95 Z" 
          fill="url(#glassFill)" 
          stroke="url(#glassRim)" 
          stroke-width="5"/>

    <!-- Palette Thumb Hole -->
    <path d="M 330 270 
             C 352 270, 365 288, 365 305
             C 365 322, 352 338, 330 338
             C 308 338, 295 322, 295 305
             C 295 288, 308 270, 330 270 Z" 
          fill="none" 
          stroke="url(#glassRim)" 
          stroke-width="4"/>
  </g>

  <!-- CREAM SWIRL CENTER -->
  <g filter="url(#softShadow)">
    <path d="M 256 160 
             C 310 160, 345 190, 345 235 
             C 345 280, 305 305, 256 305 
             C 205 305, 165 275, 165 230 
             C 165 185, 205 160, 256 160 Z" 
          fill="url(#creamSwirl)"/>
    
    <!-- Pastel Cream Ripple Lines -->
    <path d="M 210 215 Q 256 185 295 220 T 260 270" fill="none" stroke="#FFA2B6" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
    <path d="M 225 240 Q 256 275 285 245" fill="none" stroke="#6EE7B7" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <path d="M 235 195 Q 270 205 265 235" fill="none" stroke="#93C5FD" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- DESSERT ELEMENTS ON PALETTE -->

  <!-- 1. Dark Chocolate Truffle (Top Left) -->
  <g filter="url(#elementShadow)">
    <circle cx="145" cy="185" r="28" fill="url(#chocDark)"/>
    <!-- Gold/Caramel Swirl Drizzle -->
    <path d="M 125 180 Q 145 168 162 182 T 140 198" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="138" cy="170" r="4" fill="#FFFFFF" opacity="0.6"/>
  </g>

  <!-- 2. Pink & White Swirl Lollipop Disk (Top Center) -->
  <g filter="url(#elementShadow)">
    <circle cx="215" cy="140" r="26" fill="#FFF0F5"/>
    <path d="M 215 140 m -22 0 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0" fill="#FF6B8B" opacity="0.9"/>
    <!-- Spiral stripe -->
    <path d="M 215 140 C 215 130 225 125 231 133 C 238 142 225 155 210 152 C 195 148 198 126 218 120 C 238 115 245 138 235 155" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="206" cy="128" r="3.5" fill="#FFFFFF" opacity="0.8"/>
  </g>

  <!-- 3. Milk Chocolate Truffle (Top Center-Right) -->
  <g filter="url(#elementShadow)">
    <circle cx="285" cy="135" r="27" fill="url(#chocMilk)"/>
    <path d="M 268 135 C 275 122, 295 122, 300 135 C 303 145, 282 152, 275 142" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.85"/>
    <circle cx="277" cy="123" r="3.5" fill="#FFFFFF" opacity="0.7"/>
  </g>

  <!-- 4. Fresh Strawberry (Top Right) -->
  <g filter="url(#elementShadow)">
    <!-- Strawberry body -->
    <path d="M 350 142 C 375 142 380 170 365 192 C 355 208 345 208 335 192 C 320 170 325 142 350 142 Z" fill="url(#strawberryGrad)"/>
    <!-- Seeds -->
    <circle cx="342" cy="160" r="1.5" fill="#FDE047"/>
    <circle cx="358" cy="162" r="1.5" fill="#FDE047"/>
    <circle cx="350" cy="175" r="1.5" fill="#FDE047"/>
    <circle cx="362" cy="180" r="1.2" fill="#FDE047"/>
    <circle cx="338" cy="178" r="1.2" fill="#FDE047"/>
    <circle cx="350" cy="190" r="1" fill="#FDE047"/>
    <!-- Leaf Top -->
    <path d="M 350 142 Q 338 132 330 138 Q 345 144 350 142 Q 355 144 370 138 Q 362 132 350 142 Z" fill="#22C55E"/>
    <path d="M 350 142 Q 350 130 350 125 Q 352 138 350 142 Z" fill="#15803D" stroke="#15803D" stroke-width="2"/>
    <!-- Highlight -->
    <ellipse cx="340" cy="155" rx="3" ry="7" transform="rotate(-20 340 155)" fill="#FFFFFF" opacity="0.6"/>
  </g>

  <!-- 5. Blueberry (Middle Left) -->
  <g filter="url(#elementShadow)">
    <circle cx="140" cy="255" r="25" fill="url(#blueberryGrad)"/>
    <!-- Blueberry Crown Hole -->
    <circle cx="140" cy="245" r="6" fill="#111827"/>
    <path d="M 136 245 L 144 245 M 140 241 L 140 249" stroke="#374151" stroke-width="1.5"/>
    <ellipse cx="130" cy="248" rx="4" ry="7" transform="rotate(-30 130 248)" fill="#FFFFFF" opacity="0.65"/>
  </g>

  <!-- 6. Citrus Jelly Drop (Bottom Left) -->
  <g filter="url(#elementShadow)">
    <ellipse cx="185" cy="308" rx="24" ry="22" fill="url(#citrusGrad)"/>
    <!-- Sugar sparkles -->
    <circle cx="175" cy="298" r="2" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="192" cy="302" r="1.5" fill="#FFFFFF" opacity="0.8"/>
    <circle cx="180" cy="318" r="1.5" fill="#FFFFFF" opacity="0.8"/>
    <circle cx="198" cy="314" r="2" fill="#FFFFFF" opacity="0.9"/>
    <ellipse cx="177" cy="298" rx="3" ry="5" transform="rotate(-25 177 298)" fill="#FFFFFF" opacity="0.75"/>
  </g>

  <!-- 7. Mint Faceted Jewel Candy (Bottom Center) -->
  <g filter="url(#elementShadow)">
    <circle cx="256" cy="320" r="23" fill="url(#mintGrad)"/>
    <!-- Star Facet Starburst Lines -->
    <path d="M 256 298 L 256 342 M 234 320 L 278 320 M 240 304 L 272 336 M 240 336 L 272 304" stroke="#FFFFFF" stroke-width="2" opacity="0.7"/>
    <circle cx="256" cy="320" r="5" fill="#FFFFFF" opacity="0.85"/>
  </g>

  <!-- GLOSSY APP TITLE: "Palette of Flavors" / "Палитра вкусов" -->
  <g filter="url(#textGlow)">
    <text x="256" y="448" 
          font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" 
          font-weight="800" 
          font-size="34" 
          fill="#FFFFFF" 
          text-anchor="middle" 
          letter-spacing="0.5">
      Palette of Flavors
    </text>
    <text x="256" y="474" 
          font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" 
          font-weight="700" 
          font-size="18" 
          fill="#FFF3F7" 
          text-anchor="middle" 
          letter-spacing="1" 
          opacity="0.95">
      ПАЛИТРА ВКУСОВ
    </text>
  </g>
</svg>
`;

async function generate() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Save base SVG
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);

  // Generate 512x512
  await sharp(Buffer.from(svgIcon))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512.png'));

  // Generate 256x256
  await sharp(Buffer.from(svgIcon))
    .resize(256, 256)
    .png()
    .toFile(path.join(publicDir, 'pwa-256.png'));

  // Generate 192x192
  await sharp(Buffer.from(svgIcon))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192.png'));

  // Generate Apple Touch Icon 180x180
  await sharp(Buffer.from(svgIcon))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate Favicon 64x64
  await sharp(Buffer.from(svgIcon))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('Successfully generated all icon assets in /public!');
}

generate().catch(console.error);
