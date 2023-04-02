const navMenu = document.querySelector('.c-nav__menu--header');
const toggleMenu = document.querySelector('.c-toggle-menu');

toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('is-active')
})

console.log(toggleMenu);