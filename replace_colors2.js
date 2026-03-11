const fs = require('fs');
const path = require('path');

const replacements = {
  // Fix broken gradients in Navbar and CTA
  'linear-gradient(135deg, var(--yellow), #007A75)': 'var(--yellow)',
  // Minor text/background colors
  '"#374151"': '"var(--black)"',
  '"#4A5568"': '"var(--black)"',
  '"#CBD5E1"': '"rgba(0,0,0,0.08)"',
  '"#006B66"': '"var(--green)"',
  '"#00D9CF"': '"var(--blue)"',
  '"#040A15"': '"var(--navy)"',
  '#040A15': 'var(--navy)',
  '#006B66': 'var(--green)',
  '#00D9CF': 'var(--blue)',
  // Muted texts
  '"#888"': '"rgba(0,0,0,0.6)"',
  '"#1A1A1A"': '"var(--black)"'
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
