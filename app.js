// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Create and append 3000 span elements to the container
  for (let i = 1; i <= 3000; i++) {
    const shape = document.createElement('span');
    document.querySelector('.container').appendChild(shape);
  }
});
