// Create click event handler
document.querySelector('#colorbutton').onclick = changeColor;

function changeColor () {
	// assign variables
	var red = document.querySelector('#red').value;
	var green = document.querySelector('#green').value;
	var blue = document.querySelector('#blue').value;

	// create rgb string from variables
	var rgbStr = "rgb(" + red + "," + green + "," + blue + ")";

	// change innerHTML of colorfultext element
	document.querySelector('#colorfultext').innerHTML = rgbStr;

	// change the body's background color
	document.querySelector('body').style.backgroundColor = rgbStr;
}
