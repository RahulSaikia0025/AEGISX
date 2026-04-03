
const fadeElements = Array.from(document.querySelectorAll(".fade"));

if ("IntersectionObserver" in window) {
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));
} else {
  fadeElements.forEach((el) => el.classList.add("show"));
}

const navLinks = Array.from(document.querySelectorAll("nav a"));
const sections = Array.from(document.querySelectorAll("[id]")).filter((section) =>
  ["home", "about", "why", "roadmap", "join", "transparency", "contact"].includes(section.id)
);

function setActiveLink() {
  const scrollY = window.scrollY;
  let activeSection = sections[0]?.id || "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      activeSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href")?.split("#")[1] || "";
    link.classList.toggle("active", linkTarget === activeSection);
  });
}

if (navLinks.length && sections.length) {
  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
  window.addEventListener("load", setActiveLink);
}
