$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

	// toggle mobile nav
	$('#burger').click(function () {
		$('#mobile-nav').slideToggle();
	});
})
