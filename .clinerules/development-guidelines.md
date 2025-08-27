# Development Guidelines

## Development Environment Setup

### Required Tools
- **Text Editor**: VSCode, Sublime Text, or similar
- **Python**: Version 3.6+ for local test server
- **Web Browser**: Chrome, Firefox, Safari, or Edge for testing
- **Git**: For version control

### Local Development Server
Always use the Python test server for development and testing:

```bash
cd website/
python test_server.py
```

Access the site at: `http://localhost:8000/`

### File Access Testing
Also test by double-clicking `index.html` to ensure compatibility with direct file access (simulates some hosting environments).

## Development Workflow

### 1. Planning Phase
- Review project requirements and specifications
- Create or update task lists and milestones
- Identify affected files and components
- Plan responsive design considerations

### 2. Development Phase
- Start local test server
- Make incremental changes
- Test frequently in browser
- Validate HTML, CSS, and JavaScript
- Check responsive design at different breakpoints

### 3. Testing Phase
- Test with Python server (`http://localhost:8000/`)
- Test with direct file access (double-click `index.html`)
- Verify mobile responsiveness
- Test navigation functionality
- Validate forms and interactive elements

### 4. Pre-Deployment Phase
- Run cache busting script: `python update_cache_bust.py`
- Final testing with updated cache parameters
- Validate all links and functionality
- Check for console errors

### 5. Deployment Phase
- Upload files to Cloudflare Pages
- Clear Cloudflare cache if necessary
- Verify live site functionality
- Test from different devices and networks

## Navigation System Guidelines

### Dynamic Navigation Loading
- Navigation is loaded via `nav_loader.js`
- Fallback navigation is embedded in the JavaScript
- Navigation template is stored in `navigation.html`

### Navigation Requirements
- Must work with both server-based and file-based access
- Must transform to hamburger menu on mobile devices
- Must highlight current page
- Must be accessible via keyboard navigation

### Implementation Rules
- Do not hardcode navigation in individual HTML files
- Use the centralized navigation system
- Test both loading methods (server and file access)

## Responsive Design Guidelines

### Mobile-First Approach
- Write base styles for mobile devices
- Use progressive enhancement for larger screens
- Test on actual mobile devices when possible

### Breakpoints
```css
/* Mobile: Default styles (up to 768px) */

@media (max-width: 768px) {
  /* Mobile-specific overrides */
}

@media (max-width: 480px) {
  /* Small mobile adjustments */
}
```

### Navigation Responsiveness
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with dropdown
- Tablet: Responsive behavior based on screen width

## CSS Architecture Guidelines

### Single File Approach
- All styles must be in `styles.css`
- No inline styles in HTML
- No embedded `<style>` tags
- Organize styles logically within the single file

### CSS Organization Structure
```css
/* 1. Reset and Base Styles */
/* 2. Header Styles */
/* 3. Navigation Styles */
/* 4. Main Content */
/* 5. Product Components */
/* 6. Forms and Modals */
/* 7. Footer */
/* 8. Responsive Media Queries */
```

### CSS Best Practices
- Use consistent naming conventions
- Group related properties
- Comment major sections
- Avoid deep nesting
- Use efficient selectors

## JavaScript Guidelines

### Vanilla JavaScript Only
- No external frameworks or libraries
- Use modern ES6+ features when appropriate
- Maintain compatibility with target browsers

### Code Organization
- Keep JavaScript modular and reusable
- Use meaningful function and variable names
- Handle errors gracefully
- Provide user feedback for actions

### DOM Manipulation
- Cache DOM queries
- Use event delegation
- Clean up event listeners
- Validate user input

## Image Management

### Image Organization
- Store all images in `website/images/`
- Use descriptive filenames
- Organize by product category when possible
- Maintain consistent naming conventions

### Image Optimization
- Optimize file sizes without quality loss
- Use appropriate formats (JPEG for photos, PNG for graphics)
- Include alt attributes for accessibility
- Consider responsive image techniques

## Cache Management

### Cache Busting Strategy
- Use `update_cache_bust.py` before deployment
- Script updates version parameters in HTML files
- Ensures browsers load latest CSS and JavaScript
- Run after any CSS or JavaScript changes

### Cache Busting Process
```bash
python update_cache_bust.py
```

This updates references like:
- `styles.css?v=123456` 
- `nav_loader.js?v=123456`

## Testing Procedures

### Local Testing Checklist
- [ ] Python server test (`http://localhost:8000/`)
- [ ] Direct file access test (double-click `index.html`)
- [ ] Mobile responsiveness (resize browser)
- [ ] Navigation functionality
- [ ] Form submissions
- [ ] Image loading
- [ ] Console error check

### Cross-Platform Testing
- [ ] macOS compatibility
- [ ] Linux compatibility
- [ ] Cloudflare Pages deployment
- [ ] Multiple browser testing
- [ ] Mobile device testing

### Performance Testing
- [ ] Page load times
- [ ] Image optimization
- [ ] CSS efficiency
- [ ] JavaScript performance
- [ ] Mobile performance

## Deployment Guidelines

### Pre-Deployment Checklist
- [ ] All changes tested locally
- [ ] Cache busting script executed
- [ ] No console errors
- [ ] Mobile responsiveness verified
- [ ] All links functional
- [ ] Forms working correctly

### Deployment Process
1. Final local testing
2. Run cache busting script
3. Upload files to Cloudflare Pages
4. Clear Cloudflare cache if needed
5. Verify live site functionality
6. Test from multiple devices/networks

### Post-Deployment Verification
- [ ] Homepage loads correctly
- [ ] Navigation works properly
- [ ] Product pages display correctly
- [ ] Contact forms function
- [ ] Mobile view is responsive
- [ ] No broken links or images

## Error Handling

### JavaScript Error Handling
- Use try-catch blocks for risky operations
- Provide meaningful error messages to users
- Log errors to console for debugging
- Implement graceful fallbacks

### CSS Fallbacks
- Provide fallbacks for advanced CSS features
- Test with CSS disabled
- Ensure content remains accessible
- Use progressive enhancement

### HTML Validation
- Validate HTML markup regularly
- Fix validation errors promptly
- Ensure semantic structure
- Maintain accessibility standards

## Documentation Requirements

### Code Documentation
- Comment complex logic
- Document API integrations
- Explain business rules
- Include TODO items for future work

### Change Documentation
- Document significant changes
- Update README files as needed
- Maintain deployment checklists
- Record troubleshooting solutions

## Security Considerations

### Form Security
- Validate all user input
- Sanitize data before processing
- Use HTTPS for form submissions
- Implement proper error handling

### File Security
- Avoid exposing sensitive files
- Use appropriate file permissions
- Keep development files separate from production
- Regular security reviews

## Performance Optimization

### CSS Optimization
- Minimize CSS specificity conflicts
- Remove unused styles
- Optimize selector efficiency
- Group related properties

### JavaScript Optimization
- Minimize DOM manipulations
- Use efficient algorithms
- Avoid memory leaks
- Optimize event handling

### Image Optimization
- Compress images appropriately
- Use correct image formats
- Implement lazy loading if needed
- Optimize for different screen densities
