const fs = require('fs');
const path = require('path');

const canzoniDir = path.join(__dirname, '../public/canzoni');
const files = fs.readdirSync(canzoniDir).filter(f => f.endsWith('.mp3'));

const canzoni = files.map(file => {
  const nome = file.replace('.mp3', '');
  return {
    nome,
    file
  };
});

console.log(JSON.stringify(canzoni, null, 2));
