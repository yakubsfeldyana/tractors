# Common Components

## Navigation Components

### Main Navigation
**File**: `nav_loader.js` and `navigation.html`

#### Implementation
```javascript
// Dynamic navigation loading with fallback
// Loads navigation.html or uses embedded fallback
// Automatically highlights current page
// Responsive hamburger menu for mobile
```

#### Usage
- Include `nav_loader.js` in all HTML pages
- Navigation automatically loads and configures
- No manual navigation coding required in individual pages

#### Features
- **Dynamic Loading**: Fetches navigation from `navigation.html`
- **Fallback System**: Embedded navigation if file loading fails
- **Current Page Highlighting**: Automatically detects and highlights current page
- **Mobile Responsive**: Transforms to hamburger menu on mobile devices
- **Cross-Platform**: Works with both server and file-based access

### Hamburger Menu
**Breakpoint**: 768px and below

#### Structure
```html
<button class="nav-toggle">☰</button>
<ul class="nav-menu">
  <!-- Navigation items -->
</ul>
```

#### Behavior
- Toggle button appears on mobile
- Menu slides down when activated
- Touch-friendly link targets
- Automatic close on link selection

## Header Components

### Business Header
**Class**: `.header-content`

#### Structure
```html
<div class="header-content">
  <div class="business-info">
    <h1>Mullally Tractor Sales</h1>
  </div>
</div>
```

#### Styling
- Blue background (`#1e4d8b`)
- White text
- Centered business name
- Responsive font sizing

### Contact Header Bar
**Class**: `.header-contact-info`

#### Structure
```html
<div class="header-contact-info">
  <p>Contact information and details</p>
</div>
```

#### Features
- White background
- Green text (`#2c5530`)
- Centered layout
- Responsive text sizing

## Product Components

### Product Grid
**Class**: `.product-grid`

#### Structure
```html
<div class="product-grid">
  <div class="product-item">
    <a href="product-page.html">
      <img src="product-image.jpg" alt="Product Name">
      <h3>Product Name</h3>
      <p>Product description</p>
    </a>
  </div>
</div>
```

#### Responsive Behavior
- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Three column layout (when space allows)

### Product Card
**Class**: `.product-item`

#### Features
- White background with border
- Hover animation (lift effect)
- Rounded corners (8px)
- Drop shadow
- Responsive image sizing

#### Hover Effects
```css
transform: translateY(-5px)
box-shadow: 0 5px 15px rgba(0,0,0,0.2)
```

### Product Detail Layout
**Class**: `.product-detail`

#### Structure
```html
<div class="product-detail">
  <h1>Product Name</h1>
  <div class="product-images">
    <!-- Product images -->
  </div>
  <div class="product-section">
    <h2>Section Title</h2>
    <!-- Section content -->
  </div>
</div>
```

#### Features
- Maximum width: 800px
- Centered layout
- Responsive image grid
- Structured content sections

## Form Components

### Quote Request Modal
**Class**: `.quote-modal`

#### Structure
```html
<div class="quote-modal">
  <div class="quote-modal-content">
    <div class="quote-modal-header">
      <h2>Request a Quote</h2>
      <span class="close-modal">&times;</span>
    </div>
    <div class="quote-form-container">
      <!-- Form content -->
    </div>
  </div>
</div>
```

#### Features
- Full-screen overlay
- Centered modal content
- Green header with close button
- Responsive form layout
- Form validation and submission

### Form Elements
**Classes**: `.form-group`, `.form-row`

#### Input Fields
```html
<div class="form-group">
  <label for="field-name">Field Label <span class="required">*</span></label>
  <input type="text" id="field-name" name="field-name" required>
</div>
```

#### Form Row (Two Columns)
```html
<div class="form-row">
  <div class="form-group">
    <!-- First field -->
  </div>
  <div class="form-group">
    <!-- Second field -->
  </div>
</div>
```

#### Features
- Consistent styling across all form elements
- Focus states with brand colors
- Required field indicators
- Responsive two-column layout
- Proper label associations

## Button Components

### Primary Button (Get Quote)
**Class**: `.get-quote-btn`

#### Structure
```html
<button class="get-quote-btn">Get Quote</button>
```

#### Features
- Blue background (`#1e4d8b`)
- White text
- Rounded corners (5px)
- Hover effect (changes to green)
- Consistent sizing and padding

#### Usage
- Quote request triggers
- Form submissions
- Primary call-to-action elements

### Submit Button
**Class**: `.submit-button`

#### Features
- Similar styling to primary button
- Disabled state styling
- Loading state support
- Form-specific sizing

## Content Components

### Hero Section
**Class**: `.hero`

#### Structure
```html
<section class="hero">
  <h2>Main Heading</h2>
  <p>Descriptive text content</p>
</section>
```

#### Features
- Light gray background
- Centered text
- Responsive typography
- Consistent padding

### Contact Information
**Class**: `.contact-info`

#### Structure
```html
<div class="contact-info">
  <h2>Contact Us</h2>
  <div class="contact-details">
    <p>Contact information</p>
  </div>
</div>
```

#### Features
- Light background
- Centered layout
- Consistent typography
- Responsive padding

### Store Information
**Class**: `.store-info`

#### Similar structure and features to contact-info
- Business hours
- Location details
- Service information

## Specification Components

### Specs List
**Class**: `.specs-list`

#### Structure
```html
<div class="specs-list">
  <ul>
    <li>Specification item</li>
    <li>Another specification</li>
  </ul>
</div>
```

#### Features
- Light gray background
- Rounded corners
- Consistent padding
- Bulleted list format

### Price Display
**Class**: `.price`

#### Structure
```html
<div class="price">
  <h3>Price Information</h3>
  <p>$XX,XXX</p>
</div>
```

#### Features
- Blue background (`#1e4d8b`)
- White text
- Centered layout
- Prominent display

## Video Components

### Video Container
**Class**: `.video-container`

#### Structure
```html
<div class="video-container">
  <iframe src="video-url" title="Video Title"></iframe>
</div>
```

#### Features
- Responsive 16:9 aspect ratio
- Rounded corners
- Proper iframe sizing
- Accessible video embedding

## Layout Components

### Main Content Container
**Element**: `main`

#### Features
- Maximum width: 1200px
- Centered with auto margins
- Consistent padding
- White background
- Minimum height for proper footer positioning

### Section Containers
**Class**: `.product-section`

#### Features
- Consistent margin spacing
- Section headings with bottom borders
- Hierarchical heading structure
- Responsive typography

## Responsive Utilities

### Mobile-First Breakpoints
```css
/* Default: Mobile styles */

@media (max-width: 768px) {
  /* Mobile-specific overrides */
}

@media (max-width: 480px) {
  /* Small mobile adjustments */
}
```

### Common Responsive Patterns
- **Navigation**: Horizontal to hamburger menu
- **Grid Layouts**: Multi-column to single column
- **Typography**: Scaled font sizes
- **Spacing**: Reduced padding and margins
- **Images**: Responsive sizing and stacking

## Accessibility Features

### Focus Management
- Visible focus indicators
- Logical tab order
- Skip navigation links
- Keyboard-accessible modals

### Screen Reader Support
- Proper heading hierarchy
- Alt text for images
- Form label associations
- ARIA attributes where needed

### Color Contrast
- AAA compliance for text
- Sufficient contrast ratios
- Color-independent information

## Performance Considerations

### Image Optimization
- Appropriate file formats
- Optimized file sizes
- Responsive image techniques
- Lazy loading considerations

### CSS Efficiency
- Single stylesheet approach
- Efficient selectors
- Minimal specificity conflicts
- Grouped related properties

### JavaScript Performance
- Minimal DOM manipulation
- Event delegation
- Efficient event handling
- Memory leak prevention

## Component Usage Guidelines

### Consistency Rules
- Use established component patterns
- Follow naming conventions
- Maintain visual hierarchy
- Ensure responsive behavior

### Customization Guidelines
- Extend components rather than modify core styles
- Use CSS custom properties for variations
- Document any custom implementations
- Test across all breakpoints

### Integration Best Practices
- Include required JavaScript for interactive components
- Test component combinations
- Verify accessibility compliance
- Validate responsive behavior
