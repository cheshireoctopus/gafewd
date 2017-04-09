// The following can be written in 3 lines of jQuery/JavaScript!

// 1. Add a .click() handler to elements with the class of .row
// 2. Associate this .click() handler with an anoymous function (in other words, "pass" .click() and anonymous function)
// 3. Inside the body of the anonymous function, use the concept of $(this) to .find() the <div class="wrapper">
// 4. Once you find the .wrapper, use the .slideToggle() function to trigger the desired behavior

$('.row').click(function () {
	$(this).find('.wrapper').slideToggle();
});
