const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const whatsappToggle = document.getElementById("whatsapp-toggle");
const whatsappMenu = document.getElementById("whatsapp-menu");
const whatsappWidget = document.querySelector(".whatsapp-widget");

if (whatsappToggle && whatsappMenu && whatsappWidget) {
    whatsappToggle.addEventListener("click", () => {
        const isOpen = whatsappWidget.classList.toggle("is-open");
        whatsappToggle.setAttribute("aria-expanded", String(isOpen));
    });

    whatsappMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            whatsappWidget.classList.remove("is-open");
            whatsappToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (!whatsappToggle.contains(target) && !whatsappMenu.contains(target)) {
            whatsappWidget.classList.remove("is-open");
            whatsappToggle.setAttribute("aria-expanded", "false");
        }
    });
}