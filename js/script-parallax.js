$(document).ready(function(){
	//bbcement
  	var $el = $('div.row.bbcement-3>div:nth-child(2)');
	//land
	var $el2 = $('div.row.land-4>div:nth-child(1)');
	//evalast
	var $el3 = $('div.row.evalast-4>div:nth-child(1)');
	//welcome
	var $el4 = $('div.row.welcome-3>div:nth-child(2)');
   	$(window).scroll(function() {
       	var scroll = $(document).scrollTop();
       	$el.css({
           'background-position':'50% '+(-0.15*scroll+290)+'px'
       	});
		$el2.css({
			'background-position':'50% '+(-0.15*scroll)+'px'
		});
		$el3.css({
			'background-position':'50% '+(-0.15*scroll)+'px'
		});
		$el4.css({
			'background-position':'50% '+(-0.15*scroll)+'px'
		});
   });
});
