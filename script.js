// Disable fade-in effect if you'd like to always show content
// You can still add fade-in by adding "fade-in" class in CSS and using IntersectionObserver

// Example animation if you want:
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

sections.forEach(section => {
  observer.observe(section);
});
