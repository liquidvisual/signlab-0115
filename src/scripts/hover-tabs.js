/*
    HOVER TABS - Last updated: 03.02.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Hover Tabs
//-----------------------------------------------------------------

$('.hover-tabs').each(function(){
	var $module = $(this);
	var $hoverTabsImages = $('.hover-tabs-images li', $module);

	$('.hover-tabs-nav .button', $module).each(function(index){
		var $this = $(this);

		// Store index of button
		$this.data('index', index);

		// On Hover match up image and show it (hide all others)
		$this.mouseover(function(){
			$hoverTabsImages.hide();
			$hoverTabsImages.eq($this.data('index')).show();
		});
	});
});