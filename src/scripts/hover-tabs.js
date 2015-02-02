/*
    HOVER TABS - Last updated: 01.02.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var hoverTabsImages = $('.hover-tabs-images li');

//-----------------------------------------------------------------
// Hover Tabs
//-----------------------------------------------------------------

$('.hover-tabs-nav .button').each(function(index){
	var $this = $(this);

	// Store index of button
	$this.data('index', index);

	$this.mouseover(function(){
		// console.log($this.data('index'));

		hoverTabsImages.hide();
		hoverTabsImages.eq($this.data('index')).show();
	});
});