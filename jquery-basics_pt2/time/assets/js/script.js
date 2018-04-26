$('document').ready(function(){
	$('img').click(function(){
		$(this).attr('src', 'https://i.imgur.com/Z9idPCT.png');
    $(this).addClass('bounce');
   //* $('heart').click(function(){
//*		$(this).attr('src', 'https://i.imgur.com/jVMROKx.png');
//*    $(this).addClass('bounce');
	});
	setTimeout(function() { 
  	window.location.href = 'https://awdreen.github.io/interactive1/jquery-basics_pt2/scroll/index.html'; 
	}, 2000);

	
});