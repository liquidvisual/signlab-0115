/*
    ORDER-FORM.JS - Last updated: 03.07.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Controls checkbox dropdowns
//-----------------------------------------------------------------

// // To presever consistency with markup
// $('.js-required').not(':visible').removeAttr('required');

// // Loop through inputs, setup triggers
// $('.checkbox, .radio').each(function(){
// 	var $this = $(this);
// 	$this.click(function() {
// 		setForm($(this));
// 	});
// 	// setup triggers to preserve for refresh
// 	setForm($(this));
// });

// // setForm
// function setForm(target) {
// 	var $this = target;
// 	var id = $this.find('input').attr('id');
// 	var checked = $('input', $this).prop('checked');
// 	var dropdown = $('[data-dropdown='+id+']');

//     if (checked) {
//     	// If Radio - hide all groups
//     	if ($this.hasClass('radio')) {
//     		$('[data-dropdown="select-theme"], [data-dropdown="personalised"]').addClass('hide').addClass('animated fadeIn');
//     	}
//     	// Show dropdown
//     	dropdown.removeClass('hide').addClass('animated fadeIn');
//     	dropdown.find('.js-required').prop('required', true);
//     } else {
//     	// Hide dropdown
//     	dropdown.addClass('hide').removeClass('animated fadeIn');
//     	dropdown.find('.js-required').removeAttr('required');
//     }
// }

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------