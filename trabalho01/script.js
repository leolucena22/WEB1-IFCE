document.addEventListener('DOMContentLoaded', () => {
  const allBoxImgs = document.querySelectorAll('.box-img img');
  
  allBoxImgs.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');
    
    if (hoverSrc) {
      img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
      });
      
      img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
      });
    }
  });
});