# Puck Pals Website 🏒

A modern, responsive hockey podcast website built with HTML, CSS, and JavaScript. Features a beautiful pastel green design, rotating hockey backgrounds, and mobile-friendly navigation.

## 🚀 Live Website
**Domain:** [pvckpals.com](https://pvckpals.com)

## 📁 Repository Structure
```
puckpals-website/
├── index.html          # Main website file
├── README.md          # This file
├── manifest.json      # Web app manifest for PWA features
├── .gitignore         # Git ignore file
└── assets/            # Asset folder for images and icons
    ├── images/
    │   └── logo.png   # Your logo file (recommended: PNG, 200x50px or similar)
    └── favicon/
        ├── favicon.ico           # 16x16 and 32x32 ICO file
        ├── favicon-32x32.png     # 32x32 PNG
        ├── favicon-16x16.png     # 16x16 PNG  
        ├── apple-touch-icon.png  # 180x180 PNG for iOS
        └── android-chrome-192x192.png # 192x192 PNG for Android
```

## 🎨 Adding Your Logo and Favicon

### Logo Setup
1. **Prepare your logo:**
   - Format: PNG (transparent background recommended)
   - Dimensions: ~200px wide x 50px tall (adjust as needed)
   - Name it: `logo.png`

2. **Upload your logo:**
   - Create folder: `assets/images/` in your repository
   - Upload your `logo.png` file

3. **Enable the logo in code:**
   In `index.html`, find this line (around line 485):
   ```html
   <!-- <img src="assets/images/logo.png" alt="Puck Pals Logo"> -->
   ```
   Uncomment it by removing the `<!-- -->`:
   ```html
   <img src="assets/images/logo.png" alt="Puck Pals Logo">
   ```

### Favicon Setup
1. **Create favicon files:** Use a tool like [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)

2. **Upload favicon files:**
   - Create folder: `assets/favicon/` in your repository
   - Upload all favicon files:
     - `favicon.ico` (16x16, 32x32)
     - `favicon-16x16.png`
     - `favicon-32x32.png`
     - `apple-touch-icon.png` (180x180)
     - `android-chrome-192x192.png` (192x192)

3. **Favicon files are already linked** in the HTML - just upload the files!

### Quick Favicon Generator
1. Go to [Favicon.io](https://favicon.io/)
2. Upload your logo or create a text-based favicon
3. Download the generated package
4. Upload the PNG and ICO files to `assets/favicon/`

## 🌐 Deployment Instructions

### Quick Setup with Cloudflare Pages + GitHub

1. **Delete existing content** (if any) from your repository
2. **Upload the new files:**
   - Upload `index.html` to the root of your repository
   - Upload this `README.md` file

3. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your `puckpals-website` repository
   - Configure build settings:
     - **Build command:** Leave empty
     - **Build output directory:** `/`
   - Click "Save and Deploy"

4. **Connect your custom domain:**
   - In Cloudflare Pages dashboard, go to your project
   - Click "Custom domains" tab
   - Add `pvckpals.com` and `www.pvckpals.com`
   - Follow the DNS setup instructions

### Alternative: Direct Upload
If you prefer not to use Git:
1. Create a zip file with `index.html`
2. Go to Cloudflare Pages → "Upload assets"
3. Drop your zip file and deploy

## 🎨 Website Features

- **Responsive Design:** Works on all devices
- **Rotating Backgrounds:** Hockey images that change every 8 seconds
- **Smooth Animations:** Professional hover effects and transitions
- **Modern Navigation:** Fixed header with smooth scrolling
- **Social Media Integration:** Facebook, YouTube, and Spotify links
- **Episode Management:** Easy-to-update episode cards
- **Contact Form Ready:** Structured for easy contact integration

## 📝 Content Management Guide

### Adding New Episodes

To add a new episode, find this section in `index.html` (around line 540):

```html
<div class="episodes-grid">
    <!-- Add new episode card here -->
    <div class="episode-card floating">
        <div class="episode-number">EPISODE 04</div>
        <h3 class="episode-title">Your New Episode Title</h3>
        <p class="episode-description">Description of your episode content...</p>
        <button class="play-button">
            <i class="fas fa-play"></i>
            Play Episode
        </button>
    </div>
</div>
```

### Updating Social Media Links

Find these lines in `index.html` (around line 485) and replace `#` with your actual URLs:

```html
<div class="social-icons">
    <a href="https://facebook.com/yourpage" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://youtube.com/yourchannel" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="https://open.spotify.com/show/yourshow" aria-label="Spotify">
        <i class="fab fa-spotify"></i>
    </a>
</div>
```

### Changing Contact Information

Update these sections in `index.html`:

**Email Address** (around line 600):
```html
<a href="mailto:your-email@pvckpals.com">
    <i class="fas fa-envelope"></i>
    your-email@pvckpals.com
</a>
```

**Phone Number** (around line 605):
```html
<a href="tel:+1234567890">
    <i class="fas fa-phone"></i>
    (123) 456-7890
</a>
```

### Updating About Section

Find the about section (around line 580) and modify the content:

```html
<p style="font-size: 1.2rem; color: var(--shadow-green); line-height: 1.8; margin-bottom: 2rem;">
    Your about text here...
</p>
```

### Customizing Colors

All colors are defined as CSS variables at the top of the file. To change the color scheme, modify these values (around line 10):

```css
:root {
    --ice-mint: #E8F5F3;        /* Light background */
    --soft-green: #C2E9E0;      /* Soft accent */
    --sage-green: #9DD9C8;      /* Medium green */
    --forest-mist: #7BC4A8;     /* Primary green */
    --deep-ice: #5FA88C;        /* Dark green */
    --shadow-green: #4A8B73;    /* Darkest green */
    --text-dark: #1A3B35;       /* Dark text */
    --text-light: #F8FDFC;      /* Light text */
    --accent-blue: #A8D5E2;     /* Blue accent */
    --warm-white: #FEFFFE;      /* White */
}
```

## 🔧 Easy Updates Workflow

1. **Make changes** to `index.html` locally
2. **Test changes** by opening the file in your browser
3. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```
4. **Automatic deployment:** Cloudflare Pages will automatically rebuild and deploy your changes

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Hamburger menu for mobile navigation
- Touch-friendly button sizes
- Optimized typography scaling
- Mobile-first CSS approach

## 🎵 Audio Integration

The play buttons are ready for podcast integration. To connect to your podcast host:

1. **Spotify:** Update the Spotify links to your show
2. **Custom Player:** Add your podcast RSS feed
3. **Third-party Players:** Embed players like Anchor, Buzzsprout, etc.

## 🔍 SEO Ready

The website includes:
- Semantic HTML structure
- Meta tags ready for customization
- Social media meta tags
- Accessible navigation
- Fast loading times

## 📱 Progressive Web App (PWA) Features

Your website includes PWA capabilities:
- **Add to Home Screen:** Users can install your site as an app
- **Offline Support:** Basic caching for better performance  
- **App-like Experience:** Full-screen mode on mobile
- **Custom App Icon:** Uses your favicon as the app icon

The `manifest.json` file enables these features automatically.

## 🖼️ Image Optimization Tips

**Logo Best Practices:**
- Use PNG format with transparent background
- Keep file size under 50KB for fast loading
- Test on both light and dark backgrounds
- Consider creating a simplified version for small screens

**Favicon Best Practices:**
- Start with a square design (512x512px)
- Keep it simple - details get lost at small sizes
- Use your brand colors
- Test how it looks in browser tabs

## 🆘 Troubleshooting

**Website not updating?**
- Check your GitHub repository has the latest files
- Verify Cloudflare Pages is connected to the correct repository
- Check the build logs in Cloudflare Pages dashboard

**Custom domain not working?**
- Verify DNS settings point to Cloudflare
- Check SSL/TLS encryption settings
- Allow 24-48 hours for DNS propagation

**Mobile menu not working?**
- Ensure JavaScript is enabled
- Check for any console errors
- Verify the mobile menu code wasn't accidentally modified

## 📧 Support

For technical issues or questions about updating the website:
- Check this README first
- Review the HTML comments in the code
- Test changes locally before deploying

## 🏒 Ready to Go!

Your Puck Pals website is ready for:
- Podcast episodes
- Social media integration
- Contact form submissions
- Custom domain setup
- Easy content updates

**Next Steps:**
1. Delete old repository content
2. Upload these new files
3. Deploy to Cloudflare Pages
4. Connect your domain
5. Update social media links
6. Add your first episodes!

---

*Built with modern web standards and optimized for performance, accessibility, and search engines.*