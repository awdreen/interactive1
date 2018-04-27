$('document').ready(function(){

   $('img').click(function(){
		$(this).attr('src', 'https://i.imgur.com/jVMROKx.png');
    $(this).addClass('bounce');
	});
	setTimeout(function() { 
  	window.location.href = 'https://awdreen.github.io/interactive1/jquery-basics_pt2/time/index.html'; 
	}, 2000);

		$('a').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href

	    // do something while timeOut ticks ... 

	    setTimeout(function(){
	         window.location = goTo;
	    },2000);       
	}); 
});