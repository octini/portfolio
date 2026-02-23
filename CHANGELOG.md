# Changelog

All notable changes to this portfolio site will be documented in this file.

## [2025-02-16] - Major Site Update

### Fixed
- Fixed typo in Skills > Containerization: "Familiar a number of" → "Familiar with a number of"
- Fixed typo in Skills > Detail-Oriented: "Peristent" → "Persistent"
- Fixed typo in About section: "Dreprecated" → "Deprecated"
- Fixed typo in Skills > Site Reliability: "implements solution" → "implements solutions"
- Fixed malformed shortcode syntax in markdown-sample posts
- Fixed duplicate word "supports supports" → "supports"
- Fixed author image path references (moved from /assets/ to /static/)

### Removed
- **BREAKING**: Removed Bengali (multilingual) language support
  - Deleted all Bengali content files (*.bn.md)
  - Removed Bengali data directory (data/bn/)
  - Simplified hugo.yaml language configuration
- Removed 12 .DS_Store system files
- Deleted orphaned banner images (6 files, ~250KB saved)
- Cleaned up ~100MB of old build artifacts from public/
- Disabled empty footer disclaimer

### Changed
- Updated Hugo theme from v4.8.0 to v4.13.0
- Updated Cloudflare Pages HUGO_VERSION environment variable to 0.154.5
- Converted background.png (1.3MB) → background.webp (570KB) - saved ~57%
- Updated Foundry VTT URL from incorrect "https://www.foundrryvtt.com" to "https://foundryvtt.com/"
- Added missing hero declarations to introduction posts
- Added typeit npm dependency (required by theme)
- Updated .gitignore to exclude .DS_Store files

### Site Optimization
- **Total size reduction**: ~100MB (public folder: 120MB → 21MB)
- **Build time**: 714ms (faster due to optimizations)
- **Pages**: 71 English pages (removed 48 Bengali pages)
- **Images**: Optimized and organized in static/images/

### Technical Details
- Hugo version: 0.154.5+extended
- Theme: hugo-toha/toha/v4 v4.13.0
- Build status: ✅ Passing on Cloudflare Pages
- Deployment: Automated via GitHub → Cloudflare Pages

---

## Previous Releases

### [2025-02-27] - Initial Site Setup
- Initial deployment of Toha-based portfolio
- Basic site configuration
- Initial content population

### [2025-03-04] - Resume Update  
- Updated resume PDF

## Maintenance Notes

### Hugo Version Compatibility
- Current: Hugo 0.154.5+extended
- Theme minimum: Hugo 0.146.0+extended
- Cloudflare Pages: Uses HUGO_VERSION environment variable

### Before Future Theme Updates
Check the theme's minimum Hugo version requirements and update Cloudflare's HUGO_VERSION environment variable if needed.

### Content Update Workflow
1. Edit files in `~/webdev/portfolio/`
2. Test locally: `hugo server -D`
3. Commit changes: `git add -A && git commit -m "description"`
4. Push to deploy: `git push origin main`
5. Cloudflare Pages auto-deploys within 1-2 minutes
