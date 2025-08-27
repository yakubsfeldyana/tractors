# Testing Procedures

## Pre-Development Testing Setup

### Environment Preparation
- [ ] Python 3.6+ installed and accessible
- [ ] Modern web browsers available (Chrome, Firefox, Safari, Edge)
- [ ] Text editor configured with proper syntax highlighting
- [ ] Git repository initialized and configured

### Local Server Setup
```bash
cd website/
python test_server.py
```
- Verify server starts on `http://localhost:8000/`
- Confirm all static files are served correctly
- Test server restart functionality

## Development Testing Workflow

### 1. Code Validation Testing

#### HTML Validation
- [ ] Use W3C Markup Validator or browser dev tools
- [ ] Check for proper DOCTYPE declaration
- [ ] Verify semantic HTML structure
- [ ] Ensure all tags are properly closed
- [ ] Validate accessibility attributes

#### CSS Validation
- [ ] Use W3C CSS Validator
- [ ] Check for syntax errors
- [ ] Verify browser compatibility
- [ ] Test CSS specificity conflicts
- [ ] Validate responsive breakpoints

#### JavaScript Testing
- [ ] Check browser console for errors
- [ ] Test all interactive functionality
- [ ] Verify event handlers work correctly
- [ ] Test error handling and edge cases
- [ ] Validate form submissions

### 2. Cross-Platform Testing

#### Server-Based Testing
```bash
# Start local server
python test_server.py
# Access: http://localhost:8000/
```

**Test Checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation menu functions properly
- [ ] All internal links work
- [ ] Images load and display correctly
- [ ] Forms submit successfully
- [ ] JavaScript functionality works
- [ ] CSS styles apply correctly

#### File-Based Testing
```bash
# Double-click index.html or open in browser
```

**Test Checklist:**
- [ ] Homepage opens in browser
- [ ] Navigation loads (fallback system)
- [ ] Relative links function
- [ ] Images display correctly
- [ ] Basic functionality works without server

### 3. Responsive Design Testing

#### Desktop Testing (1024px+)
- [ ] Full navigation menu displays horizontally
- [ ] Product grid shows multiple columns
- [ ] All content fits within max-width containers
- [ ] Images scale appropriately
- [ ] Typography is readable and well-spaced

#### Tablet Testing (768px - 1024px)
- [ ] Navigation remains horizontal or adapts appropriately
- [ ] Product grid adjusts to fewer columns
- [ ] Content remains readable and accessible
- [ ] Touch targets are appropriately sized
- [ ] Images scale correctly

#### Mobile Testing (320px - 768px)
- [ ] Hamburger menu appears and functions
- [ ] Navigation dropdown works correctly
- [ ] Single-column layout for product grid
- [ ] Text remains readable at smaller sizes
- [ ] Touch targets are finger-friendly (44px minimum)
- [ ] Forms are easy to use on mobile

#### Browser Resize Testing
- [ ] Gradually resize browser window
- [ ] Test breakpoint transitions
- [ ] Verify no horizontal scrolling
- [ ] Check for layout breaks or overlaps
- [ ] Ensure smooth responsive behavior

### 4. Navigation System Testing

#### Dynamic Navigation Loading
- [ ] Navigation loads from `navigation.html`
- [ ] Fallback navigation displays if file fails to load
- [ ] Current page highlighting works correctly
- [ ] All navigation links are functional

#### Hamburger Menu Testing
- [ ] Menu toggle button appears on mobile
- [ ] Menu opens and closes correctly
- [ ] All menu items are accessible
- [ ] Menu closes when link is clicked
- [ ] Touch interactions work smoothly

#### Cross-Page Navigation
- [ ] Test navigation from every page
- [ ] Verify current page highlighting updates
- [ ] Check for broken or missing links
- [ ] Test back button functionality

### 5. Form Testing

#### Quote Request Modal
- [ ] Modal opens when "Get Quote" button is clicked
- [ ] Modal closes with X button
- [ ] Modal closes when clicking outside
- [ ] Form fields accept appropriate input
- [ ] Required field validation works
- [ ] Form submission functions correctly
- [ ] Success/error messages display properly

#### Form Validation
- [ ] Required fields show validation messages
- [ ] Email format validation works
- [ ] Phone number format validation
- [ ] Text area character limits (if any)
- [ ] Form prevents submission with invalid data

### 6. Image and Media Testing

#### Image Loading
- [ ] All product images load correctly
- [ ] Images have appropriate alt text
- [ ] Images scale responsively
- [ ] No broken image links
- [ ] Images maintain aspect ratios

#### Video Content (if applicable)
- [ ] Embedded videos load correctly
- [ ] Video containers maintain aspect ratios
- [ ] Videos are accessible and have proper titles
- [ ] Video controls function properly

### 7. Performance Testing

#### Page Load Speed
- [ ] Homepage loads within 3 seconds
- [ ] Product pages load quickly
- [ ] Images are optimized for web
- [ ] CSS and JavaScript files load efficiently
- [ ] No unnecessary network requests

#### Mobile Performance
- [ ] Pages load quickly on mobile connections
- [ ] Touch interactions are responsive
- [ ] Scrolling is smooth
- [ ] No performance bottlenecks on mobile devices

### 8. Accessibility Testing

#### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and intuitive
- [ ] Focus indicators are visible
- [ ] Skip links work correctly (if implemented)

#### Screen Reader Testing
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Images have descriptive alt text
- [ ] Form labels are properly associated
- [ ] ARIA attributes are used correctly

#### Color Contrast
- [ ] Text meets WCAG AA contrast requirements
- [ ] Interactive elements have sufficient contrast
- [ ] Color is not the only way to convey information

### 9. Browser Compatibility Testing

#### Chrome Testing
- [ ] Latest version functionality
- [ ] Developer tools show no errors
- [ ] All features work as expected

#### Firefox Testing
- [ ] Cross-browser compatibility verified
- [ ] CSS renders correctly
- [ ] JavaScript functions properly

#### Safari Testing
- [ ] macOS Safari compatibility
- [ ] iOS Safari mobile testing
- [ ] WebKit-specific features work

#### Edge Testing
- [ ] Microsoft Edge compatibility
- [ ] Modern Edge features supported

### 10. Cache Busting Testing

#### Pre-Deployment Cache Testing
```bash
python update_cache_bust.py
```

**Verification Steps:**
- [ ] CSS file references updated with version numbers
- [ ] JavaScript file references updated
- [ ] All HTML files contain updated references
- [ ] Browser loads latest versions after cache bust

#### Post-Deployment Cache Testing
- [ ] Clear browser cache completely
- [ ] Test with hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- [ ] Verify latest styles and scripts load
- [ ] Test on different devices/browsers

## Deployment Testing

### Pre-Deployment Checklist
- [ ] All local tests pass
- [ ] Cache busting script executed
- [ ] No console errors in any browser
- [ ] Mobile responsiveness verified
- [ ] All forms function correctly
- [ ] Images optimized and loading properly

### Cloudflare Pages Testing
- [ ] Upload files to Cloudflare Pages
- [ ] Verify live site loads correctly
- [ ] Test all functionality on live site
- [ ] Check for any deployment-specific issues
- [ ] Clear Cloudflare cache if needed

### Post-Deployment Verification
- [ ] Homepage loads on live site
- [ ] Navigation works correctly
- [ ] All product pages accessible
- [ ] Contact forms submit successfully
- [ ] Mobile view functions properly
- [ ] No broken links or missing images

## Regression Testing

### After Code Changes
- [ ] Re-run all relevant tests
- [ ] Test affected functionality thoroughly
- [ ] Verify no existing features are broken
- [ ] Check for unintended side effects

### After Content Updates
- [ ] Verify new content displays correctly
- [ ] Test responsive behavior with new content
- [ ] Check for layout issues
- [ ] Validate links and references

## Bug Reporting and Tracking

### Bug Documentation
- **Browser**: Which browser and version
- **Device**: Desktop, tablet, or mobile
- **Steps to Reproduce**: Detailed reproduction steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: Visual evidence of the issue

### Priority Levels
- **Critical**: Site is broken or unusable
- **High**: Major functionality is impaired
- **Medium**: Minor functionality issues
- **Low**: Cosmetic or enhancement issues

## Testing Tools and Resources

### Validation Tools
- W3C Markup Validator
- W3C CSS Validator
- Browser Developer Tools
- Lighthouse (Performance/Accessibility)

### Testing Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing
- Browser responsive design mode
- Physical mobile devices
- Browser mobile simulators

### Performance Tools
- Google PageSpeed Insights
- GTmetrix
- Browser Network tab
- Lighthouse performance audit

## Maintenance Testing Schedule

### Weekly Testing
- [ ] Basic functionality check
- [ ] Mobile responsiveness
- [ ] Form submissions
- [ ] Image loading

### Monthly Testing
- [ ] Full cross-browser testing
- [ ] Performance audit
- [ ] Accessibility review
- [ ] Link validation

### Quarterly Testing
- [ ] Comprehensive security review
- [ ] Full regression testing
- [ ] Performance optimization review
- [ ] Accessibility compliance audit
