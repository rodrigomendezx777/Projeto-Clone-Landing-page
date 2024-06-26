const swiper1 = new Swiper('.carrossel', {
  // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
}

});