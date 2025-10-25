# Azure Static Web Apps Deployment Guide

## Overview
This guide explains how to deploy the Roadrolls travel platform to Azure Static Web Apps.

## Prerequisites
- Azure account
- GitHub repository with the project
- Azure Static Web Apps resource created

## Deployment Steps

### 1. Azure Static Web Apps Configuration
- **App Location**: `/` (root directory)
- **Output Location**: `build` (build directory)
- **API Location**: Not applicable (no API)

### 2. Build Process
The project uses a custom build script (`build.js`) that:
- Creates a `build` directory
- Copies all necessary files (HTML, CSS, JS, images)
- Preserves the static file structure

### 3. Required Files
- `staticwebapp.config.json` - Azure Static Web Apps configuration
- `build.js` - Custom build script
- `.github/workflows/azure-static-web-apps.yml` - GitHub Actions workflow

### 4. Environment Variables
Set the following secret in your GitHub repository:
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Your Azure Static Web Apps deployment token

### 5. Deployment Process
1. Push changes to the `master` branch
2. GitHub Actions will automatically trigger
3. The build process will run
4. Files will be deployed to Azure Static Web Apps

## Troubleshooting

### Common Issues

#### Build Folder Not Found
- **Error**: "The app build failed to produce artifact folder: 'build'"
- **Solution**: Ensure `build.js` script runs successfully and creates the build directory

#### Missing Files
- **Error**: 404 errors for static files
- **Solution**: Check `staticwebapp.config.json` routing configuration

#### Image Loading Issues
- **Error**: Images not displaying
- **Solution**: Verify image paths and ensure files are copied to build directory

### Build Script Details
The `build.js` script:
1. Creates a `build` directory
2. Copies all necessary files:
   - `index.html`
   - `package.json`
   - `staticwebapp.config.json`
   - `src/` directory
   - `public/` directory (if exists)

### Manual Build Test
To test the build process locally:
```bash
npm run build
ls -la build/
```

## Configuration Files

### staticwebapp.config.json
- Configures routing for SPA behavior
- Sets up MIME types for static files
- Adds security headers

### .github/workflows/azure-static-web-apps.yml
- GitHub Actions workflow for CI/CD
- Triggers on push to master branch
- Builds and deploys to Azure Static Web Apps

## Support
For deployment issues, check:
1. Azure Static Web Apps logs
2. GitHub Actions workflow logs
3. Build script output
4. File structure in build directory
