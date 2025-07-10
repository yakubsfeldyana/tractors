// Dynamic Access Key Configuration
// This file determines which access key to use based on the environment

const PRODUCTION_KEY = "f24229fe-5b79-457d-8f76-f29bb463d257";
const DEVELOPMENT_KEY = "3e038e18-c37e-4900-b114-3d59027e1eab";

function getAccessKey() {
  const { protocol, hostname } = window.location;
  
  // Local development (file protocol or localhost)
  if (protocol === 'file:' || 
      hostname === 'localhost' || 
      hostname === '127.0.0.1') {
    return DEVELOPMENT_KEY;
  }
  
  // Production (hosted service)
  return PRODUCTION_KEY;
}

// Export the access key for use in forms
const AccessKey = getAccessKey();

// Function to set access key in forms
function setAccessKeyInForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    const accessKeyInput = form.querySelector('input[name="access_key"]');
    if (accessKeyInput) {
      accessKeyInput.value = AccessKey;
    }
  }
}

// Function to update key indicator
function updateKeyIndicator() {
  const keyIndicator = document.getElementById('keyIndicator');
  if (keyIndicator) {
    const { protocol, hostname } = window.location;
    
    // Check if running in development
    if (protocol === 'file:' || 
        hostname === 'localhost' || 
        hostname === '127.0.0.1') {
      keyIndicator.textContent = 'Dev key';
    } else {
      keyIndicator.textContent = 'Production key';
    }
  }
}

// Function to initialize access keys for all forms on page load
function initializeAccessKeys() {
  // Set access key for contact form
  setAccessKeyInForm('contactForm');
  
  // Set access key for quote form
  setAccessKeyInForm('quoteForm');
  
  // Update key indicator
  updateKeyIndicator();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAccessKeys);
} else {
  initializeAccessKeys();
}
