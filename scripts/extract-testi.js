const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const testiDir = path.join(__dirname, '../testi');
const files = fs.readdirSync(testiDir).filter(f => f.endsWith('.doc'));

const results = [];

for (const file of files) {
  const filePath = path.join(testiDir, file);
  try {
    const output = execSync(`textutil -convert txt -stdout "${filePath}"`, { encoding: 'utf-8' });
    const lines = output.split('\n').filter(line => line.trim());
    if (lines.length > 0) {
      const title = lines[0].trim();
      const textLines = lines.slice(1);
      results.push({
        file,
        title,
        lines: textLines,
        lineCount: textLines.length
      });
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
}

console.log(JSON.stringify(results, null, 2));
