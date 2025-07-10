// Navigation HTML template
const navigationTemplate = `
<div class="header-content">
    <button class="nav-toggle" onclick="toggleMenu()">☰</button>
    <div class="business-info">
        <h1>Mullally Tractor Sales</h1>
    </div>
</div>
<div class="header-contact-info">
    NY, USA  ph:(845) 482-5222
</div>
<nav>
    <ul id="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="john-deere-1025r.html">John Deere 1025R</a></li>
        <li><a href="john-deere-2025r.html">John Deere 2025R</a></li>
        <li><a href="john-deere-2038r.html">John Deere 2038R</a></li>
        <li><a href="john-deere-3038e.html">John Deere 3038E</a></li>
        <li><a href="john-deere-3039r.html">John Deere 3039R</a></li>
        <li><a href="john-deere-4052m.html">John Deere 4052M</a></li>
        <li><a href="chapman-fm120.html">Chapman FM120</a></li>
        <li><a href="chapman-fm150.html">Chapman FM150</a></li>
        <li><a href="chapman-dt100.html">Chapman DT100</a></li>
        <li><a href="chapman-pc120.html">Chapman PC120</a></li>
        <li><a href="chapman-pc150.html">Chapman PC150</a></li>
    </ul>
</nav>
`;

// Define the toggle function globally before anything else
window.toggleMenu = function() {
    const menu = document.getElementById('nav-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

function highlightCurrentPage() {
    // Get current page from pathname
    const pathname = window.location.pathname;
    const currentPage = pathname.substring(pathname.lastIndexOf('/') + 1) || 'index.html';
    
    // Remove any existing active classes
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active', 'current');
    });
    
    // Find and highlight current page link
    const currentLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (currentLink) {
        currentLink.classList.add('current');
    }
}

async function loadNavigation() {
    const navigationElement = document.getElementById('navigation');
    
    if (!navigationElement) {
        console.error('Navigation element not found');
        return;
    }
    
    try {
        // Check if we're running on a web server or local file
        const isLocalFile = window.location.protocol === 'file:';
        
        if (!isLocalFile) {
            // Try to fetch navigation.html with cache busting
            const timestamp = new Date().getTime();
            const response = await fetch(`navigation.html?v=${timestamp}`);
            
            if (response.ok) {
                const html = await response.text();
                navigationElement.innerHTML = html;
                
                // Re-attach the toggle function after loading HTML
                window.toggleMenu = function() {
                    const menu = document.getElementById('nav-menu');
                    if (menu) {
                        menu.classList.toggle('show');
                    }
                }
                
                highlightCurrentPage();
                return;
            }
        }
        
        // Fallback to embedded template
        navigationElement.innerHTML = navigationTemplate;
        highlightCurrentPage();
        
    } catch (error) {
        // Use embedded template on any error
        console.log('Using embedded navigation template');
        navigationElement.innerHTML = navigationTemplate;
        highlightCurrentPage();
    }
}

// Ensure toggle function persists after page load
document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const navToggle = document.querySelector('.nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        if (menu && menu.classList.contains('show') && 
            !nav.contains(event.target) && 
            !navToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
