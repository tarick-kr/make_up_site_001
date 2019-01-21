$(document).ready(function () {
    svg4everybody({});

	//
	// $('a[href*="#"]').on('click.smoothscroll', function( e ){
	// 	var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
	// 	if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
	// 	var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
	// 	if( ! $target.length ) return;
	// 	e.preventDefault();
	// 	$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 200, 'swing', function(){
	// 		window.location.hash = hash;
	// 	});
	// });


	$("#my-menu").mmenu({
		extensions: [
			"fx-menu-zoom",
			"fx-listitems-slide",
			"position-right"],
		onClick : {
			close          : true,
			preventDefault : false,
		},
		navbar: {
			title: "<a class='header-logo--m-menu' href='#'><div class='logo-img--m-menu'><img src='/static/images/general/logo.png'></div><span class='logo-title--m-menu'>OENRIQUE</span><span class='logo-subtitle--m-menu'>UX/UI EXPERT</span></a>"
		}
	});


	var api = $("#my-menu").data("mmenu");
	api.bind("open:finish", function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind("close:finish", function() {
		$('.hamburger').removeClass('is-active');
	});

});