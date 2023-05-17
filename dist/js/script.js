const toggleMenu = document.querySelector(".toggle-menu");
const headNav= document.querySelector(".header-nav");
const blurr= document.querySelector(".blur");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    blurr.classList.toggle("open");
    headNav.classList.toggle("open");
    header.style=("border-bottom: 1px solid #ffffff;")
});