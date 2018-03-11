var apiCall = "http://api.openweathermap.org/data/2.5/weather?";

var userInput = "60506";
var input = "zip=" + userInput + "&units=imperial";
var apiKey = "&APPID=5029ddb0183e8082011dff2ad91e21cb";


$(document).ready(function(){
		var city = $('#city').val();

		
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?zip=60506&units=imperial&APPID=5029ddb0183e8082011dff2ad91e21cb",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var name = data.name;
					var temp = data.main.temp;
					var desc = data.weather[0].description;
					var iconCode = data.weather[0].icon;

					$("#temp").html("<h1>" + name +"</h1>" + temp + "<br/>" + desc);

					$("#icon").html("<img src='http://openweathermap.org/img/w/" + iconCode + ".png'>");

				}


			});


});
