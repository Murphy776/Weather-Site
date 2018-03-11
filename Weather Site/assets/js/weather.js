var apiCall = "http://api.openweathermap.org/data/2.5/weather?";

var userInput = "60506";
var input = "zip=" + userInput + "&units=imperial";
var apiKey = "&APPID=5029ddb0183e8082011dff2ad91e21cb";
var zipCode = " ";

$(document).ready(function(){
	
	if(zipCode == " "){
		zipCode = "60506";
	}

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?zip="+ zipCode +"&units=imperial&APPID=5029ddb0183e8082011dff2ad91e21cb",
		type: "GET",
		dataType: "jsonp",
		success: function(data){
			var name = data.name;
			var temp = Math.round(data.main.temp);
			var desc = data.weather[0].description;
			var iconCode = data.weather[0].icon;
			$("#temp").html("<h1>" + name +"</h1><h3>" + temp + "<br/>" + desc + "</h3>");
			$("#icon").html("<img src='http://openweathermap.org/img/w/" + iconCode + ".png'>");
		}

	});



});

function getUserInput(){
				var zipCode = $('#zip').val();
				console.log(zipCode);
				$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?zip="+ zipCode +"&units=imperial&APPID=5029ddb0183e8082011dff2ad91e21cb",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var name = data.name;
					var temp = Math.round(data.main.temp);
					var desc = data.weather[0].description;
					var iconCode = data.weather[0].icon;

					$("#temp").html("<h1>" + name +"</h1><h3>" + temp + "<br/>" + desc + "</h3>");

					$("#icon").html("<img src='http://openweathermap.org/img/w/" + iconCode + ".png'>");

				}


				});
			}