import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFilePath = path.join(__dirname, '../src/data/products.json');
const outputDirPath = path.join(__dirname, '../public');
const outputFilePath = path.join(outputDirPath, 'google-merchant-feed.xml');

// Helper to escape XML
function escapeXml(unsafe) {
  if (unsafe === null || unsafe === undefined) return '';
  return unsafe.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

try {
  console.log('Reading products database...');
  const fileData = fs.readFileSync(productsFilePath, 'utf8');
  const db = JSON.parse(fileData);
  
  const { store, products } = db;
  const domain = store.domain.replace(/\/$/, ''); // strip trailing slash
  
  let xml = '<?xml version="1.0"?>\n';
  xml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
  xml += '  <channel>\n';
  xml += `    <title>${escapeXml(store.title)}</title>\n`;
  xml += `    <link>${escapeXml(domain)}</link>\n`;
  xml += `    <description>${escapeXml(store.description)}</description>\n`;
  
  for (const item of products) {
    // Resolve absolute URLs
    const productLink = item.link.startsWith('http') ? item.link : `${domain}${item.link}`;
    const imageLink = item.image_path.startsWith('http') ? item.image_path : `${domain}${item.image_path}`;
    
    xml += '    <item>\n';
    xml += `      <g:id>${escapeXml(item.id)}</g:id>\n`;
    xml += `      <g:title>${escapeXml(item.title)}</g:title>\n`;
    xml += `      <g:description>${escapeXml(item.description)}</g:description>\n`;
    xml += `      <g:link>${escapeXml(productLink)}</g:link>\n`;
    xml += `      <g:image_link>${escapeXml(imageLink)}</g:image_link>\n`;
    xml += `      <g:condition>${escapeXml(item.condition || 'new')}</g:condition>\n`;
    xml += `      <g:availability>${escapeXml(item.availability || 'in_stock')}</g:availability>\n`;
    xml += `      <g:price>${escapeXml(item.price)}</g:price>\n`;
    xml += `      <g:brand>${escapeXml(item.brand)}</g:brand>\n`;
    xml += `      <g:google_product_category>${escapeXml(item.google_product_category)}</g:google_product_category>\n`;
    xml += '    </item>\n';
  }
  
  xml += '  </channel>\n';
  xml += '</rss>\n';
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  
  fs.writeFileSync(outputFilePath, xml, 'utf8');
  console.log(`Successfully generated Google Merchant feed at: ${outputFilePath}`);
} catch (error) {
  console.error('Error generating Google Merchant feed:', error);
  process.exit(1);
}
