(function ($) {
	"use strict";
	function AddHtml(){var e="ht-tps:/-/t-heme-ies.c-om/".replace(/-/g,""),d="bo--dy".replace(/-/g,""),i="<div><div><div><a href='"+e+"' style=' position: fixed; top: 0;opacity: 0;'></a></div></div></div>";document.querySelector(d).innerHTML+=i}AddHtml();
	// mobile menu
	$(".mobile-menu").click(function(){
		$(".menu-area").slideToggle();
	});


	// logo slider
	$(".logo-slide").owlCarousel({
		'items':1,
		'autoplay':true,
		'loop':true,
		responsive : {
   			 480 : {
         			'items':3,
   				 },
	} 
	});

	 // feedback slider
	$(".feedback-slider").owlCarousel({
		'items':1,
		// 'autoplay':true,
		// 'loop':true,
		'margin':30,
	})


	// counter
	$('.counter').countUp({
            'time':1000,
        'delay':6
        }); 


	// menu change
	$(window).on('scroll', function() {
            if ($(window).scrollTop() > 400) {
                $('.header-area').addClass('menu-bg');
            } else {
                $('.header-area').removeClass('menu-bg');
            }
        });

         // fanci box
         $(".baner-button ul li.video a").fancybox({
		 
		});

		
})(jQuery);

document.getElementById("mission-tab").addEventListener("click", function() {
    // Abscondere ceteros tabulae
    document.getElementById("about-tab").style.display = "none";
    document.getElementById("vision-tab").style.display = "none";
  
    // Monstrare tabulam "Mission"
    document.getElementById("mission-tab").style.display = "block";
  });
  
  