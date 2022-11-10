
$(document).ready(function(){
	// if($(window).innerWidth() < 768){
	// 	$('.project .row').slick({
	// 		autoplay:false,
	// 		arrow:false,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		infinite: false,
	// 	});
	// }

	$('.slide-banner').slick({ 
		autoplay:false,
		arrow:false,
		slidesToShow: 1, 
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	}); 

	$('.item-job h3').click(function(e){
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});

})

