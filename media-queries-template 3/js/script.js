$(document).ready(function(){
	
var color = 'blue';

$('div').click(function() {
	color = $(this).html();
	if(color == 'blue') {
		$('body').removeClass();
		$('body').addClass('blue');
	} else {
		$('body').removeClass();
		$('body').addClass('red');
	}
}); 



});