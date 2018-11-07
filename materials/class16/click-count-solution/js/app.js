/*
  Click Count

  After the user clicks #click-me:

  1. Increment the variable count by 1 (think back to calculator-box)
  2: Update the UI by changing the HTML in #click-num to the new value of count
  3: If count === 5, change the background-color of <body> to red
  4: Else if count === 10, change the background-color of <body> to green
  5: Else if count === 15, change the background-color of <body> to blue
  6: Else, change the background-color of <body> to black

  HINT: Just like calculator-box, use the variable count (declared for you below) to keep track of the user's clicks
*/

var count = 0

$('#click-me').click(clickCount)

function clickCount() {
  // Increment the variable count by 1
  count = count + 1

  // Output the newly updated count in the UI
  $('#click-num').html(count)

  // Conditionally change the background-color of <body> based on count's value
  if (count === 5) {
    $('body').css('background-color', 'red')
  } else if (count === 10) {
    $('body').css('background-color', 'green')
  } else if (count === 15) {
    $('body').css('background-color', 'blue')
  } else {
    $('body').css('background-color', 'black')
  }
}
