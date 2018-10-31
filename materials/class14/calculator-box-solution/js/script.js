 /*
	
	Add .click() handlers for each of the boxes:

	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

	C) #red and #blue should change the background color of #out to red and blue, respectively
	
	D) #out should change the background of #out to white, and set the value back to zero

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/

var total = 0

function add10() {
	total = total + 10
	$('#out').html(total)	
}

function add20() {
	total = total + 20
	$('#out').html(total)	
}

function add30() {
	total = total + 30
	$('#out').html(total)	
}

function minus10() {
	total = total - 10
	$('#out').html(total)	
}

function minus20() {
	total = total - 20
	$('#out').html(total)	
}

function minus30() {
	total = total - 30 
	$('#out').html(total)	
}

function changeRed() {
	$('#out').css('background', 'red')
}

function changeBlue() {
	$('#out').css('background', 'blue')
}

function reset() {
	total = 0

	$('#out')
		.text(total)
		.css('background', 'white')
}

$('#a10').click(add10)
$('#a20').click(add20)
$('#a30').click(add30)
$('#m10').click(minus10)
$('#m20').click(minus20)
$('#m30').click(minus30)
$('#red').click(changeRed)
$('#blue').click(changeBlue)
$('#out').click(reset)
