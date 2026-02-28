// Handle dynamic year in the footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-links--open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (improves mobile UX)
  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("nav-links--open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll reveal animation using IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          // Once revealed, no need to observe further for performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback when IntersectionObserver is not supported
  revealElements.forEach((el) => el.classList.add("reveal--visible"));
}

// Active navbar highlight based on scroll position
const sectionIds = [
  "home",
  "about",
  "education",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "activities",
  "contact",
];

const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter((section) => section !== null);

const navLinkMap = new Map();
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const id = href.replace("#", "");
  navLinkMap.set(id, link);
});

// Only set up observer when supported
if ("IntersectionObserver" in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = navLinkMap.get(id);
        if (!link) return;

        if (entry.isIntersecting) {
          // Remove active class from all links
          document.querySelectorAll(".nav-link").forEach((navLink) => {
            navLink.classList.remove("active");
          });
          // Add active to the current section link
          link.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.45,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

