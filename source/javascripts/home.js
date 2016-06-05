$(document).ready(function(){

  new WOW().init();

  // Cool Fullscreen Overlay Navigation with jQuery and CSS3

  $('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
      nav_item_1 = $('nav li:nth-of-type(1)'),
      nav_item_2 = $('nav li:nth-of-type(2)'),
      nav_item_3 = $('nav li:nth-of-type(3)'),
      nav_item_4 = $('nav li:nth-of-type(4)'),
      nav_item_5 = $('nav li:nth-of-type(5)'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
      nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
      nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
      nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
      nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
      nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
      nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
      nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
      nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
  });

  // animsition page transition with jQuery and CSS3

  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-left',
    outClass: 'overlay-slide-out-left',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  $('#typeit').typeIt({
     strings: ['aboutme'],
     speed: 50,
     autoStart: false
  });



});
