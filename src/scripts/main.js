import AOS from "aos";

AOS.init({
  duration: 700,
  once: true,
  offset: 200
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  let isOpen = false;

  menuButton?.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("hidden");
      menuIcon.textContent = "✕";
      document.documentElement.classList.add("overflow-hidden");
    } else {
      mobileMenu.classList.add("hidden");
      menuIcon.textContent = "☰";
      document.documentElement.classList.remove("overflow-hidden");
    }
  });
});
