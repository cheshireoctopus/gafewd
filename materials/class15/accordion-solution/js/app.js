// The following can be written in 4 lines of jQuery/JavaScript!

// 1. Add a .click() handler to elements with the class of .row
// 2. Associate this .click() handler with a function (Make sure to think of a proper name for this function)
// 3. Inside the body of this function, use $(this) as a starting point to find the <div class="wrapper">
// 4. Once you find the .wrapper, use the .slideToggle() function to trigger the desired behavior

function toggleRow() {
  $(this).find('.wrapper').slideToggle()
}

$('.row').click(toggleRow)
