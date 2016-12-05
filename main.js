/* this is the javascript behind our app */
// API call
// $(document).ready(function() {
//   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "uk&units=metric&appid=48a8c111df81fd58c7240c8f432660e7").then(function(data) {
//     console.log(data);
//     var weather = document.getElementById('weather');
//     weather.innerText = data.main.temp;
//   })
// });

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
	
	function directionsApi(){
		$.getJSON("https://maps.googleapis.com/maps/api/directions/json?origin=\""+start+"\"&destination=\""+city+"\"&key=AIzaSyBhkNCUTF-zdtA1Jh1RNee1Afx9qSEgz1M&callback=?").then(function(data) {
			console.log(data);
		});
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
