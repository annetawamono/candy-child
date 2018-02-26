$(function() {
	var offset = 330;
  	$('div.toggle-nav-menu').click(function() {
		//console.log("Clicked");
		if($(window).scrollTop() <= offset) {
    		$('.header-navigation-menu').toggleClass("transparent-nav-menu").toggleClass("make-it-white");
		}
	});
});
