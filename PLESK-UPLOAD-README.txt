╔══════════════════════════════════════════════════════════════════════════════╗
║                    PLESK UPLOAD - READY FOR DEPLOYMENT                       ║
║                          Updated: January 5, 2026                            ║
╚══════════════════════════════════════════════════════════════════════════════╝

✅ PRODUCTION BUILD COMPLETED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 TOTAL SIZE: ~11 MB (Optimized for web)

📁 FOLDER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PLESK-UPLOAD/
├── 📄 index.html                          [Entry Point - React SPA]
├── 📄 .htaccess                           [Apache Config - URL Rewriting]
├── 📄 robots.txt                          [SEO - Search Engine Directives]
├── 📄 sitemap.xml                         [SEO - Site Structure Map]
├── 📄 logo.png                            [Brand Logo - 83KB]
├── 📄 favicon.svg                         [Site Icon - 243B]
├── 📄 Marketing_Company_Hero_Video...mp4  [Hero Video - 5.8MB]
│
├── 📁 assets/                             [Compiled Production Files]
│   ├── index---bGG45O.js                  [React App Bundle - 498KB]
│   └── index-sAsLn19b.css                 [Styles Bundle - 57KB]
│
├── 📁 images/                             [Website Images - Organized]
│   ├── about/                             [About Page Images]
│   ├── portfolio/                         [Portfolio Categories]
│   │   ├── cannes/                        [5 images - Cannes projects]
│   │   ├── celebrity/                     [4 images - Celebrity work]
│   │   ├── commercial/                    [9 images - Commercial projects]
│   │   └── jewelry/                       [12 images - Jewelry campaigns]
│   ├── services/                          [Services Section Images]
│   ├── stars/                             [Star Icons/Graphics]
│   ├── team/                              [Team Members Photos]
│   └── why/                               [Why PR Sparkz Section]
│
└── 📁 videos/                             [Empty - Ready for videos]


🔧 TECHNICAL DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Framework:     React 18 (Single Page Application)
✅ Build Tool:    Vite 7.3.0
✅ Routing:       React Router DOM (Client-side routing)
✅ Styling:       Tailwind CSS (Compiled & Minified)
✅ Animations:    Framer Motion
✅ Smooth Scroll: Lenis
✅ Fonts:         Google Fonts (Montserrat)


📄 KEY FILES EXPLAINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

index.html
──────────
• Main entry point - MUST be in httpdocs/ root
• Contains preloaded fonts (Montserrat)
• References compiled assets in /assets/ folder
• Includes SEO meta tags

.htaccess
─────────
• Enables React Router (rewrites all routes to index.html)
• Forces all non-file requests to serve index.html
• Enables GZIP compression for faster loading
• Sets browser caching headers (1 year for images/videos)
• Security headers (X-Content-Type-Options, X-Frame-Options)
• Prevents directory browsing

assets/index---bGG45O.js (498KB)
────────────────────────────────
• Complete React application code (minified)
• Includes: React, React Router, Framer Motion, Three.js
• All component logic and interactivity
• Production-optimized and tree-shaken

assets/index-sAsLn19b.css (57KB)
────────────────────────────────
• All Tailwind CSS styles (compiled & minified)
• Custom animations and transitions
• Responsive breakpoints
• Production-optimized (unused CSS removed)

robots.txt
──────────
• Allows all search engines to crawl
• Points to sitemap.xml

sitemap.xml
───────────
• Lists all 4 pages: Home, About, Portfolio, Team
• Helps Google/Bing index your site properly
• Updated with current date (2026-01-05)


🌐 WEBSITE PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Route: /
──────────────────────────────────────────────
Components:
  • Hero Section (with video background)
  • Services Showcase
  • Why PR Sparkz
  • Testimonials
  • Contact Form

Route: /about
──────────────────────────────────────────────
Component:
  • About Us Page (company info, mission, vision)

Route: /portfolio
──────────────────────────────────────────────
Component:
  • Portfolio Gallery
  • Categories: Cannes, Celebrity, Commercial, Jewelry
  • 30+ project images

Route: /team
──────────────────────────────────────────────
Component:
  • Team Members Showcase


🚀 PLESK DEPLOYMENT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Access Plesk Panel
   └─ Login → Websites & Domains → Select your domain

2. Navigate to File Manager
   └─ Go to: httpdocs/ (or public_html/)

3. Clear Old Files
   └─ Delete everything in httpdocs/ (backup first if needed)

4. Upload Files
   METHOD A: Direct Upload
   ─────────────────────
   • Click "Upload" button
   • Select ALL files from PLESK-UPLOAD/ folder
   • Upload (may take 1-2 minutes)

   METHOD B: ZIP Upload (Faster)
   ─────────────────────
   • Zip the PLESK-UPLOAD/ folder contents
   • Upload ZIP to httpdocs/
   • Right-click ZIP → Extract
   • Delete ZIP file after extraction

5. Verify Structure
   └─ Ensure index.html is in ROOT of httpdocs/
   └─ Folder structure matches above

6. Set Permissions
   ├─ Files: 644 (read/write owner, read others)
   └─ Folders: 755 (rwx owner, rx others)

7. Test Website
   └─ Open: https://yourdomain.com
   └─ Check all pages: /, /about, /portfolio, /team
   └─ Test navigation and responsive design


✅ WHAT'S INCLUDED (PRODUCTION READY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Fully compiled and minified React application
✓ Optimized CSS (Tailwind - 57KB from ~3MB dev size)
✓ Optimized JavaScript (498KB minified + gzipped to 140KB)
✓ All images properly organized
✓ SEO files (robots.txt, sitemap.xml)
✓ Browser caching configured
✓ GZIP compression enabled
✓ React Router configuration (.htaccess)
✓ Security headers
✓ Mobile responsive
✓ Fast loading times


❌ REMOVED (Unnecessary Files)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Test videos (sumit.mp4, sumit1.mp4, WhatsApp videos)
✗ Duplicate marketing videos (3 copies removed)
✗ Duplicate images (PR-FD.jpeg, extra logos)
✗ System files (.DS_Store)
✗ README.md files
✗ Development dependencies
✗ Source code files (.jsx files)


⚡ PERFORMANCE OPTIMIZATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Code Splitting: Single optimized bundle
✓ Tree Shaking: Removed unused code
✓ Minification: JS and CSS compressed
✓ GZIP Compression: ~70% size reduction when served
✓ Browser Caching: Assets cached for 1 year
✓ Font Preloading: Faster text rendering
✓ Lazy Loading: Images load as needed


🔒 SECURITY FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ X-Content-Type-Options: nosniff
✓ X-Frame-Options: SAMEORIGIN (prevents clickjacking)
✓ X-XSS-Protection: Enabled
✓ Directory browsing: Disabled
✓ HTTPS redirect: Commented (uncomment when SSL installed)


🔧 TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: "404 Not Found" when refreshing pages
Solution: ✓ Ensure .htaccess is uploaded and mod_rewrite is enabled

Problem: Blank white page
Solution: ✓ Check browser console (F12) for errors
         ✓ Verify index.html is in httpdocs/ root
         ✓ Check file permissions (644)

Problem: CSS/styles not loading
Solution: ✓ Check assets/ folder is uploaded
         ✓ Verify file paths in index.html
         ✓ Clear browser cache (Ctrl+Shift+R)

Problem: Images not showing
Solution: ✓ Check images/ folder permissions (755)
         ✓ Verify image file permissions (644)

Problem: Video not playing
Solution: ✓ Check MIME type for .mp4 in Plesk
         ✓ Verify file permissions
         ✓ Test in different browsers


📞 POST-DEPLOYMENT CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Homepage loads (/)
□ About page works (/about)
□ Portfolio page works (/portfolio)
□ Team page works (/team)
□ Navigation menu functions
□ Images load properly
□ Hero video plays
□ Contact form appears
□ Mobile responsive (test on phone)
□ No console errors (F12)
□ Page refresh works on all routes
□ SSL certificate installed (https://)
□ Sitemap accessible (/sitemap.xml)
□ Robots.txt accessible (/robots.txt)


📊 EXPECTED PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial Load: ~2-3 seconds (depending on server)
Page Navigation: <200ms (client-side routing)
Lighthouse Score: 85+ (Performance)
Mobile Friendly: ✓ Yes
SEO Ready: ✓ Yes


═══════════════════════════════════════════════════════════════════════════════

                    🚀 READY FOR PRODUCTION DEPLOYMENT 🚀

    Upload everything from this folder to httpdocs/ in your Plesk panel

═══════════════════════════════════════════════════════════════════════════════

Last Updated: January 5, 2026
Build Tool: Vite 7.3.0
React Version: 18.2.0
