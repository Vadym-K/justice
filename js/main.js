$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".nav");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	$(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.nav ul, .btn_menu').length) {
			if($(".nav").hasClass('open')) {
				$(".nav").removeClass('open');
			}
		}
	});
	$(".icon-search").on('click', function(){
		var $this = $(this).parents(".navbar");

		if($this.hasClass("open_form")){
			$this.removeClass("open_form");
		} else {
			$this.addClass('open_form');
		}
	});
	$(".show_filters").on('click', function(){
		var $this = $(this).parents(".sweatshirts_body");

		if($this.hasClass("show")){
			$this.removeClass("show");
		} else {
			$this.addClass('show');
		}
	});
	$(".carousel_slick").slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		appendArrows: '.appendArrows',
		arrows: true,
		initialSlide: 1,
		responsive: [
			{
			  	breakpoint: 639,
			  	settings: {
			  		dots: false,
			  }
			}
		]
	});
	$(".carousel_slick_secondary").slick({
		infinite: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		appendArrows: '.appendArrowsSecondary',
		arrows: true,
		initialSlide: 1
	});
	$('.sel_input').iCheck({
 		checkboxClass: 'icheckbox',
 		increaseArea: '20%'
	});
});
