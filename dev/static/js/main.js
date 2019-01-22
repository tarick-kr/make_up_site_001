$(document).ready(function () {

    svg4everybody({});

	// Настройки плагина mmenu
	$("#my-menu").mmenu({
		extensions: [
			"fx-listitems-slide",
			"position-right"],
		onClick : {
			close          : true,
			preventDefault : true
		},
		pageScroll: {
			scroll: true,
			update: true
		},
		navbar: {
			title: "<a class='header-logo--m-menu' href='#'><div class='logo-img--m-menu'><img src='/static/images/general/logo.png'></div><span class='logo-title--m-menu'>OENRIQUE</span><span class='logo-subtitle--m-menu'>UX/UI EXPERT</span></a>"
		}
	});

	// Иннициализация и настройка кнопки (гамбургера) mmenu
	let api = $("#my-menu").data("mmenu");
	api.bind("open:finish", function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind("close:finish", function() {
		$('.hamburger').removeClass('is-active');
	});

	// Скрипт плавной прокрутки до якоря на десктопной версии
	$(window).resize(function() {
		if ( $(window).width() > 670 ) {
			$('a[href*="#"]').on('click.smoothscroll', function( e ){
				var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
				if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
				var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
				if( ! $target.length ) return;
				e.preventDefault();
				$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
					window.location.hash = hash;
				});
			});
		}
	});


	$(window).scroll(function(){
	//Определяет положение полосы прокрутки и если ниже 100px, то появляется кнопка.
		if ($(this).scrollTop() > 400) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
	//Есть еще два значения:
	//0 - страница будет прокручена до самого налача
	//600 - скорость анимации прокрутки
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});


});