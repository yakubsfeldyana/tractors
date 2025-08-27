# Design System

## Brand Identity

### Business Information
- **Company Name**: Mullally Tractor Sales
- **Industry**: Agricultural Equipment Sales
- **Target Market**: Farmers, landscapers, property owners
- **Brand Personality**: Professional, reliable, trustworthy, approachable

## Color Palette

### Primary Colors
- **Primary Green**: `#2c5530`
  - Usage: Main headings, navigation links, brand elements
  - Represents: Growth, agriculture, reliability
- **Secondary Green**: `#3a6b3f`
  - Usage: Hover states, secondary headings
  - Represents: Nature, freshness
- **Primary Blue**: `#1e4d8b`
  - Usage: Call-to-action buttons, header background, footer
  - Represents: Trust, professionalism, stability

### Neutral Colors
- **Background**: `#f4f4f4`
  - Usage: Page background, subtle sections
- **White**: `#ffffff`
  - Usage: Content backgrounds, cards, navigation
- **Text Primary**: `#333333`
  - Usage: Main body text, headings
- **Text Secondary**: `#666666`
  - Usage: Descriptions, secondary information

### Accent Colors
- **Light Gray**: `#ddd`
  - Usage: Borders, dividers
- **Success Green**: `#d4edda`
  - Usage: Success messages, confirmations
- **Error Red**: `#f8d7da`
  - Usage: Error messages, warnings

## Typography

### Font Family
- **Primary**: Arial, sans-serif
- **Fallback**: System default sans-serif fonts
- **Rationale**: Clean, readable, widely supported

### Font Sizes and Hierarchy
```css
/* Headings */
h1: 2.5em (40px) - Page titles
h2: 2.0em (32px) - Section headings  
h3: 1.6em (25.6px) - Subsection headings
h4: 1.3em (20.8px) - Component headings
h5: 1.1em (17.6px) - Minor headings
h6: 1.0em (16px) - Small headings

/* Body Text */
body: 1.0em (16px) - Base font size
small: 0.85em (13.6px) - Fine print, captions
```

### Line Heights
- **Body Text**: 1.6 (optimal for readability)
- **Headings**: 1.2 (tighter for visual impact)
- **Navigation**: 0.8 (compact for space efficiency)

### Font Weights
- **Normal**: 400 (body text)
- **Medium**: 500 (navigation links)
- **Bold**: 600 (business name, important text)
- **Extra Bold**: 700 (emphasis, current page)

## Layout System

### Container Widths
- **Main Content**: max-width: 1200px
- **Product Detail**: max-width: 800px
- **Centered Content**: margin: 0 auto

### Spacing Scale
```css
/* Consistent spacing units */
xs: 5px
sm: 10px
md: 15px
lg: 20px
xl: 25px
xxl: 30px
```

### Grid System
- **Product Grid**: Flexible column layout
- **Mobile**: Single column (1fr)
- **Tablet**: Two columns (repeat(2, 1fr))
- **Desktop**: Three columns (repeat(3, 1fr))

## Component Design

### Buttons

#### Primary Button (.get-quote-btn)
```css
background-color: #1e4d8b
color: white
padding: 12px 20px
border-radius: 5px
font-size: 0.9em
transition: background-color 0.3s
```

#### Hover State
```css
background-color: #2c5530
```

### Cards (.product-item)
```css
background: white
border: 1px solid #ddd
border-radius: 8px
padding: 15px
box-shadow: 0 2px 5px rgba(0,0,0,0.1)
transition: transform 0.3s, box-shadow 0.3s
```

#### Hover Effect
```css
transform: translateY(-5px)
box-shadow: 0 5px 15px rgba(0,0,0,0.2)
```

### Forms

#### Input Fields
```css
width: 100%
padding: 10px
border: 1px solid #ddd
border-radius: 4px
font-size: 1em
transition: border-color 0.3s
```

#### Focus State
```css
border-color: #2c5530
outline: none
```

#### Labels
```css
color: #2c5530
font-weight: bold
margin-bottom: 5px
font-size: 0.95em
```

## Navigation Design

### Desktop Navigation
- **Background**: White
- **Link Color**: `#2c5530`
- **Hover Color**: `#3a6b3f`
- **Active/Current**: `#1e3a21` with bold weight
- **Underlines**: All links underlined for clarity

### Mobile Navigation (Hamburger)
- **Toggle Button**: White color, positioned top-right
- **Menu Background**: White with border and shadow
- **Dropdown**: Absolute positioning, full-width links
- **Link Padding**: 5px 20px for touch-friendly targets

## Header Design

### Business Header
- **Background**: `#1e4d8b` (Primary Blue)
- **Text Color**: White
- **Business Name**: Large, centered, bold
- **Contact Info**: Smaller, green text on white background

### Header Structure
1. **Main Header**: Blue background with business name
2. **Contact Bar**: White background with contact details
3. **Navigation**: White background with menu items

## Responsive Breakpoints

### Mobile First Approach
```css
/* Base styles: Mobile (up to 768px) */
/* Default styles apply to mobile */

@media (max-width: 768px) {
  /* Mobile-specific overrides */
  /* Hamburger menu activation */
  /* Single column layouts */
}

@media (max-width: 480px) {
  /* Small mobile adjustments */
  /* Reduced font sizes */
  /* Tighter spacing */
}
```

### Breakpoint Strategy
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## Image Guidelines

### Product Images
- **Aspect Ratio**: Flexible, object-fit: cover
- **Border Radius**: 8px for cards, 5px for thumbnails
- **Border**: 1px solid #ddd
- **Hover Effects**: None (maintain performance)

### Image Sizes
- **Product Thumbnails**: 200px max-width, 150px height
- **Product Detail**: 200px min-width, flexible height
- **Grid Images**: 100% width, 200px height

## Modal Design

### Quote Modal
- **Overlay**: rgba(0,0,0,0.5)
- **Content Background**: White
- **Border Radius**: 8px
- **Max Width**: 600px
- **Header**: Green background (`#2c5530`)
- **Close Button**: White, top-right positioning

## Animation and Transitions

### Standard Transitions
```css
/* Hover effects */
transition: color 0.3s
transition: background-color 0.3s
transition: transform 0.3s
transition: box-shadow 0.3s
transition: border-color 0.3s
```

### Hover Animations
- **Cards**: Subtle lift (translateY(-5px))
- **Buttons**: Color change only
- **Links**: Color change with underline

## Accessibility Considerations

### Color Contrast
- **Text on White**: #333333 (AAA compliant)
- **White on Blue**: #ffffff on #1e4d8b (AAA compliant)
- **Green Text**: #2c5530 on white (AA compliant)

### Focus States
- **Visible Focus**: Border color change to brand green
- **Keyboard Navigation**: Logical tab order
- **Skip Links**: Available for screen readers

### Alt Text Standards
- **Product Images**: Descriptive alt text with model name
- **Decorative Images**: Empty alt attributes
- **Functional Images**: Action-oriented descriptions

## Content Guidelines

### Tone of Voice
- **Professional**: Clear, authoritative language
- **Approachable**: Friendly, helpful tone
- **Informative**: Detailed specifications and features
- **Action-Oriented**: Clear calls-to-action

### Content Structure
- **Scannable**: Use headings, lists, short paragraphs
- **Hierarchical**: Logical information flow
- **Consistent**: Standardized product descriptions
- **SEO-Friendly**: Descriptive titles and meta descriptions

## Brand Applications

### Logo Usage
- **Business Name**: Text-based, no separate logo
- **Placement**: Centered in header
- **Color**: White on blue background
- **Font**: Arial, bold weight

### Consistency Rules
- **Color Usage**: Stick to defined palette
- **Typography**: Use established hierarchy
- **Spacing**: Follow spacing scale
- **Component Reuse**: Use established patterns
