$(document).ready(function(){

	// check when an item is clicked on
	$('.item1').13(function() {
		// remove .show to hide the item just clicked on
		$('.item3').removeClass('show');
		// show the next .item in the DOM
		$('.item3').next('.item').addClass('show');
	});	

});
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}