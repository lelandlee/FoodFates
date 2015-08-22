'failsafe'

//check for a button press, then submit form....
//Do mouseovers for the heatmap..

console.log($('input[name="FirstName"]').val())
$("#btn").click(function(){
	var object = {}
	object.latitude = $('input[name="latitude"]').val()
	object.longitude = $('input[name="longitude"]').val()
	object.mon_open = $('input[name="mon_open"]').val()
	object.tue_open = $('input[name="tue_open"]').val()
	object.wen_open = $('input[name="wen_open"]').val()
	object.thur_open = $('input[name="thur_open"]').val()
	object.fri_open = $('input[name="fri_open"]').val()
	object.sat_open = $('input[name="sat_open"]').val()
	object.sun_open = $('input[name="sun_open"]').val()

	object.mon_close = $('input[name="mon_close"]').val()
	object.tue_close = $('input[name="tue_close"]').val()
	object.wen_close = $('input[name="wen_close"]').val()
	object.thur_close = $('input[name="thur_close"]').val()
	object.fri_close = $('input[name="fri_close"]').val()
	object.sat_close = $('input[name="sat_close"]').val()
	object.sun_close = $('input[name="sun_close"]').val()

	object.wifi = $('input[name="wifi"]:checked').val()
	object.alcohol = $('input[name="alcohol"]:checked').val()
	object.price_range = $('input[name="price_range"]:checked').val()
	object.late_night = $('input[name="late_night"]:checked').val()
	object.accepts_credit_card = $('input[name="accepts_credit_card"]:checked').val()
	object.drive_thru = $('input[name="drive_thru"]:checked').val()
	object.waiter_service = $('input[name="waiter_service"]:checked').val()
	object.host_large_group = $('input[name="host_large_group"]:checked').val()

	object.categories = $('#categories').val()

	console.log($('#categories').val())
	console.log(object)
})




function get_ratings() {
	const rating = (Math.random()*5).toFixed(1)
	alert(rating)
}

function get_nearby() {
	//list of nearby restuarants
}

function show_reviews() {
	// Create an empty <tr> element and add it to the 1st position of the table:
	var table = document.getElementById('reviewTable')
	var row = table.insertRow();

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0).innerHTML = "NEW CELL1";
	var cell2 = row.insertCell(1).innerHTML = "NEW CELL2";
	var cell3 = row.insertCell(2).innerHTML = "NEW CELL3";
	var cell4 = row.insertCell(3).innerHTML = "NEW CELL4";
}