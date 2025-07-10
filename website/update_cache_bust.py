#!/usr/bin/env python3
"""
Update all HTML files to include cache-busting parameters for CSS and JS files
"""

import os
import re
from datetime import datetime

# Generate version string based on current date/time
version = datetime.now().strftime("%Y%m%d%H")

# Directory containing HTML files
html_dir = "."

# Pattern to find CSS and JS links
css_pattern = r'<link rel="stylesheet" href="styles\.css(\?v=\d+)?">'
js_pattern = r'<script src="nav_loader\.js(\?v=\d+)?"></script>'

# Replacement patterns with version
css_replacement = f'<link rel="stylesheet" href="styles.css?v={version}">'
js_replacement = f'<script src="nav_loader.js?v={version}"></script>'

# Process all HTML files
for filename in os.listdir(html_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(html_dir, filename)
        
        # Read file content
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace CSS and JS references
        original_content = content
        content = re.sub(css_pattern, css_replacement, content)
        content = re.sub(js_pattern, js_replacement, content)
        
        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filename}")
        else:
            print(f"No changes needed: {filename}")

print(f"\nCache busting version: {version}")
print("All HTML files have been updated!")
