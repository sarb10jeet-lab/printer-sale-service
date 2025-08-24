const fs = require('fs');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// New Sharp BP color models
const sharpColorModels = [
    'Sharp BP-22C20Z',
    'Sharp BP-20C25',
    'Sharp BP-30C25',
    'Sharp BP-50C25',
    'Sharp BP-50C31',
    'Sharp BP-50C35',
    'Sharp BP-70C45',
    'Sharp BP-70C55',
    'Sharp BP-70C65'
];

// Generate SVG placeholder images
sharpColorModels.forEach(model => {
    const filename = model.toLowerCase().replace(/\s+/g, '-') + '.svg';
    const filepath = path.join(imagesDir, filename);
    
    // Get specific speed
    const specificSpeed = model.match(/\d+$/)?.[0] || '';
    
    // Get speed range for the model
    let speedRange = '';
    if (model.includes('20C')) speedRange = '20-25 ppm';
    else if (model.includes('22C')) speedRange = '20 ppm';
    else if (model.includes('30C')) speedRange = '25 ppm';
    else if (model.includes('50C')) speedRange = '25-35 ppm';
    else if (model.includes('70C')) speedRange = '45-65 ppm';
    else speedRange = '20-25 ppm';
    
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="300" fill="url(#bg)"/>
  
  <!-- Subtle pattern -->
  <g stroke="rgba(255,255,255,0.1)" stroke-width="1">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="300"/>`).join('\n    ')}
  </g>
  
  <!-- Printer icon -->
  <g fill="rgba(255,255,255,0.2)">
    <rect x="50" y="80" width="80" height="60" rx="5"/>
    <rect x="60" y="70" width="60" height="20" rx="3"/>
    <rect x="70" y="150" width="40" height="20" rx="3"/>
  </g>
  
  <!-- Text -->
  <text x="200" y="50" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">SHARP</text>
  <text x="200" y="80" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">${model}</text>
  <text x="200" y="110" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Color Printer</text>
  <text x="200" y="140" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">Speed: ${specificSpeed} ppm</text>
  
  <!-- A3 Capable badge -->
  <rect x="170" y="160" width="60" height="25" rx="12" fill="#10b981"/>
  <text x="200" y="177" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">A3 CAPABLE</text>
  
  <!-- Speed range badge -->
  <rect x="150" y="190" width="100" height="20" rx="10" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="204" font-family="Arial, sans-serif" font-size="11" fill="white" text-anchor="middle">${speedRange}</text>
  
  <!-- Color indicator -->
  <circle cx="320" cy="50" r="15" fill="#ef4444" stroke="white" stroke-width="2"/>
  <circle cx="340" cy="50" r="15" fill="#3b82f6" stroke="white" stroke-width="2"/>
  <circle cx="360" cy="50" r="15" fill="#10b981" stroke="white" stroke-width="2"/>
</svg>`;
    
    fs.writeFileSync(filepath, svg);
    console.log(`Generated: ${filename}`);
});

console.log(`\nGenerated ${sharpColorModels.length} color printer placeholder images in ${imagesDir}`);
console.log('You can now use these images in your Products.tsx file.'); 