# Project Overview

## Project Name
Mullally Tractor Sales Website

## Description
A responsive business website for Mullally Tractor Sales, featuring product catalogs for John Deere and Chapman tractors and mowers. The site serves as a digital storefront to showcase equipment, provide detailed specifications, and facilitate customer inquiries.

## Business Purpose
- Display tractor and mower inventory with detailed specifications
- Provide contact information and business details
- Generate leads through quote request functionality
- Establish online presence for Mullally Tractor Sales

## Target Audience
- Farmers and agricultural professionals
- Landscaping contractors
- Property owners needing lawn and garden equipment
- Equipment buyers seeking John Deere and Chapman products

## Key Features
- **Product Catalog**: Individual pages for each tractor/mower model
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Quote System**: Modal-based quote request form
- **Image Gallery**: Product images with responsive grid layout
- **Contact Information**: Multiple contact methods and business details
- **SEO Optimized**: Clean URLs and semantic HTML structure

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Single CSS file (styles.css) with mobile-first responsive design
- **Navigation**: Dynamic navigation loading with fallback
- **Testing**: Python-based local server for development
- **Deployment**: Cloudflare Pages hosting
- **Cache Management**: Python script for cache busting

## Project Structure
```
website/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── blog.html               # Blog page
├── john-deere-*.html       # John Deere product pages
├── chapman-*.html          # Chapman product pages
├── styles.css              # Main stylesheet
├── nav_loader.js           # Navigation loading script
├── navigation.html         # Navigation template
├── access_key.js           # Access key functionality
├── test_server.py          # Local development server
├── update_cache_bust.py    # Cache busting utility
├── images/                 # Product images directory
└── README.md               # Website documentation
```

## Development Workflow
1. **Local Development**: Use Python test server for testing
2. **Testing**: Verify both server-based and file-based access
3. **Cache Management**: Run cache busting before deployment
4. **Deployment**: Upload to Cloudflare Pages
5. **Verification**: Test live site functionality

## Key Business Information
- **Business**: Mullally Tractor Sales
- **Products**: John Deere and Chapman equipment
- **Services**: Sales, parts, service, and support
- **Target Market**: Agricultural and landscaping professionals

## Success Metrics
- Lead generation through quote requests
- Mobile usability and responsive performance
- Search engine visibility
- Customer engagement with product pages
- Cross-platform compatibility (MacOS, Linux, Cloudflare)

## Maintenance Requirements
- Regular product catalog updates
- Image optimization and management
- Cache busting for updates
- Mobile responsiveness testing
- Cross-browser compatibility verification
