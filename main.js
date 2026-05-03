const menu = document.querySelector(".fixed-menu");
const mobileButton = document.querySelector(".mobile-button");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("section[id]"));

function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove("active"));
}

function setActiveLink(link) {
    if (!link) return;
    removeActiveClass();
    link.classList.add("active");
}

function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("hide");
    body.classList.remove("off-scroll");
}

function toggleMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle("hide");
    body.classList.toggle("off-scroll", !mobileMenu.classList.contains("hide"));
}

function handleNavClick(event) {
    const link = event.target.closest(".nav-link");
    if (!link) return;
    setActiveLink(link);
    closeMobileMenu();
}

function getActiveSectionId() {
    const fromTop = window.scrollY + window.innerHeight / 2;
    let currentId = sections.length ? sections[0].id : "";

    sections.forEach(section => {
        if (section.offsetTop <= fromTop) {
            currentId = section.id;
        }
    });

    return currentId;
}

function updateActiveLinkOnScroll() {
    const activeSectionId = getActiveSectionId();
    if (!activeSectionId) return;

    const currentLink = document.querySelector(`.nav-link[href="#${activeSectionId}"]`);
    if (!currentLink) return;

    if (!currentLink.classList.contains("active")) {
        setActiveLink(currentLink);
    }
}

if (menu) {
    menu.addEventListener("click", handleNavClick);
}

if (mobileButton) {
    mobileButton.addEventListener("click", toggleMobileMenu);
}

if (mobileMenu) {
    mobileMenu.addEventListener("click", handleNavClick);
}

window.addEventListener("scroll", updateActiveLinkOnScroll);
window.addEventListener("load", updateActiveLinkOnScroll);
