// =========================
// AEGIS-X HOME SCRIPT
// =========================

console.log("AEGIS-X home loaded");

// =========================
// FADE-IN ON SCROLL
// =========================

const fadeElements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15, // triggers earlier
  }
);

fadeElements.forEach((el) => observer.observe(el));


// =========================
// HERO PARALLAX (SUBTLE)
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (hero) {
    hero.style.transform = `translateY(${scrollY * 0.08}px)`;
  }
});


// =========================
// NAVBAR ACTIVE LINK HIGHLIGHT
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// =========================
// SAFETY FALLBACK (if no IntersectionObserver)
// =========================

if (!("IntersectionObserver" in window)) {
  fadeElements.forEach((el) => el.classList.add("show"));
}
