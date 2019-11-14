/*
    MAIN SCRIPTS - Last updated: 14.09.19, 12.04.18, 04-02-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    // NProgress.start(); // Start preloader bar - REMOVED
    $('input, textarea').placeholder(); // IE9 Patch
});

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

var wow = new WOW(
{
    boxClass: 'section',
    animateClass: 'animated',
    offset: 0
}
).init();

//-----------------------------------------------------------------
// FORM SHOW
//-----------------------------------------------------------------

$('[data-upload-multiple-trigger]').each(function(event){
    var $this = $(this);
    $this.click(function(event){
        event.preventDefault();
        var $hiddenContents = $this.parent().parent().find('[data-upload-multiple]');

        if ($hiddenContents.hasClass('hide')) {
            $hiddenContents.removeClass('hide');
            $this.text('Upload less images');
        } else {
            $hiddenContents.addClass('hide');
            $this.text('Upload more images');
        }
    })
});

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
// SCROLL-TO (NEW) - Chrome had problems in 2017 - 09.10.17
//-----------------------------------------------------------------

$('a[href*="#"]:not([href="#"], .accordion a)').click(function() {
    var id = $(this).attr('href');
    var endPos = $(id);

    if (endPos.length) {
        $.scrollTo(endPos.offset().top-100, 800);
        return false;
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
          return item.el.attr('title');
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

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
$(".hamburger").removeClass('hide').bind("click", function(e) {
    e.preventDefault();
    $("#off-canvas-menu").trigger("open.mm");
});

// var TOUCH_ENABLED = $(".touch").length;
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
// ACCORDION
// https://codepen.io/chriswrightdesign/pen/cmanI
// uses classList, setAttribute, and querySelectorAll
// if you want this to work in IE8/9 youll need to polyfill these
//-----------------------------------------------------------------

(function(){
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function(e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    }

    setAccordionAria = function(el1, el2, expanded) {
        switch(expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
            }
        }

    //function
    switchAccordion = function(e) {
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;

        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }

        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('animateIn');
    }

    for (var i=0,len=accordionToggles.length; i<len; i++) {
        // if (touchSupported) {
        //     accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        // }
        // if (pointerSupported){
        //     accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        // }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();

//==================================================
//
//==================================================