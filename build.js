// Enhanced build script for Azure Static Web Apps
// This script creates a build directory with all necessary files

const fs = require('fs');
const path = require('path');

// Configuration
const buildDir = './build';
const filesToCopy = [
  'index.html',
  'package.json',
  'staticwebapp.config.json',
  'src',
  'public'
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

// Logging functions
function logInfo(message) {
  console.log(`${colors.blue}ℹ${colors.reset} ${message}`);
}

function logSuccess(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠${colors.reset} ${message}`);
}

function logError(message) {
  console.log(`${colors.red}✗${colors.reset} ${message}`);
}

// Clean build directory
function cleanBuildDirectory() {
  if (fs.existsSync(buildDir)) {
    logInfo('Cleaning existing build directory...');
    fs.rmSync(buildDir, { recursive: true, force: true });
    logSuccess('Build directory cleaned');
  }
}

// Create build directory
function createBuildDirectory() {
  try {
    fs.mkdirSync(buildDir, { recursive: true });
    logSuccess('Build directory created');
  } catch (error) {
    logError(`Failed to create build directory: ${error.message}`);
    process.exit(1);
  }
}

// Enhanced file copying with error handling
function copyRecursiveSync(src, dest) {
  try {
    const exists = fs.existsSync(src);
    if (!exists) {
      logWarning(`Source does not exist: ${src}`);
      return false;
    }

    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const items = fs.readdirSync(src);
      let successCount = 0;
      
      items.forEach(childItemName => {
        const srcPath = path.join(src, childItemName);
        const destPath = path.join(dest, childItemName);
        if (copyRecursiveSync(srcPath, destPath)) {
          successCount++;
        }
      });
      
      logSuccess(`Copied directory: ${src} (${successCount}/${items.length} items)`);
      return successCount > 0;
    } else {
      fs.copyFileSync(src, dest);
      logSuccess(`Copied file: ${src}`);
      return true;
    }
  } catch (error) {
    logError(`Failed to copy ${src}: ${error.message}`);
    return false;
  }
}

// Copy all necessary files
function copyFiles() {
  logInfo('Starting file copy process...');
  let successCount = 0;
  
  filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
      if (copyRecursiveSync(file, path.join(buildDir, file))) {
        successCount++;
      }
    } else {
      logWarning(`File/directory not found: ${file}`);
    }
  });
  
  logSuccess(`File copy completed: ${successCount}/${filesToCopy.length} items processed`);
}

// Copy hero image to root for proper serving
function copyHeroImage() {
  // Try to find any image file in the public folder
  const publicPath = 'public';
  let heroImagePath = null;
  const destPath = path.join(buildDir, 'hero-image.jpg');
  
  if (fs.existsSync(publicPath)) {
    const files = fs.readdirSync(publicPath);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif'].includes(ext);
    });
    
    if (imageFiles.length > 0) {
      heroImagePath = path.join(publicPath, imageFiles[0]);
    }
  }
  
  if (heroImagePath && fs.existsSync(heroImagePath)) {
    try {
      fs.copyFileSync(heroImagePath, destPath);
      logSuccess('Hero image copied to build root directory');
      return true;
    } catch (error) {
      logError(`Failed to copy hero image: ${error.message}`);
      return false;
    }
  } else {
    logWarning('No image file found in public folder');
    return false;
  }
}

// Validate build output
function validateBuild() {
  logInfo('Validating build output...');
  const requiredFiles = ['index.html', 'src/App.js', 'staticwebapp.config.json'];
  let validCount = 0;
  
  requiredFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    if (fs.existsSync(filePath)) {
      validCount++;
      logSuccess(`✓ ${file} exists`);
    } else {
      logError(`✗ ${file} missing`);
    }
  });
  
  if (validCount === requiredFiles.length) {
    logSuccess('Build validation passed');
    return true;
  } else {
    logError('Build validation failed');
    return false;
  }
}

// Get build statistics
function getBuildStats() {
  const stats = {
    totalFiles: 0,
    totalSize: 0,
    directories: 0
  };
  
  function countFiles(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const itemStats = fs.statSync(itemPath);
      
      if (itemStats.isDirectory()) {
        stats.directories++;
        countFiles(itemPath);
      } else {
        stats.totalFiles++;
        stats.totalSize += itemStats.size;
      }
    });
  }
  
  countFiles(buildDir);
  return stats;
}

// Main build process
function main() {
  console.log(`${colors.bright}${colors.blue}🚀 Starting Roadrolls Build Process${colors.reset}\n`);
  
  try {
    // Step 1: Clean existing build
    cleanBuildDirectory();
    
    // Step 2: Create build directory
    createBuildDirectory();
    
    // Step 3: Copy files
    copyFiles();
    
    // Step 4: Copy hero image
    copyHeroImage();
    
    // Step 5: Validate build
    if (!validateBuild()) {
      process.exit(1);
    }
    
    // Step 6: Show build statistics
    const stats = getBuildStats();
    console.log(`\n${colors.bright}${colors.green}📊 Build Statistics:${colors.reset}`);
    console.log(`   Files: ${stats.totalFiles}`);
    console.log(`   Directories: ${stats.directories}`);
    console.log(`   Total Size: ${(stats.totalSize / 1024).toFixed(2)} KB`);
    
    console.log(`\n${colors.bright}${colors.green}✅ Build completed successfully!${colors.reset}`);
    console.log(`${colors.blue}📁 Build directory: ${path.resolve(buildDir)}${colors.reset}`);
    
  } catch (error) {
    logError(`Build process failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the build
main();
