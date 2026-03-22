const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/pages/Success369.tsx',
  'src/pages/Programs.tsx',
  'src/pages/Book.tsx',
  'src/pages/AboutUs.tsx',
  'src/components/FAQSection.tsx',
  'src/components/Footer.tsx',
  'src/components/GlobalCTA.tsx',
  'src/components/HeroSlider.tsx',
  'src/pages/TakeSession.tsx',
  'public/sitemap.xml'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/\/free-session/g, '/take-a-session');
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  }
});
