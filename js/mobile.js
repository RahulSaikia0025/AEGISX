const navToggle = document.querySelector(".nav-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

function setNavState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  navToggle?.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  mobileNavLinks?.classList.toggle("is-open", isOpen);
  mobileNavLinks?.toggleAttribute("hidden", !isOpen && window.innerWidth <= 768);
}

function applyMobileView() {
  const isMobile = window.innerWidth <= 768;
  const isOpen = document.body.classList.contains("nav-open");
  document.body.classList.toggle("mobile-view", isMobile);

  if (mobileNavLinks && !mobileNavLinks.id) {
    mobileNavLinks.id = "site-navigation";
  }

  if (navToggle && mobileNavLinks) {
    navToggle.setAttribute("aria-controls", mobileNavLinks.id);
  }

  if (!isMobile) {
    mobileNavLinks?.removeAttribute("hidden");
    setNavState(false);
    return;
  }

  setNavState(isOpen);
}

navToggle?.addEventListener("click", () => {
  const isOpen = !document.body.classList.contains("nav-open");
  setNavState(isOpen);
});

mobileNavLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      setNavState(false);
    }
  });
});

document.addEventListener("click", (event) => {
  if (
    window.innerWidth <= 768 &&
    document.body.classList.contains("nav-open") &&
    !event.target.closest("nav")
  ) {
    setNavState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
    setNavState(false);
  }
});

applyMobileView();
window.addEventListener("resize", applyMobileView);
