# Coding Standards

## HTML Standards

### Structure and Semantics
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Maintain proper document structure with DOCTYPE, html, head, and body elements
- Use appropriate heading hierarchy (h1 → h2 → h3, etc.)
- Include meta viewport tag for responsive design: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Formatting
- Use 2-space indentation for HTML
- Keep line length under 120 characters when possible
- Use lowercase for all HTML tags and attributes
- Quote all attribute values with double quotes
- Close all tags properly (including self-closing tags with `/`)

### Accessibility
- Include `alt` attributes for all images
- Use proper form labels and input associations
- Maintain logical tab order
- Ensure sufficient color contrast
- Use ARIA attributes when necessary

### SEO Best Practices
- Include descriptive `<title>` tags for each page
- Add meta description tags
- Use proper heading structure for content hierarchy
- Include relevant keywords naturally in content

## CSS Standards

### Architecture
- **Single CSS File**: All styles must be consolidated in `styles.css`
- **No Inline Styles**: Avoid style attributes in HTML elements
- **No Embedded Styles**: Do not use `<style>` tags in HTML documents

### Organization
- Follow this order in CSS file:
  1. Reset and base styles
  2. Layout components (header, nav, main, footer)
  3. UI components (buttons, forms, modals)
  4. Page-specific styles
  5. Responsive media queries

### Naming Conventions
- Use kebab-case for class names: `.product-item`, `.get-quote-btn`
- Use semantic class names that describe purpose, not appearance
- Avoid overly specific selectors
- Prefix component classes consistently

### Responsive Design
- **Mobile-First Approach**: Write base styles for mobile, then enhance for larger screens
- Use relative units (rem, em, %) where appropriate
- Implement breakpoints at:
  - Mobile: up to 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px and above

### Color Palette
- Primary Green: `#2c5530`
- Secondary Green: `#3a6b3f`
- Primary Blue: `#1e4d8b`
- Background: `#f4f4f4`
- White: `#ffffff`
- Text: `#333333`
- Light Gray: `#666666`

### Typography
- Primary Font: Arial, sans-serif
- Maintain consistent line-height (1.6 for body, 1.2 for headings)
- Use em/rem units for font sizes
- Ensure readable font sizes (minimum 14px on mobile)

## JavaScript Standards

### Code Style
- Use vanilla JavaScript (no frameworks/libraries)
- Use camelCase for variable and function names
- Use PascalCase for constructor functions
- Use UPPER_SNAKE_CASE for constants
- Use 2-space indentation

### Best Practices
- Use `const` for values that don't change, `let` for variables that do
- Avoid `var` declarations
- Use strict equality (`===`) instead of loose equality (`==`)
- Handle errors gracefully with try-catch blocks
- Use meaningful variable and function names

### DOM Manipulation
- Cache DOM queries in variables when used multiple times
- Use event delegation for dynamic content
- Remove event listeners when no longer needed
- Validate user input before processing

### Async Operations
- Use modern async/await syntax for asynchronous operations
- Handle promise rejections properly
- Provide user feedback for loading states
- Implement proper error handling for network requests

## File Organization

### Naming Conventions
- Use lowercase with hyphens for HTML files: `john-deere-1025r.html`
- Use descriptive names that reflect content purpose
- Keep filenames concise but meaningful

### Directory Structure
- Keep all website files in the `website/` directory
- Store images in `website/images/` subdirectory
- Organize images by product category when possible
- Use consistent naming for product images

### Version Control
- Commit frequently with descriptive messages
- Use present tense in commit messages: "Add navigation component"
- Keep commits focused on single features or fixes
- Include relevant files in .gitignore

## Performance Standards

### Image Optimization
- Use appropriate image formats (JPEG for photos, PNG for graphics)
- Optimize image file sizes without sacrificing quality
- Use responsive images with appropriate dimensions
- Include width and height attributes to prevent layout shift

### CSS Performance
- Minimize CSS specificity conflicts
- Avoid deep nesting (max 3 levels)
- Use efficient selectors (avoid universal selectors)
- Group related properties together

### JavaScript Performance
- Minimize DOM queries and manipulations
- Use efficient event handling
- Avoid memory leaks by cleaning up references
- Optimize loops and conditional statements

## Browser Compatibility

### Target Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Fallbacks
- Provide graceful degradation for older browsers
- Test core functionality without JavaScript enabled
- Ensure basic styling works without advanced CSS features
- Use progressive enhancement approach

## Code Comments

### HTML Comments
- Comment complex sections or unusual markup
- Explain business logic or special requirements
- Mark sections for easier navigation in large files

### CSS Comments
- Document color schemes and design decisions
- Explain complex calculations or positioning
- Mark major sections with clear headers
- Document browser-specific hacks or workarounds

### JavaScript Comments
- Use JSDoc format for function documentation
- Explain complex algorithms or business logic
- Document API integrations and data structures
- Include TODO comments for future improvements

## Quality Assurance

### Code Review Checklist
- [ ] HTML validates without errors
- [ ] CSS follows established patterns
- [ ] JavaScript functions work as expected
- [ ] Responsive design works on all breakpoints
- [ ] Accessibility requirements are met
- [ ] Performance is acceptable
- [ ] Cross-browser compatibility verified
