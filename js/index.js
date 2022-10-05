// HERO SECTION SWIPER //

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

// OPTIONS FOR POPULAR SECTION SWIPER //

let options = {
  slidesPerView: null,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

// POPULAR SECTION SWIPER FOR MOBILE //

if (window.innerWidth < 767 && window.innerWidth > 375) {
  options.slidesPerView = 2;
  var swiper = new Swiper('.mySwiper-mob', options);
}

let widthMatchMobile = window.matchMedia('(min-width: 375px) and (max-width: 767px)');
widthMatchMobile.addEventListener('change', onWidthChangeMobile);
function onWidthChangeMobile(evt) {
  if (evt.matches) {
    options.slidesPerView = 2;
    var swiper = new Swiper('.mySwiper-mob', options);
  }
}

// POPULAR SECTION SWIPER FOR TABLET //

if (window.innerWidth < 1439 && window.innerWidth > 768) {
  options.slidesPerView = 3;
  var swiper = new Swiper('.mySwiper-mob', options);
}

let widthMatchTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
widthMatchTablet.addEventListener('change', onWidthChangeTablet);
function onWidthChangeTablet(evt) {
  if (evt.matches) {
    options.slidesPerView = 3;
    var swiper = new Swiper('.mySwiper-mob', options);
  }
}

// POPULAR SECTION SWIPER FOR DESKTOP //

if (window.innerWidth > 1439) {
  options.slidesPerView = 4;
  var swiper = new Swiper('.mySwiper-mob', options);
}

let widthMatchDesktop = window.matchMedia('(min-width: 1440px)');
widthMatchDesktop.addEventListener('change', onWidthChangeDesktop);
function onWidthChangeDesktop(evt) {
  if (evt.matches) {
    options.slidesPerView = 4;
    var swiper = new Swiper('.mySwiper-mob', options);
  }
}
