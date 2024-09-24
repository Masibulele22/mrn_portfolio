// // SHOW MENU
// const navMenu = document.getElementById('nav-menu'), 
//         navToggle = document.getElementById('nav-toggle'),
//         navClose = document.getElementById('nav-close')

// // MENU SHOW
// /* Validate if constant exists */
// if(navToggle) {
//     navToggle.addEventListener('click', function() {
//         navMenu.classList.add('show-menu')
//     })
// }

// // MENU HIDDEN
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', function(){
//         navMenu.classList.remove('show-menu')
//     })
// }

// // CHANGE BACKGROUND HEADER
// const bgHeader = function(){
//     const header = document.getElementById('header')
//     //When the scroll is greater than 50 viewport height, add the
//     this.scrollY >= 50 ? header.classList.add('bg-header')
//                         : header.classList.remove('bg-header')
// }
// window.addEventListener('scroll', bgHeader)

// // DARK LIGHT THEME
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = function() {
//     document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// }

// const getCurrentIcon = function() {
//     themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
// }

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//     //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', function(){
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon()) 
// })













// SHOW MENU
const navMenu = document.getElementById('nav-menu'), 
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// MENU SHOW
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu')
    })
}

// CHANGE BACKGROUND HEADER
const bgHeader = function() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the background class
    if (this.scrollY >= 50) {
        header.classList.add('bg-header')
    } else {
        header.classList.remove('bg-header')
    }
}
window.addEventListener('scroll', bgHeader)

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme and icon by checking the class
const getCurrentTheme = function() {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}

const getCurrentIcon = function() {
    return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
}

// Validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, set the class accordingly
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', function() {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon()) 
})

