// Create click event handler
document.getElementById('colorbutton').onclick = changeColor;

function changeColor () {
	// assign variables
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;

	// create rgb string from variables
	var rgbStr = "rgb(" + red + "," + green + "," + blue + ")";

	// change innerHTML of colorfultext element
	document.getElementById('colorfultext').innerHTML = rgbStr;

	// change the body's background color
	document.getElementById('body').style.backgroundColor = rgbStr;
}
