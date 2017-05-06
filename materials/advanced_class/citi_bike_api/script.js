// var map = new google.maps.Map(document.querySelector('#map'), {
// 	center: {
// 		lat: 40.7128,
// 		lng: -74.0059
//   	},
//   	zoom: 12,
// });

// var marker = new google.maps.Marker({
// 	position: {
// 		lat: 40.7128,
// 		lng: -74.0059
// 	},
// 	map: map,
// });


$.ajax({
  	type: 'GET',
  	url: 'http://api.citybik.es/citi-bike-nyc.json',
  	success: function (response) {
  		console.log(response)
	},
});
