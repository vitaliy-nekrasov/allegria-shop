var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
