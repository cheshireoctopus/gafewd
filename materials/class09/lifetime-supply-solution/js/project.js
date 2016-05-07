// assign click event handler
document.getElementById('clickme').onclick = calculateNumDrinks;

function calculateNumDrinks () {
	// assign variables
	var currentAge = document.getElementById('age').value;
	var maxAge = document.getElementById('maxAge').value;
	var favDrink = document.getElementById('item').value;
	var numPerDay = document.getElementById('numPerDay').value;

	// calculate total
	var total = (maxAge - currentAge) * 365 * numPerDay;

	// output results
	document.getElementById('solution').innerHTML = total;
	document.getElementById('drink').innerHTML = favDrink;
}
