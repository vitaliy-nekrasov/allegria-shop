// HERO SWIPER //

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

// POPULAR SWIPER FOR MOBILE //

if (window.innerWidth < 767 && window.innerWidth > 375) {
  var swiper = new Swiper('.mySwiper-mob', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

let widthMatchMobile = window.matchMedia('(min-width: 375px) and (max-width: 767px)');
widthMatchMobile.addEventListener('change', onWidthChangeMobile);
function onWidthChangeMobile(evt) {
  if (evt.matches) {
    var swiper = new Swiper('.mySwiper-mob', {
      slidesPerView: 2,
      spaceBetween: 15,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

// POPULAR SWIPER FOR TABLET //

if (window.innerWidth < 1439 && window.innerWidth > 768) {
  var swiper = new Swiper('.mySwiper-mob', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

let widthMatchTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
widthMatchTablet.addEventListener('change', onWidthChangeTablet);
function onWidthChangeTablet(evt) {
  if (evt.matches) {
    var swiper = new Swiper('.mySwiper-mob', {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

// POPULAR SWIPER FOR DESKTOP //

if (window.innerWidth > 1439) {
  var swiper = new Swiper('.mySwiper-mob', {
    slidesPerView: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

let widthMatchDesktop = window.matchMedia('(min-width: 1440px)');
widthMatchDesktop.addEventListener('change', onWidthChangeDesktop);
function onWidthChangeDesktop(evt) {
  if (evt.matches) {
    var swiper = new Swiper('.mySwiper-mob', {
      slidesPerView: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
