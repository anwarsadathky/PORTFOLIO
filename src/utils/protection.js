// Function to prevent screenshots and protect content
export const enableProtection = () => {
  // Prevent right-click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent keyboard shortcuts for saving
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S, Ctrl+Shift+S, Ctrl+U, F12
    if (
      (e.ctrlKey && e.key === 's') ||
      (e.ctrlKey && e.shiftKey && e.key === 's') ||
      (e.ctrlKey && e.key === 'u') ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Prevent DevTools
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'i') {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Add watermark to images
  const addWatermarkToImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Create a canvas to draw the image with watermark
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);
      
      // Add watermark text
      ctx.font = '16px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('© Anwar Sadath KY', canvas.width / 2, canvas.height / 2);
      
      // Replace the image with the watermarked canvas
      img.src = canvas.toDataURL();
    });
  };

  // Run watermark function when images are loaded
  window.addEventListener('load', addWatermarkToImages);
};

// Function to disable protection (for development purposes)
export const disableProtection = () => {
  // This function can be used during development to temporarily disable protection
  console.log('Protection disabled for development');
}; 