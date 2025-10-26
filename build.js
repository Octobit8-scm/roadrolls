// Simple build script for Azure Static Web Apps
// This script creates a build directory with all necessary files

const fs = require('fs');
const path = require('path');

// Create build directory
const buildDir = './build';
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy all files to build directory
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy all necessary files
const filesToCopy = [
  'index.html',
  'package.json',
  'staticwebapp.config.json',
  'src',
  'public'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    copyRecursiveSync(file, path.join(buildDir, file));
  }
});

// Copy hero image to root of build directory for proper serving
if (fs.existsSync('public/Home-hero-section.png')) {
  fs.copyFileSync('public/Home-hero-section.png', path.join(buildDir, 'Home-hero-section.png'));
  console.log('Hero image copied to build root directory.');
}

console.log('Build completed successfully!');
console.log('Files copied to build directory.');
