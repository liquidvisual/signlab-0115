/*
    MAIN SCRIPTS - Last updated: 18-10-16
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// READY
//-----------------------------------------------------------------

$(function() {
  $('input, textarea').placeholder(); // IE9 Patch
});

//-----------------------------------------------------------------
// GALLERY MODULE
//-----------------------------------------------------------------

function loadGallery() {
   $('.fjs-gallery').each(function(){
       $(this).magnificPopup({
         delegate: 'li:not(.inactive) a',
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
               return item.el.attr('title') + '';
            }
         }
     });
   });
}

loadGallery();

//-----------------------------------------------------------------
// DEV: COMMAND+S for screen width
//-----------------------------------------------------------------

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