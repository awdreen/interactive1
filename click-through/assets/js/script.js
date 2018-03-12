$(document).ready(function(){

	// check when an item is clicked on
	$('.item').click(function() {
		// remove .show to hide the item just clicked on
		$(this).removeClass('show');
		// show the next .item in the DOM
		$(this).next('.item').addClass('show');
	});	

});
