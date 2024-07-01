const menuBtn = document.querySelector('.nav__toggle')
const closeMenuBtn = document.querySelector('.header__nav_close')
const slider = document.querySelector('.slider')
const navList = document.querySelector('.nav__list')

menuBtn.addEventListener('click', ()=>{
    console.log('click')
    navList.classList.add('nav__list-activ')
})