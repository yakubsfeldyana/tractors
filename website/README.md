# Mullally Tractor Sales Website

## Testing Before Deployment

### Method 1: Python Test Server (Recommended)
This method simulates how the site will behave on a real web server like Cloudflare Pages.

1. Open a terminal in the website directory
2. Run the test server:
   ```bash
   python test_server.py
   ```
3. Open your browser and go to: http://localhost:8000/
4. Test all pages and ensure:
   - Navigation appears correctly (white background, not green)
   - Hamburger menu works on mobile view
   - All links work properly
   - No console errors appear

### Method 2: Direct File Access
Simply double-click on `index.html` to open in your browser. Note that this method may not perfectly simulate server behavior.

## Updating Cache Busting

Before deploying updates to Cloudflare, run the cache busting script to ensure browsers load the latest CSS and JavaScript:

```bash
python update_cache_bust.py
```

This will update all HTML files with new version numbers for CSS and JS files.

## Deployment to Cloudflare Pages

1. Test the site locally using the test server
2. Run the cache busting script
3. Upload all files in the website directory to Cloudflare Pages
4. Clear Cloudflare's cache if needed:
   - Go to your Cloudflare dashboard
   - Navigate to Caching > Configuration
   - Click "Purge Everything" or purge specific files

## Troubleshooting

### Site shows old green design on Cloudflare
1. Run `update_cache_bust.py` to update version numbers
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Purge Cloudflare cache

### Hamburger menu not working
- Ensure JavaScript is enabled in the browser
- Check browser console for errors (F12 > Console)
- Verify nav_loader.js is loading correctly

### Navigation not appearing
- The site will automatically use embedded navigation if navigation.html fails to load
- Check browser console for any fetch errors

## File Structure

- `index.html` - Homepage
- `about.html` - About page
- `john-deere-*.html` - John Deere product pages
- `chapman-*.html` - Chapman product pages
- `styles.css` - Main stylesheet
- `nav_loader.js` - Navigation loading script
- `navigation.html` - Navigation template (optional, fallback embedded in JS)
- `images/` - Product images
- `test_server.py` - Local test server
- `update_cache_bust.py` - Cache busting utility
