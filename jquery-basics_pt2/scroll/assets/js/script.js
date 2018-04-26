$('document').ready(function(){
	$('img').click(function(){
		$(this).attr('src', 'https://i.imgur.com/Z9idPCT.png');
    $(this).addClass('bounce');
   $('img').click(function(){
		$(this).attr('src', 'https://i.imgur.com/jVMROKx.png');
    $(this).addClass('bounce');
	});
	setTimeout(function() { 
  	window.location.href = 'http://google.com'; 
	}, 2000);

	
});