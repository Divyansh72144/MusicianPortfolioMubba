const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './src/images';
const heroImages = [
  'mubbaHome.jpg',
  'MubbaAbout.jpg',
  'MubbaGear.jpg',
  'mubbaTour.jpg'
];

async function optimizeImages() {
  console.log('🖼️  Optimizing hero images...\n');

  for (const imageName of heroImages) {
    const inputPath = path.join(imagesDir, imageName);
    const outputJpg = path.join(imagesDir, imageName.replace('.jpg', '_optimized.jpg'));
    const outputWebP = path.join(imagesDir, imageName.replace('.jpg', '.webp'));

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);
      console.log(`Processing ${imageName} (${originalSize}MB)...`);

      // Get image metadata
      const metadata = await sharp(inputPath).metadata();

      // Resize if wider than 1920px (full HD)
      const resizeWidth = metadata.width > 1920 ? 1920 : null;

      // Optimize JPEG (quality 80, resize if needed)
      await sharp(inputPath)
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputJpg);

      // Create WebP version (quality 75, smaller file size)
      await sharp(inputPath)
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputWebP);

      const jpgStats = fs.statSync(outputJpg);
      const webpStats = fs.statSync(outputWebP);

      console.log(`  ✓ JPEG: ${(jpgStats.size / 1024 / 1024).toFixed(2)}MB (-${((1 - jpgStats.size / stats.size) * 100).toFixed(0)}%)`);
      console.log(`  ✓ WebP: ${(webpStats.size / 1024 / 1024).toFixed(2)}MB (-${((1 - webpStats.size / stats.size) * 100).toFixed(0)}%)`);
      console.log('');

    } catch (error) {
      console.error(`  ✗ Error processing ${imageName}:`, error.message);
    }
  }

  console.log('✨ Done! Original images preserved.');
  console.log('📝 Update your imports to use the new optimized files:');
  console.log("   - Change mubbaHome.jpg -> mubbaHome_optimized.jpg (or .webp)");
  console.log('   - Do the same for other hero images');
}

optimizeImages().catch(console.error);
