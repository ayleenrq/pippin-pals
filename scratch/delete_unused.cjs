const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');
const assetsDir = path.join(srcDir, 'assets', 'branding');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

function getAllCodeContent(dirPath) {
  let content = '';
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      content += getAllCodeContent(fullPath);
    } else if (file.match(/\.(js|jsx|css|html|json)$/)) {
      content += fs.readFileSync(fullPath, 'utf8');
    }
  });

  return content;
}

const assets = getAllFiles(assetsDir);
const codeContent = getAllCodeContent(srcDir);

console.log('Total assets checked:', assets.length);

let deletedCount = 0;
let deletedSize = 0;

assets.forEach(assetPath => {
  const filename = path.basename(assetPath);
  if (!codeContent.includes(filename)) {
    const stats = fs.statSync(assetPath);
    deletedSize += stats.size;
    deletedCount++;
    console.log('Deleting unused asset:', assetPath, `(${Math.round(stats.size/1024)} KB)`);
    fs.unlinkSync(assetPath);
  }
});

console.log('-----------------------------------');
console.log('Deleted', deletedCount, 'unused files.');
console.log('Space saved:', Math.round(deletedSize / (1024 * 1024) * 100) / 100, 'MB');
