/*
  1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
  2. Use .attr() to change the `src` attribute of #bigimage to correspond to the src of the image that was clicked
*/

var bigImg = $('#bigimage')

function swapFirstPic() {
  bigImg.attr('src', 'img/1.jpg')
}

function swapSecondPic() {
  bigImg.attr('src', 'img/2.jpg')
}

function swapThirdPic() {
  bigImg.attr('src', 'img/3.jpg')
}

function swapFourthPic() {
  bigImg.attr('src', 'img/4.jpg')
}

$('#first').click(swapFirstPic)
$('#second').click(swapSecondPic)
$('#third').click(swapThirdPic)
$('#fourth').click(swapFourthPic)


/*
  Refactored with $(this)
*/

// function swapPic() {
//  var newSrc = $(this).attr('src')
//  bigImg.attr('src', newSrc)  
// }

// $('.thumb').click(swapPic)
