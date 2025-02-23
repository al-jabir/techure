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
  var brand = new Swiper('.aj-brand-active', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freeMode: true,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  // Testimonials Slider (Swiper)
  var testimonials = new Swiper('.mySwiper', {
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

  // Team Slider (Swiper)

  var team = new Swiper('.aj-team-active', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.aj-team-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // bento slider
  var bento = new Swiper('.aj-bento-active', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.aj-bento-pagination',
      clickable: true,
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
