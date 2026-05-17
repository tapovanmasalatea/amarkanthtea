const fs = require('fs');
const path = require('path');

const amarkanthPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'AmarkanthPremiumCTC.jsx');
const tapovanPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'TapovanPremiumTea.jsx');

// 1. Fix Amarkanth Premium CTC
if (fs.existsSync(amarkanthPath)) {
  let content = fs.readFileSync(amarkanthPath, 'utf8');
  
  // Remove mobile product main image height override
  const initialLength = content.length;
  content = content.replace(/\.product-main-img\s*\{\s*height:\s*280px;?\s*\}/g, '/* mobile image height auto-aligned */');
  
  // Remove tagline subheading from reviews loop
  content = content.replace(/<span className="tagline">\{rev\.tagline\}<\/span>/g, '');
  
  if (content.length !== initialLength) {
    fs.writeFileSync(amarkanthPath, content, 'utf8');
    console.log('Successfully updated AmarkanthPremiumCTC.jsx');
  } else {
    console.log('No matches found or already updated in AmarkanthPremiumCTC.jsx');
  }
} else {
  console.error('Amarkanth file not found at:', amarkanthPath);
}

// 2. Fix Tapovan Premium Tea
if (fs.existsSync(tapovanPath)) {
  let content = fs.readFileSync(tapovanPath, 'utf8');
  
  // Remove mobile product main image height override
  const initialLength = content.length;
  content = content.replace(/\.product-main-img\s*\{\s*height:\s*280px;?\s*\}/g, '/* mobile image height auto-aligned */');
  
  // Remove tagline subheading from reviews loop
  content = content.replace(/<span className="tagline tapovan-tag">\{rev\.tagline\}<\/span>/g, '');
  
  if (content.length !== initialLength) {
    fs.writeFileSync(tapovanPath, content, 'utf8');
    console.log('Successfully updated TapovanPremiumTea.jsx');
  } else {
    console.log('No matches found or already updated in TapovanPremiumTea.jsx');
  }
} else {
  console.error('Tapovan file not found at:', tapovanPath);
}
