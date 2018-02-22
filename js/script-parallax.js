$(document).ready(function(){
  var $el = $('div.row.bbcement-3>div:nth-child(2)');
   $(window).scroll(function() {
       var scroll = $(document).scrollTop();
       console.log(scroll);
       $el.css({
           'background-position':'50% '+(-0.15*scroll+290)+'px'
       });
   });
});
