/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')


      if(searchButton){
        searchButton.addEventListener('click', () => {
            searchContent.classList.add('show-search')
        })
      }

      if(searchClose){
        searchClose.addEventListener('click', () => {
            searchContent.classList.remove('show-search')
        })
      }
/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')


      if(loginButton){
        loginButton.addEventListener('click', () => {
            loginContent.classList.add('show-login')
        })
      }

      if(loginClose){
        loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
        })
      }

/*=============== ADD SHADOW HEADER ===============*/
 const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
 }

 window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

    breakpoints: {
        1150: {
             slidesPerView: 4,
             centeredSlides: false,
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },


    breakpoints: {
        1150: {
             slidesPerView: 3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
             slidesPerView: 3,
             centeredSlides: false,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current => {
       const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id')

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
       } else {
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
    })
}

function debounce(func, wait = 20, immediate = true) {
    let timeout
    return function() {
        const context = this, args = arguments
        const later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current => {
       const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id')

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
       } else {
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
    })
}

function debounce(func, wait = 20, immediate = true) {
    let timeout
    return function() {
        const context = this, args = arguments
        const later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

window.addEventListener('scroll', debounce(scrollActive))


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    durartion: 2500,
    delay: 400,
})

sr.reveal('.home__data, .featured__container, .new__container,  .testimonial__container, .footer')
sr.reveal('.join__bg', {origin: 'top'})
sr.reveal('.join__data', {delay: 900})
sr.reveal('.home__images', {origin: 'left', delay: 800})
sr.reveal('.services__card', {delay: 300})
sr.reveal('.discount__data', {origin: 'left'})
sr.reveal('.discount__images', {origin: 'right'})
sr.reveal('.contact__container', {origin: 'left'})
sr.reveal('.contact__data', {delay: 900})


