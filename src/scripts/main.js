/*
    MAIN SCRIPTS - Last updated: 04-02-15
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

    $('input, textarea').placeholder(); // IE9 Patch
});

$(window).load(function() {
    NProgress.done();
});

// window.onload = function(){
//     // NProgress.done();
// }

//-----------------------------------------------------------------
// Hero Collage Click (Staff)
//-----------------------------------------------------------------

$('.lv-hero-module.collage-style .lv-hero li').each(function(){

  var allPanels = $('.collage-info-panel');

  $(this).click(function(){
    var panelVisible = $('.collage-info-panel', $(this)).css('opacity') == 1;

    allPanels.removeClass('opacity-show');

    if (!panelVisible) {
      $('.collage-info-panel', $(this)).addClass('opacity-show');
    }
  });
});

//-----------------------------------------------------------------
// WOW.js - Scroll Fade In
//-----------------------------------------------------------------

if (!TOUCH_ENABLED) {
  var wow = new WOW(
  {
      boxClass:     'section',      // default
      animateClass: 'animated', // default
      offset:       0           // default
  }
  ).init();
}

//-----------------------------------------------------------------
// Toggle Excess Items (Eg Gallery pics that exceed amount)
//-----------------------------------------------------------------

$(".item-expander").click(function(e){
    var $this = $(this); // JQ object
    e.preventDefault();
    this.toggleState = this.toggleState ? false : true;

    // Toggle text - easy way
    // http://stackoverflow.com/questions/3442394/jquery-using-text-to-retrieve-only-text-not-nested-in-child-tags

    $this.contents().filter(function(){
      return this.nodeType == 3;
    })[0].nodeValue = this.toggleState ? "Show Less " : "Show More ";

    $(".excess").toggleClass('hide animated fadeIn');
    $("i", $this).toggleClass('fa-angle-down');
});

//-----------------------------------------------------------------
// Scroll To
//-----------------------------------------------------------------

$('a[href*=#]').each(function(){
  var $this = $(this);
  var href = $this.attr('href');

  if (href.indexOf('#') == 0 && href.length > 1) {
    var endPos = $(href);
    // If there's a hash in the href and the string is more than 0 in length
    // fire the scrollTo plugin

    $this.click(function(e){
        e.preventDefault();
        // console.log(href);
        $.scrollTo(endPos.offset().top-100, 800);
    });
  }
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
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
$(".hamburger").removeClass('hide').bind("click", function(e) {
    e.preventDefault();
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
