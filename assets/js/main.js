// 🚀 Neurotex Labs System Init
console.log("Neurotex Labs Initialized");

// ✨ Fade-in on scroll
const elements = document.querySelectorAll('.section, .card, .glass');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in', 'show');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// 🧠 Button click feedback
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});