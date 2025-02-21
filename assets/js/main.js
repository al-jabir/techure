(function ($) {
  'use strict';

  var windowOn = $(window);

  windowOn.on('load', function () {
    wowAnimation();
  });

  // preloader

  windowOn.on('load', function () {
    $('#loading').fadeOut(500);
  });

  // Sticky Header

  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $('#header-sticky').removeClass('header-sticky');
    } else {
      $('#header-sticky').addClass('header-sticky');
    }
  });

  // Back to Top Button
  var btn = $('#back-to-top');
  windowOn.scroll(function () {
    if (windowOn.scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Brand Slider (Swiper)
  var swiper1 = new Swiper('.aj-brand-active', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  // Testimonials Slider (Swiper)
  var swiper2 = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  // WOW Animation
  function wowAnimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
})(jQuery);
