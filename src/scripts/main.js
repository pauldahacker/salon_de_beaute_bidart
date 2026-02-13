import AOS from "aos";

export function initSite() {
    // AOS transitions
    AOS.init({
        duration: 700,
        once: true,
        offset: 200,
    });

    // Menu Logic
    const menuButton = document.getElementById("menu-button");
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    // Inside your initSite() function in main.js
const menuLinks = mobileMenu.querySelectorAll('a');

menuButton.addEventListener("click", () => {
    const isOpened = !mobileMenu.classList.contains("hidden");
    
    if (!isOpened) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex"); // Ensure flex is applied when shown
        if (menuIcon) menuIcon.textContent = "✕";
    } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        if (menuIcon) menuIcon.textContent = "☰";
    }
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        if (menuIcon) menuIcon.textContent = "☰";
        document.documentElement.classList.remove("overflow-hidden");
    });
});
}