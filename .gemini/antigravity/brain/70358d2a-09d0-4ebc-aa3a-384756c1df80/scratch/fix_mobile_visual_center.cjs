const fs = require('fs');
const path = require('path');

const amarkanthPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'AmarkanthPremiumCTC.jsx');
const tapovanPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'TapovanPremiumTea.jsx');

// 1. Process Amarkanth
if (fs.existsSync(amarkanthPath)) {
  let content = fs.readFileSync(amarkanthPath, 'utf8');

  // Replace media query wrapper overrides
  const target1 = /\.product-visual-area\s*\{\s*position:\s*relative;\s*top:\s*0;\s*\}\s*\.main-image-wrapper\s*\{\s*padding:\s*20px;\s*\}\s*\.product-main-img\s*\{\s*height:\s*350px;\s*\}/g;
  const replacement1 = `.product-visual-area { position: relative; top: 0; width: 100%; display: flex; flex-direction: column; align-items: center; }
          .main-image-wrapper { width: 100%; max-width: 480px; margin: 0 auto 15px; aspect-ratio: 1/1; }
          .product-main-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }`;
  
  content = content.replace(target1, replacement1);

  // Center thumbnail gallery on mobile
  const target2 = /\.thumbnail-gallery\s*\{\s*justify-content:\s*flex-start;\s*overflow-x:\s*auto;\s*padding:\s*10px\s*0;\s*scrollbar-width:\s*none;\s*\}/g;
  const replacement2 = `.thumbnail-gallery { 
              justify-content: center; 
              width: 100%;
              max-width: 480px;
              margin: 0 auto;
              overflow-x: auto; 
              padding: 10px 0;
              scrollbar-width: none;
            }`;

  content = content.replace(target2, replacement2);

  fs.writeFileSync(amarkanthPath, content, 'utf8');
  console.log('Successfully updated AmarkanthPremiumCTC.jsx centering.');
} else {
  console.error('Amarkanth file not found.');
}

// 2. Process Tapovan
if (fs.existsSync(tapovanPath)) {
  let content = fs.readFileSync(tapovanPath, 'utf8');

  // Replace media query wrapper overrides
  const target1 = /\.product-visual-area\s*\{\s*position:\s*relative;\s*top:\s*0;\s*\}\s*\.main-image-wrapper\s*\{\s*padding:\s*20px;\s*\}\s*\.product-main-img\s*\{\s*height:\s*350px;\s*\}/g;
  const replacement1 = `.product-visual-area { position: relative; top: 0; width: 100%; display: flex; flex-direction: column; align-items: center; }
          .main-image-wrapper { width: 100%; max-width: 480px; margin: 0 auto 15px; aspect-ratio: 1/1; }
          .product-main-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }`;
  
  content = content.replace(target1, replacement1);

  // Center thumbnail gallery on mobile
  const target2 = /\.thumbnail-gallery\s*\{\s*justify-content:\s*flex-start;\s*overflow-x:\s*auto;\s*padding:\s*10px\s*0;\s*scrollbar-width:\s*none;\s*\}/g;
  const replacement2 = `.thumbnail-gallery { 
              justify-content: center; 
              width: 100%;
              max-width: 480px;
              margin: 0 auto;
              overflow-x: auto; 
              padding: 10px 0;
              scrollbar-width: none;
            }`;

  content = content.replace(target2, replacement2);

  fs.writeFileSync(tapovanPath, content, 'utf8');
  console.log('Successfully updated TapovanPremiumTea.jsx centering.');
} else {
  console.error('Tapovan file not found.');
}
