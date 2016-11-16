$(document).ready(function () {

	$('#myForm').submit(function (event) {
		event.preventDefault();

		var name = $('#name-input').val();

		$('#target').text(name);
	})

	$('#name-input').keydown(function (evt) {
		evt.preventDefault();
	 	console.log(evt);
	})

	$('#social a').click(function (e) {
		e.preventDefault();

		console.log(e);
	})

})
