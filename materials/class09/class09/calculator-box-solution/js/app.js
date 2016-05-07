$(document).ready(function(){
	// define the "initial  state" of our application; in otherwords, when the program first runs, we want to set a variable, total, equal to 0
	var total = 0;

	$('#a10').click(function(){
		total = total + 10;
		$('#out').html(total);
	});

	$('#a20').click(function(){
		total = total + 20;
		$('#out').html(total);
	});

	$('#a30').click(function(){
		total = total + 30;
		$('#out').html(total);
	});

	$('#n10').click(function(){
		total = total - 10;
		$('#out').html(total);
	});

	$('#n20').click(function(){
		total = total - 20;
		$('#out').html(total);
	});

	$('#n30').click(function(){
		total = total - 30;
		$('#out').html(total);
	});

	$('#red').click(function(){
		$('#out').css('background-color', 'red');
	});

	$('#blue').click(function(){
		$('#out').css('background-color', 'blue');
	});

	$('#out').click(function(){
		// reset total to 0
		total = 0;

		// an example of jQuery "chaining" - we can chain methods together that are being called on the same object
		// in this case, .css() and .html() are both being called on $('#out')
		$('#out')
			.css('background-color', 'white')
			.html(total);
	});

});
