/*=============== SERVICES MODAL ================*/
const modal = document.querySelectorAll('.services__modal'),
        modalButton = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = function(modalClick) {
    modal[modalClick].classList.add('active-modal')
} 

modalButton.forEach(function(modalButton, i) {
    modalButton.addEventListener('click', function() {
        activeModal(i)
    })
})

modalClose.forEach(function(modalClose) {
    modalClose.addEventListener('click', function(){
        modal.forEach(function(modalRemove){
            modalRemove.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER TESIMONIAL =============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true, 
        clickable: true,
    },
})

/*=============== SHOW SCROLL UP ================*/
const scrollUp = function() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the scrool-header class to the heade tag
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
