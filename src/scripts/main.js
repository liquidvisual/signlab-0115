/*
    MAIN SCRIPTS - Last updated: 00-00-00
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

// window.onload = function(){
//     // NProgress.done();
// }

//-----------------------------------------------------------------
// Scroll To
//-----------------------------------------------------------------

$('a[href*=#]').each(function(){
  var $this = $(this);
  var href = $this.attr('href');

  // If there's a hash in the href and the string is more than 0 in length
  // fire the scrollTo plugin

  $this.click(function(){
    if (href.indexOf('#') == 0 && href.length > 1) {
      // console.log(href);
      $.scrollTo(href, 400);
    }
  });
});

//-----------------------------------------------------------------
// Offcanvas Menu
//-----------------------------------------------------------------

$("#off-canvas-menu").mmenu({ "offCanvas": { "position": "right" }});

//-----------------------------------------------------------------
// Gallery Module
//-----------------------------------------------------------------

$('.gallery-module').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
       enabled: true,
       navigateByImgClick: true,
       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
       titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
       }
    }
});

//-----------------------------------------------------------------
// Horizontal Slider
//-----------------------------------------------------------------

$('.horizontal-slider-module').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slide: "li",
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: false
      }
    }
  ]
});

//-----------------------------------------------------------------
// Slider Module Horizontal
//-----------------------------------------------------------------

$(".js-gallery-slider").each(function(){

    var $this = $(this);
    var $sliderNav = $('.slider-nav', $this);
    var $sliderFor = $('.slider-for', $this);

    $('a', $this).click(function(e){
        e.preventDefault();
    });

    // NAV
    $sliderNav.slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: $sliderFor,
        slide: 'li',
        dots: false,
        centerMode: false,
        vertical: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              vertical: false,
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              vertical: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],

    });

    // SLIDES
    $sliderFor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // slide: 'li',
        arrows: false,
        fade: true,
        asNavFor: $sliderNav
    });
});

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

// var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
$(".hamburger").removeClass('hide').bind("click", function() {

    $("#off-canvas-menu").trigger("open.mm");
});

// if (TOUCH_ENABLED) {
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    /*$(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });*/
// }
//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================
