$('#submit').click(compare)

function compare() {
  var valueA = $('#a').val()
  var valueB = $('#b').val()

  if (valueA === valueB) {
    $('#comparison').html('===')
  } else if (valueA > valueB) {
    $('#comparison').html('>')
  } else if (valueA < valueB) {
    $('#comparison').html('<')
  }
}
