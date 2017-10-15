// 1. Inside of the calculateDrinks function, use document.querySelector()
// and the .value method to store inputs from the following elements into variables:
//
// #current-age
// #max-age
// #fav-drink
// #num-per-day
//
// ex: var currentAge = document.querySelector('#current-age').value

// 2. Then, still inside of the calculateDrinks function, create a variable, drinksLeft,
// which represents the result of your (maxAge - currentAge) * 365 * numPerDay

// 3. Lastly, output the correct values to for the user

function calculateDrinks() {
  // 1. Store inputs as variables here:
  var currentAge = ...

  // 2. Caclulate drinksLeft
  var drinksLeft = ...

  // 3. Output result for user to see:
  document.querySelector('#total-num-of-drinks-output').innerHTML = ...
  document.querySelector('#drink-output').innerHTML = ...
}

document.querySelector('#click-me').onclick = calculateDrinks;

