'failsafe'

//check for a button press, then submit form....
//Do mouseovers for the heatmap..

var data = []
const reviewResponse = { "neg": [ { "label": "neutral", "prob": 0.5101209869730974, "sentence": "Loved this place! Amazing food and wine! Service was great! Beautiful experience." } ], "pos": [ { "label": "pos", "prob": 0.5309496870464356, "sentence": "Very trendy busy hot spot and for good reason. Yummy large chesse board with fruit nuts and bread, chicken noodle soup with real chicken and veggies smile emoticon" }, { "label": "pos", "prob": 0.5018211347852204, "sentence": "Monday and Tuesday Bruschetta and Wine deals are where it's at!! Bruschetta is always on point!!" }, { "label": "pos", "prob": 0.8847359251137081, "sentence": "This place is amazing! They have amazing food.. Love the Bruschetta plate. It's very filling and great for 2! Make it an evening, enjoy some wine, very cool place to hang out!" }, { "label": "pos", "prob": 0.8691210697997551, "sentence": "Love this place in our neighborhood! food are very healthy and delicious. We normally order bruchetta with figs and prosciutto." }, { "label": "pos", "prob": 0.8765580402209874, "sentence": "This place has a great atmosphere. Plenty of good food and friendly service. Parking is at a premium so use the valet! Try the Butchers Block!" }, { "label": "pos", "prob": 0.5427032871374824, "sentence": "The butcher's block is always my go to. I sub the hummus for extra ricotta and soft baguette for the hard crispy toasts and it's fantastic every time." }, { "label": "pos", "prob": 0.8663103615658215, "sentence": "It is amazing for happy hour. Decent prices, great atmosphere." }, { "label": "pos", "prob": 0.6549399850557364, "sentence": "Great neighborhood joint can't beat the bruschetta and a cold brew to relax and unwind." }, { "label": "pos", "prob": 0.8812478451985777, "sentence": "Absolutely love this place. Great atmosphere. Nice wine selection too. The servers are very friendly and helpful with recommendations. Plus, their bruschetta is delish!" }, { "label": "pos", "prob": 0.8825371602417713, "sentence": "Good wine and excellent bruschetta. Great waitstaff." }, { "label": "pos", "prob": 0.7504120275752711, "sentence": "What can I add that others haven't already said? This place is adorable, the food is delicious, the wine selection is admirable and the employees are great. Go. Go now." }, { "label": "pos", "prob": 0.5417167973438385, "sentence": "Tomato jam bruschetta. That's all you need to know." }, { "label": "pos", "prob": 0.75602297351551, "sentence": "Love love love this place! If I could go every Sunday drink wine, eat a bruchetta board and listen to music I would. Mixed diverse crowd and great service! win win!" }, { "label": "pos", "prob": 0.9136916277198949, "sentence": "Pretty awesome service! Excellent food and great music!" }, { "label": "pos", "prob": 0.8909201900734743, "sentence": "Great food, great wine, awesome happy hour... what more could you want?!?!" }, { "label": "pos", "prob": 0.6850988058836684, "sentence": "If you have never been before, get the bruschetta. Sample five different versions. It's all good!" }, { "label": "pos", "prob": 0.5053219414820882, "sentence": "Brie and Apple with Fig bruschetta....I dont need to say anything else!!!! (except $5 glasses of wine til 5 all week and $5 mimosas til 5 on the weekends) Best place to spend a Sunday afternoon" }, { "label": "pos", "prob": 0.7197521789569644, "sentence": "Love everything about this place: The food, the atmosphere, the people watching! The happy hour is good too!" }, { "label": "pos", "prob": 0.6542201707799571, "sentence": "Food is great for a small snack. I wouldn't go there if you want a full dinner. Awesome deck to hang out." } ] }

$("#btn").click(function(){
	var object = {}
	object.latitude = parseFloat($('input[name="latitude"]').val())
	object.longitude = parseFloat($('input[name="longitude"]').val())
	object.monday_open = $('input[name="mon_open"]').val()
	object.tuesday_open = $('input[name="tue_open"]').val()
	object.wednesday_open = $('input[name="wen_open"]').val()
	object.thursday_open = $('input[name="thur_open"]').val()
	object.friday_open = $('input[name="fri_open"]').val()
	object.saturday_open = $('input[name="sat_open"]').val()
	object.sunday_open = $('input[name="sun_open"]').val()

	object.monday_close = $('input[name="mon_close"]').val()
	object.tuesday_close = $('input[name="tue_close"]').val()
	object.wednesday_close = $('input[name="wen_close"]').val()
	object.thursday_close = $('input[name="thur_close"]').val()
	object.friday_close = $('input[name="fri_close"]').val()
	object.saturday_close = $('input[name="sat_close"]').val()
	object.sunday_close = $('input[name="sun_close"]').val()

	object.wifi = parseInt($('input[name="wifi"]:checked').val())
	object.alcohol = parseInt($('input[name="alcohol"]:checked').val())
	object.price_range = parseInt($('input[name="price_range"]:checked').val())
	object.noise_level = parseInt($('input[name="noise_level"]:checked').val())
	object.late_night = Boolean($('input[name="late_night"]:checked').val())
	object.accepts_credit_card = Boolean($('input[name="accepts_credit_card"]:checked').val())
	object.drive_thru = Boolean($('input[name="drive_thru"]:checked').val())
	object.waiter_service = Boolean($('input[name="waiter_service"]:checked').val())
	object.host_large_group = Boolean($('input[name="host_large_group"]:checked').val())

	object.categories = $('#categories').val()

	get_ratings("4.2 Stars")
	show_reviews(reviewResponse)

	console.log(object)

	$.ajax({
	  url: "localhost:5000/get_ratings",
	  type: 'POST',
	  dataType: 'jsonp',
	  contentType: 'application/json',
	  processData: false,
	  data: object,
	  success: function (data) {
	    alert(JSON.stringify(data));
	  },
	  error: function(){
	    alert("Cannot get data");
	  }
	});
	$.ajax({
	  url: "localhost:5000/get_reviews",
	  type: 'POST',
	  dataType: 'jsonp',
	  contentType: 'application/json',
	  processData: false,
	  data: object,
	  success: function (data) {
	    alert(JSON.stringify(data));
	  },
	  error: function(){
	    alert("Cannot get data");
	  }
	});
	$.ajax({
	  url: "localhost:5000/get_nearby",
	  type: 'POST',
	  dataType: 'jsonp',
	  contentType: 'application/json',
	  processData: false,
	  data: object,
	  success: function (data) {
	    alert(JSON.stringify(data));
	  },
	  error: function(){
	    alert("Cannot get data");
	  }
	});
})




function get_ratings(rating) {
	alert(rating)
}

function get_nearby() {
	//list of nearby restuarants
}

function show_reviews(reviewResponse) {

	var table = document.getElementById('reviewTable')
	const length = Math.max(reviewResponse.pos.length, reviewResponse.neg.length)

	const pos = reviewResponse.pos
	const neg = reviewResponse.neg
	for(var i = 0; i < length; i++) {
		var row = table.insertRow();
		if(i < pos.length && pos[i].prob > .6){
			var cell1 = row.insertCell(0).innerHTML = pos[i].sentence;
			var cell2 = row.insertCell(1).innerHTML = pos[i].prob;
		}
		if(i < neg.length  && neg[i].prob < .4){
			if(!(i < pos.length && pos[i].prob > .6)){
				var cell1 = row.insertCell(0).innerHTML = '';
				var cell2 = row.insertCell(1).innerHTML = '';
			}
			var cell3 = row.insertCell(2).innerHTML = neg[i].sentence
			var cell4 = row.insertCell(3).innerHTML = neg[i].prob
		}
	}
}



///MapBox...
const latitude = 33.5
const longitude = -112
const options = {
	mapId: 'mapbox.outdoors',
  zoomControl: false,
  center: [latitude, longitude],
  latitude: latitude,
	longitude: longitude,
  zoom: 11
}
L.mapbox.accessToken = 'pk.eyJ1IjoibGVsYW5kbGVlIiwiYSI6IlF6YXRwcUUifQ.lOwg0AiYU4PwgX4bFgZvAw';
  var map = L.mapbox.map('map', options.mapId, options);

  L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [longitude, latitude]
    },
    properties: {
        title: 'Center Location',
        description: '1718 14th St NW, Washington, DC',
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
  }).addTo(map);


const heatMap = function(coordinates){
  const heatSettings = {
    radius: 20, 
    opacity: 1,
    gradient: {0.4: 'aqua', 0.65: 'orange', 1: 'maroon'},
    max: 1,
    minOpacity: .3
  }
  var heat = L.heatLayer(coordinates, heatSettings).addTo(map)
}

map.on('click', function(e) {
  const coordinates = [e.latlng.lat, e.latlng.lng]
  $('input[name="latitude"]').val(e.latlng.lat)
  $('input[name="longitude"]').val(e.latlng.lng)

  map.eachLayer(function(layer) {
  	if('_latlng' in layer){
  		map.removeLayer(layer)
  	}
  })

  L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [e.latlng.lng, e.latlng.lat]
    },
    properties: {
        title: 'Area of Interest',
        description: 'Potential Location',
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
  }).addTo(map);
});

d3.csv("./src/data/data_for_web.csv", function(error, data) {
	this.data = data;
  var category_list = []
  const heatCoordinates = _.map(data, function(loc){ return [parseFloat(loc.latitude), parseFloat(loc.longitude)] });

  console.log(data[0])

  const geojson = _.map(data, function(loc){
    var categories = loc.categories.split("'")
    _.forEach(categories, function(cat){
      if(!_.includes(category_list, cat)){
        category_list.push(cat)
      }
    })
    return {
      "type": "Feature",
      "geometry": {
        "coordinates": [loc.longitude,loc.latitude],
        "type": "Point"
      },
      "properties": {
        "title": loc.name,
        "marker-color": "#1087bf",
        "marker-size": "small",
        "marker-symbol": "harbor",
        "other": loc
      }
    }
  });

  heatMap(heatCoordinates)      
});

