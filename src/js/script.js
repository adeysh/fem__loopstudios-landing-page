const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const btnOpen = document.getElementById("nav-button-open");
const btnClose = document.getElementById("nav-button-close");
const media = window.matchMedia("( width < 45em )");
const navContent = document.querySelector(".nav__content");

function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
    navContent.removeAttribute("inert");
    main.setAttribute("inert", "");
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
    navContent.setAttribute("inert", "");
    main.removeAttribute("inert");
    btnOpen.focus();
}

function setupNav(e) {
    if (e.matches) {
        navContent.setAttribute("inert", "");
        setTimeout(() => {
            navContent.style.display = "block";
        }, 500);
    } else {
        navContent.removeAttribute("inert");
        navContent.style.display = "";
        main.removeAttribute("inert");
    }
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});

setupNav(media);
media.addEventListener("change", setupNav);
btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
