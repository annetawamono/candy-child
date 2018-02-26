$(function() {
  $('div.toggle-nav-menu').click(function() {
	console.log("Clicked");
    $('.header-navigation-menu').toggleClass("transparent-nav-menu").toggleClass("make-it-white");
  });
});
