#!/usr/bin/env python3
"""
Simple HTTP server for testing the website locally
This simulates how the site will behave on a real web server like Cloudflare Pages
"""

import http.server
import socketserver
import os
import sys

# Change to the website directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Port to run the server on
PORT = 8000

# Custom handler to add proper MIME types and headers
class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add cache control headers similar to what Cloudflare might use
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def guess_type(self, path):
        mimetype = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript'
        elif path.endswith('.css'):
            return 'text/css'
        return mimetype

# Create the server
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print(f"Open http://localhost:{PORT}/ in your browser to test the site")
    print("Press Ctrl+C to stop the server")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
