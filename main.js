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

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "uk&units=metric&appid=48a8c111df81fd58c7240c8f432660e7").then(function(data) {
        var weather = document.getElementById('weather');
        weather.innerText = data.main.temp;
    })
}
