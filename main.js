/* this is the javascript behind our app */
// API call
// $(document).ready(function() {
//   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "uk&units=metric&appid=48a8c111df81fd58c7240c8f432660e7").then(function(data) {
//     console.log(data);
//     var weather = document.getElementById('weather');
//     weather.innerText = data.main.temp;
//   })
// });
    function myFunction() {
      var city = document.getElementById('location').value;
      console.log(city);
      $("#div1").fadeOut(function(){
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "uk&units=metric&appid=48a8c111df81fd58c7240c8f432660e7").then(function(data) {
        var weather = document.getElementById('weather');
		city=ucwords(city,true);
        weather.innerText = "It is "+data.main.temp+"°C in "+city;
              var cloth = document.getElementById('clothing');
          if (data.main.temp < 0) {
              cloth.innerText = "A warm jacket, mittens, scarf, boots.";
          } else if (0 > data.main.temp < 10) {
              cloth.innerText = "A wool sweater, khakis/jeans";
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
	      rain.innerText = c;
		$("#div1").fadeIn();
    })
	  })
}

//http://stackoverflow.com/questions/2017456/with-jquery-how-do-i-capitalize-the-first-letter-of-a-text-field-while-the-user
function ucwords(str,force){
  str=force ? str.toLowerCase() : str;  
  return str.replace(/(\b)([a-zA-Z])/g,
           function(firstLetter){
              return   firstLetter.toUpperCase();
           });
}
