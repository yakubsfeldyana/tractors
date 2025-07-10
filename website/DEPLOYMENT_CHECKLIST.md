# Cloudflare Pages Deployment Checklist

## Pre-Deployment Steps

- [ ] **Test locally with the test server**
  ```bash
  python test_server.py
  ```
  Visit http://localhost:8000/ and verify:
  - White header background (not green)
  - Navigation links are properly styled
  - Hamburger menu appears and works on mobile view
  - No large vertical spacing between navigation items
  - All pages load correctly

- [ ] **Update cache busting versions**
  ```bash
  python update_cache_bust.py
  ```
  This ensures browsers will load the latest CSS and JavaScript files

- [ ] **Test mobile responsiveness**
  - Open browser developer tools (F12)
  - Toggle device toolbar to test mobile view
  - Verify hamburger menu appears and functions

## Files to Deploy

Upload the entire `website` directory contents to Cloudflare Pages, including:
- All `.html` files
- `styles.css`
- `nav_loader.js`
- `navigation.html`
- `images/` directory and all its contents

## Post-Deployment Steps

1. **Clear Cloudflare Cache**
   - Log into Cloudflare dashboard
   - Go to Caching > Configuration
   - Click "Purge Everything"

2. **Test the live site**
   - Visit your Cloudflare Pages URL
   - Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
   - Test on multiple browsers if possible
   - Test on mobile devices

3. **If issues persist:**
   - Check browser console for errors (F12 > Console)
   - Verify all files uploaded correctly
   - Wait 5-10 minutes for cache to fully clear
   - Try incognito/private browsing mode

## What Was Fixed

1. **JavaScript Loading**: Improved navigation loader to ensure hamburger menu function is always available
2. **Cache Busting**: Added version parameters to CSS and JS files to force fresh loads
3. **Fallback Navigation**: Navigation now has embedded fallback that works regardless of server configuration
4. **Path Issues**: Fixed potential issues with navigation.html loading on different servers

## Testing Tools Provided

- `test_server.py` - Simulates web server environment locally
- `update_cache_bust.py` - Updates version numbers to bypass cache
- `README.md` - Detailed documentation for future reference
