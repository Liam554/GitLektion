const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Togla mobil meny på button click
menuBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

//Stäng mobil menu på stäng knappen
closeMenuBtn.addEventListener("click", () => {
    menuBtn.click();
});

//smooth jump link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});