// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

$(document).ready(function () {
	// 6: keep track of your program's state by defining a total variable
	var total = 0;

	// 1: add .submit to #entry
	$('#entry').submit(function (event) {
		// 2: prevent submit's default behavior
		event.preventDefault();

		// 3: create a variable, newEntry, to store user input from #newEntry
		var newEntry = $('#newEntry').val();

		// 4: call parseFlot on newEntry to transform it from a string to a number
		newEntry = parseFloat(newEntry);

		// 5: append a new <tr> to #entries
		$('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>');

		// 6: update total variable
		total = total + newEntry

		// 6 (ctn): update #total element
		$('#total').text('$' + total)

		// 7: clear #newEntry
		$('#newEntry').val('')
	});

})
