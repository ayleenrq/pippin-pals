const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');
const assetsDir = path.join(srcDir, 'assets', 'branding');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
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
    } else if (file.match(/\.(js|jsx|css|html)$/)) {
      content += fs.readFileSync(fullPath, 'utf8');
    }
  });

  return content;
}

const assets = getAllFiles(assetsDir);
const codeContent = getAllCodeContent(srcDir);

const unused = assets.filter(assetPath => {
  const filename = path.basename(assetPath);
  // Check if filename is mentioned in code
  return !codeContent.includes(filename);
});

console.log('Unused files count:', unused.length);
unused.forEach(f => console.log(f));
