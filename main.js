/* this is the javascript behind our app */
// API call
// $(document).ready(function() {
//   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + ",uk&units=metric&APPID=aedeb5fdc56589e223a1b1d08144eb58").then(function(data) {
//     console.log(data);
//     var weather = document.getElementById('weather');
//     weather.innerText = data.main.temp;
//   })
// });

var directionsService;
var directionsDisplay;
var map;
function initMap() {
	directionService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: {lat: 41.85, lng: -87.65}
	});
	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('location').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('location').value,
		travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

$("#start").keyup(function(event){
	if(event.keyCode == 13){
		$("#button-start").click();
	}
});

$("#location").keyup(function(event){
    if(event.keyCode == 13){
        $("#button-location").click();
    }
});

var start;
	function myFunc2() {
		start=ucwords(document.getElementById('start').value,true);
		console.log(start);
		$("#main1").fadeOut(function(){
			$("#main2").fadeIn();
		});
	}

	var city;
	function myFunction(){
		city = ucwords(document.getElementById('location').value,true);
		console.log(city);
		directionsApi();
	}
	
	function func(item, index){
		console.log(item+": "+index);
		console.log(item.lat);
	}
	
	function directionsApi(){
	var directionsService = new google.maps.DirectionsService;
	var directionsRequest = {
            origin: start,
            destination: city,
			travelMode: 'DRIVING'
        };
        directionService.route(directionsRequest, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
				response.routes[0].overview_path.forEach(func);
				console.log(response.routes[0].overview_path);			
            //do work with response data
            }
            else{
				console.log(1);
                //Error has occured
			}
        });
		/*$.ajax({
		origin: start,
		destination: city;
        type: 'GET',
        url: "https://maps.googleapis.com/maps/api/directions/json?origin=\""+start+"\"&destination=\""+city+"\"&key=AIzaSyBhkNCUTF-zdtA1Jh1RNee1Afx9qSEgz1M",
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (data) {
			console.log(data);
        },
        error: function (e) {
            console.log(e);
        }*/
	}
	
    /*function myFunction() {
      var city = ucwords(document.getElementById('location').value,true);
      console.log(city);
      $("#div1").fadeOut(function(){
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=48a8c111df81fd58c7240c8f432660e7").then(function(data) {
        var weather = document.getElementById('weather');
		city=ucwords(city,true);
		  var ws = data.wind.speed;
		  var w;
		  if(ws<1)w="calm Winds";
		  else if(ws<1.5)w="light air";
		  else if(ws<3.3)w="light breeze";
		  else if(ws<5.5)w="gentle breeze";
		  else if(ws<7.9)w="moderate breeze";
		  else if(ws<10.7)w="fresh breeze";
		  else if(ws<13.8)w="strong breeze";
		  else if(ws<17.1)w="high wind";
		  else if(ws<20.7)w="gale";
		  else if(ws<24.4)w="strong gale";
		  else if(ws<28.4)w="storm";
		  else if(ws<32.6)w="violent storm";
		  else w="hurricane";
		  w+=" at a speed of "+ws+" meters per second";
        weather.innerText = "It is "+data.main.temp+"°C in "+city+" with a "+w;
		if(data.main.temp<-10){
			var cloth = document.getElementById('clothing');
			cloth.innerText = "A thick jacket, snowpants";
		}
          if (data.main.temp < 0) {
              var cloth = document.getElementById('clothing');
              cloth.innerText = "A warm jacket, mittens, scarf, boots.";
          } else if (data.main.temp>0&&data.main.temp < 10) {
              var cloth = document.getElementById('clothing');
              cloth.innerText = "A wool sweater, khakis/jeans";
		}
		else if(data.main.temp>10&&data.main.temp<20){
			var cloth = document.getElementById('clothing');
			cloth.innerText = "A thin sweater, khakis/jeans";
		}
		else if(data.main.temp>20){
			var cloth = document.getElementById('clothing');
			cloth.innerText = "T-shirt and shorts";
		}
	      var rain = document.getElementById('rain');
	      var c;
	  if(data.main.humidity>75) c = "High chance of ";
	  else if(data.main.humidity>50) c = "Might ";
	  else if(data.main.humidity>25) c = "Probably won't ";
	  else c = "Will not ";
      if(data.main.temp<0) c+="snow";
      else c+="rain";
	      console.log(c);
	      console.log(rain);
	      rain.innerText = c;
		$("#div1").fadeIn();
    })
	  })
}*/

//http://stackoverflow.com/questions/2017456/with-jquery-how-do-i-capitalize-the-first-letter-of-a-text-field-while-the-user
function ucwords(str,force){
  str=force ? str.toLowerCase() : str;  
  return str.replace(/(\b)([a-zA-Z])/g,
           function(firstLetter){
              return   firstLetter.toUpperCase();
           });
}
