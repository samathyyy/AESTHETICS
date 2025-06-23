// Convert all images in src/assets/images to WebP
// Usage: npm run webp:convert

import imagemin from 'imagemin';
import webp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  await imagemin(['src/assets/images/*.{jpg,png,jpeg}'], {
    destination: 'src/assets/images/',
    plugins: [webp({ quality: 80 })]
  });
  console.log('Images converted to WebP!');
})();
