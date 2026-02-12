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

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const isOpened = !mobileMenu.classList.contains("hidden");
            if (!isOpened) {
                mobileMenu.classList.remove("hidden");
                if (menuIcon) menuIcon.textContent = "✕";
                document.documentElement.classList.add("overflow-hidden");
            } else {
                mobileMenu.classList.add("hidden");
                if (menuIcon) menuIcon.textContent = "☰";
                document.documentElement.classList.remove("overflow-hidden");
            }
        });
    }
}