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

  //  offcanvas menu handlers

  $('.offcanvas-toggle').on('click', function () {
    $('.aj-offcanvas').addClass('aj-offcanvas-open');
    $('.aj-offcanvas-overlay').addClass('aj-offcanvas-overlay-open');
  });
  $('.aj-offcanvas-toggle-close,.aj-offcanvas-overlay').on(
    'click',
    function () {
      $('.aj-offcanvas').removeClass('aj-offcanvas-open');
      $('.aj-offcanvas-overlay').removeClass('aj-offcanvas-overlay-open');
    }
  );

  // search bar handlers

  $('.aj-search-toggle').on('click', function () {
    $('.aj-header-search-bar').addClass('aj-search-open');
    $('.aj-offcanvas-overlay').addClass('aj-offcanvas-overlay-open');
  });
  $('.aj-search-close, .aj-offcanvas-overlay').on('click', function () {
    $('.aj-header-search-bar').removeClass('aj-search-open');
    $('.aj-offcanvas-overlay').removeClass('aj-offcanvas-overlay-open');
  });

  //  mobile menu

  var ajMenuWrap = $('.aj-mobile-menu-active > ul').clone();
  var ajSideMenu = $('.aj-offcanvas-menu nav');
  ajSideMenu.append(ajMenuWrap);
  if ($(ajSideMenu).find('.submenu, .aj-mega-menu').length != 0) {
    $(ajSideMenu)
      .find('.submenu, .aj-mega-menu')
      .parent()
      .append(
        '<button class="aj-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    '.aj-offcanvas-menu nav > ul > li button.aj-menu-close, .aj-offcanvas-menu nav > ul li.has-dropdown > a'
  );
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
      $(this).parent().addClass('active');
      $(this).siblings('.submenu, .aj-mega-menu').slideDown();
    } else {
      $(this).siblings('.submenu, .aj-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
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

  // process slider

  var process = new Swiper('.aj-process-active', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.aj-process-btn__next',
      prevEl: '.aj-process-btn__prev',
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

  var heroBg = new Swiper('.aj-hero-active', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 400,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    navigation: {
      nextEl: '.aj-hero-btn__next',
      prevEl: '.aj-hero-btn__prev',
    },
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    // },
  });

  // var sliderThumbs = new Swiper('.mySwiper', {
  //   // direction: 'vertical',
  //   direction: 'horizontal',
  //   speed: 400,
  //   touchRatio: 0.2,
  //   slideToClickedSlide: true,
  //   loop: true,
  //   slidesPerView: 1,

  //   loopedSlides: 4,
  //   navigation: {
  //     nextEl: '.upk-button-next',
  //     prevEl: '.upk-button-prev',
  //   },
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 1,
  //     },
  //     1024: {
  //       slidesPerView: 1,
  //     },
  //   },
  // });

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
