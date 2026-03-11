const fs = require('fs');
const path = require('path');

const replacements = {
  // Strings with quotes (often in objects)
  '"#00B2A9"': '"var(--yellow)"',
  '"#7B5CF5"': '"var(--blue)"',
  '"#FF6640"': '"var(--red)"',
  '"#060D1B"': '"var(--black)"',
  '"#475569"': '"rgba(0,0,0,0.6)"',
  '"#94A8C4"': '"rgba(255,255,255,0.6)"',
  '"#6B80A0"': '"rgba(0,0,0,0.6)"',
  '"#F4F6FA"': '"var(--grey)"',
  '"#F8FAFC"': '"var(--grey)"',
  '"#E5EAF0"': '"rgba(0,0,0,0.08)"',
  '"#FF5F57"': '"var(--red)"',
  '"#FFBD2E"': '"var(--yellow)"',
  '"#28C840"': '"var(--green)"',
  
  // Unquoted hex
  '#00B2A9': 'var(--yellow)',
  '#7B5CF5': 'var(--blue)',
  '#FF6640': 'var(--red)',
  '#060D1B': 'var(--black)',
  '#475569': 'rgba(0,0,0,0.6)',
  '#94A8C4': 'rgba(255,255,255,0.6)',
  '#6B80A0': 'rgba(0,0,0,0.6)',
  '#F4F6FA': 'var(--grey)',
  '#F8FAFC': 'var(--grey)',
  '#E5EAF0': 'rgba(0,0,0,0.08)',
  '#FF5F57': 'var(--red)',
  '#FFBD2E': 'var(--yellow)',
  '#28C840': 'var(--green)',

  // RGBA strings
  'rgba(0,178,169,0.1)': 'rgba(255,190,60,0.1)',
  'rgba(0,178,169,0.35)': 'rgba(255,190,60,0.35)',
  'rgba(0,178,169,0.3)': 'rgba(255,190,60,0.3)',
  'rgba(123,92,245,0.3)': 'rgba(58,167,234,0.3)',
  'rgba(255,102,64,0.1)': 'rgba(209,61,66,0.1)',
  'rgba(255,102,64,0.2)': 'rgba(209,61,66,0.2)',
  'rgba(255,102,64,0.08)': 'rgba(209,61,66,0.08)',
  'rgba(255,102,64,0.22)': 'rgba(209,61,66,0.22)',
  
  // Specific Gradients
  'linear-gradient(135deg, #00B2A9, #007A75)': 'var(--yellow)',
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
