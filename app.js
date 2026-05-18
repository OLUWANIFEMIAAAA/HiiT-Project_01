
const icon_menu = document.querySelector(".icon-menu");
const close = document.querySelector(".icon-close");
const nav = document.querySelector("header nav");

// Open Navigation
icon_menu.addEventListener('click', ()=>{
    nav.style.transform = "translateX(0)";
});

// close Navigation
close.addEventListener("click", () => {
    nav.style.transform = "translateX(-150%)";
});