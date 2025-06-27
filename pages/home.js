document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("bottomNav");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  let lastScrollY = window.scrollY;

  // Desktop navigation scroll functionality
  function onScroll() {
    const currentY = window.scrollY;

    // Sticky navigation
    if (navContainer) {
      navContainer.classList.toggle("top", currentY > 100);
      navContainer.style.transform =
        currentY > 200 && currentY > lastScrollY
          ? "translateY(-100%)"
          : "translateY(0)";
    }

    lastScrollY = currentY;
  }

  window.addEventListener("scroll", onScroll);

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "auto";
    });

    // Close menu when clicking nav items
    document.querySelectorAll(".mobile-menu .nav-item").forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }
});
