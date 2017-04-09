// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
var bigImg = $('#bigimage')

$('#first').click(function () {
	bigImg.attr('src', 'img/1.jpg')
})

$('#second').click(function () {
	bigImg.attr('src', 'img/2.jpg')
})

$('#third').click(function () {
	bigImg.attr('src', 'img/3.jpg')
})

$('#fourth').click(function () {
	bigImg.attr('src', 'img/4.jpg')
})

// Refactored with $(this)
// $('.thumb').click(function () {
// 	var newSrc = $(this).attr('src')
// 	bigImg.attr('src', newSrc)
// })
