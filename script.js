console.log("hi");
const navIconHam = document.querySelector('.header__navicon--ham');
const navIconCross = document.querySelector('.header__navicon--cross');
const navMenu = document.querySelector('#nav-bar');
//look what is toogle in classlist.toogle
navIconHam.addEventListener('click', function menuOpen() {
    navIconHam.classList.toggle('header__navicon--close');
    navMenu.classList.toggle('header__navmenu--open');
    navIconCross.classList.toggle('header__navicon--open');
});

navIconCross.addEventListener('click', function menuClose() {
    navIconCross.classList.toggle('header__navicon--open');
    navMenu.classList.toggle('header__navmenu--open');
    navIconHam.classList.toggle('header__navicon--close');
});
