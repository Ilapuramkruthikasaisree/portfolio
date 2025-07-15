// Typing effect for hero subtitle
const introText = "AIML Engineer • Tech Enthusiast • Creative Freelancer";
const heroParagraph = document.querySelector(".hero p");
let index = 0;

function typeEffect() {
  if (index < introText.length) {
    heroParagraph.innerHTML += introText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
heroParagraph.innerHTML = "";
typeEffect();

// Intersection observer for fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Skill tag hover scale
const skillTags = document.querySelectorAll(".skill-list span");

skillTags.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    tag.style.transform = "scale(1.1)";
    tag.style.transition = "transform 0.3s";
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.transform = "scale(1)";
  });
});

// Scroll-to-top button logic
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
