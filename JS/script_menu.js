let menu = document.querySelector(".nav-menu");
let buttonMenu = document.querySelector(".menu-hamburger");

buttonMenu.addEventListener("click", function(el) {
    el.preventDefault();
    menu.classList.toggle("show-menu")
})