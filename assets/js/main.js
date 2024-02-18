/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile/////

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//shadow header

const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//SCROLL-UP=====

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove("show-scroll")
}

window.addEventListener('scroll', scrollUp);

//========SCROLL SECTIONS ACTIVE LINK 

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectiomHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ' ]')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectiomHeight){
                sectionClass.classList.add('active-link')
              } else {
                sectionClass.classList.remove('active-link')
              }
    })
}

window.addEventListener('scroll', scrollActive);



//====DARK THEME=====

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligiht'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})