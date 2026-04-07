function menuAlur(){
const element = document.getElementById("scrollAlur")
const closeNav = document.getElementById("menu-mobile")
element.scrollIntoView();
closeNav.style.right = "-100%";
closeNav.style.transition = "0ms";
}

function menuKontak(){
const element = document.getElementById("scrollKontak")
const closeNav = document.getElementById("menu-mobile")
element.scrollIntoView();
closeNav.style.right = "-100%";
closeNav.style.transition = "0ms";
}

function hamburger(){
const openNav  = document.getElementById("menu-mobile")
openNav.style.right = "0";
openNav.style.transition = "300ms"
}

function closeHamburger(){
    const closeHamburger = document.getElementById("menu-mobile")
    closeHamburger.style.right = "-100%";
}