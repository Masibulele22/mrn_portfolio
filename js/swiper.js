document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonial__swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 10000, // 10 seconds
            disableOnInteraction: false,
        },
    });
});
