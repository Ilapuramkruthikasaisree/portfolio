AOS.init();

const typedText = document.getElementById('typed-text');
const words = ['AI/ML Engineer', 'Tech Enthusiast', 'Freelancer'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
