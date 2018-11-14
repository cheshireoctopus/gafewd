/*

  Users should be able to:
  1. Enter an item into #item
  2. Click on #clickme
  3. New item is appended as a <li> element to the #list
  4. After the <li> is added, the text inside #item should clear

  Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list

  Bonus: Focus on #item after the item is added (research jQuery focus method)
  Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (if/else conditions)
  Legendary Bonus: Remove individual <li> elements when they are clicked (will have to use $(this) + research how to remove dynamically added elements)

  To Get Started:
  1. Attach a .click() event to #clickme
  2. This .click() should call a function: handleClick
  3. Inside handleClick, create a variable, newItem, that is equal to the value of #item
  4. handleClick should call a separate function, named appendItem, and pass it the variable newItem
  5. handleClick should then clear the text inside of #item
  6. Finally, write the function, appendItem (see above)

*/


// event handler for the #clickme button
$('#clickme').click(handleClick)

function handleClick() {
	// create a variable, newItem, that stores the user's input
	var newItem = $('#item').val()

	// if the user has not entered a value, trigger alert
	if (newItem.length === 0) {
		alert('You must enter a value!')
	} else {
		// call the appendItem function and pass it newItem as a variable
		appendItem(newItem)

		// focuses on the <input> so user doesn't have to click back into it, also sets the value of the input to an empty string (clearing it)
		$('#item')
			.focus()
			.val('')
	}
}

// appends a new <li> element containing the user's text to #list
function appendItem(item) {
	$('#list').append('<li>' + item + '</li>')
}

// removes dynamically-created <li> elements on click
$(document).on('click', 'li', handleRemove)

function handleRemove() {
	$(this).remove()
}
