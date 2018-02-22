$(document).ready(function(){
  	var $el = $('div.row.bbcement-3>div:nth-child(2)');
	var $el2 = $('div.row.land-4>div:nth-child(1)');
   	$(window).scroll(function() {
       	var scroll = $(document).scrollTop();
       	$el.css({
           'background-position':'50% '+(-0.15*scroll+290)+'px'
       	});
		$el2.css({
			'background-position':'50% '+(-0.15*scroll)+'px'
		});
   });
});
