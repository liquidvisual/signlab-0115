/*
    FILTER - Last updated: 16.10.16

   	Usage:

	-- FILTER --

   	<ul class="fjs-filter-list text-center">
   	    <li class="active"><a data-filter="all" href="#">All</a></li>
   	    <li><a href="#" data-filter="nature">Nature</a></li>
   	    <li><a href="#" data-filter="sport">Sport</a></li>
   	</ul>

	-- GALLERY MODULE --

   	<ul class="gallery-module small-block-grid-1 medium-block-grid-2 large-block-grid-4 fjs-gallery">
	    <li data-group=",nature,sport,"></li>
	</ul>
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// FILTER
//-----------------------------------------------------------------

$('.fjs-filter-group').each(function(){

	var $groupScope = $(this);

	$('.fjs-filter-list > li > a', $groupScope).click(function(event){

		var $this = $(this);
		var filterGroup = $this.attr('data-filter');

		event.preventDefault();

		//==================================================
		// ACTIVE STATE
		//==================================================

		$('.fjs-filter-list > li', $groupScope).removeClass('active');
		$this.parent().addClass('active');

		//==================================================
		// FILTER
		//==================================================

		if (filterGroup == 'all') {
			$('.fjs-gallery li', $groupScope).removeClass('inactive');
		} else {
			$('.fjs-gallery li', $groupScope).addClass('inactive');
			$('.fjs-gallery li[data-group*='+filterGroup+']', $groupScope).removeClass('inactive');
		}

		loadGallery();
	});
});