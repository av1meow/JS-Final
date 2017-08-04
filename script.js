/*Final project - Making api call to display weather data

Instructions
1. find a way to extract user input from a form (inputed data can be user’s city, zip code, etc.)
2. When form is submitted (through an event listener/handler), make an api call using David’s example
3. Append the data to your html file (instead of console.logging it)
commentzzzzzz pleazzzze!!!*/

//grabbing the elements by there ids from html
$(document).ready(function() {
	var zip = document.getElementById("zipCode");
	var city = document.getElementById("city");
	var submit = document.getElementById("submit");

//button efect for submit element
	submit.addEventListener("click", function(evt){
		evt.preventDefault();

//request for data
		var cityName = city.value;
			$.ajax({
				method: "GET",
				url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=bc0f4167e31574b40f700fb02b9935f0"
			})
			.done(function(data){// grabbing the p tags to display the data on to the DOM
				var p = document.getElementById("p");
				var p1 = document.getElementById("p1");
				var p2 = document.getElementById("p2");
				var p3 = document.getElementById("p3");

				// if statement then append from html upload images on html
				var cheese = document.getElementById('cheese')


//setting the data it recives
				p.textContent = data.name;
				p1.textContent = (data.main.temp-273.15)*1.8+32;
				p2.textContent = data.weather[0].description;
				p3.textContent = data.wind.speed;


				console.log(data);
		    console.log(data.name);
		    console.log((data.main.temp-273.15)*1.8+32);
		    console.log(data.weather[0].description);
		    console.log(data.wind.speed);
			})
//what happens if there is an error
		 .fail(function() {

		 	console.log("error");

		});
	});

});
