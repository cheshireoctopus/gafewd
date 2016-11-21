$(window).scroll(function () {
	var offset = $(window).scrollTop();

	if (offset > 150) {
		$('header').addClass('header-offset')
	} else {
		$('header').removeClass('header-offset')
	}
})
