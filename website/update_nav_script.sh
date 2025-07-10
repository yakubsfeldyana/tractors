#!/bin/bash

# List of HTML files to update (excluding already updated ones)
files=(
    "john-deere-2038r.html"
    "john-deere-3038e.html"
    "john-deere-3039r.html"
    "john-deere-4052m.html"
    "chapman-dt100.html"
    "chapman-fm120.html"
    "chapman-fm150.html"
    "chapman-pc120.html"
    "chapman-pc150.html"
)

for file in "${files[@]}"; do
    echo "Updating $file..."
    
    # Create a temporary file with the updated content
    sed '/<header>/,/<\/header>/{
        s|<div id="navigation"></div>|<div id="navigation"></div>\
        <script src="nav_loader.js"></script>\
        <script>\
            loadNavigation();\
        </script>|
    }' "$file" > temp_file
    
    # Remove the script tags from the bottom
    sed '/<script src="nav_loader.js"><\/script>/,/<\/script>/d' temp_file > "$file"
    
    rm temp_file
    echo "Updated $file"
done

echo "All files updated successfully!"
