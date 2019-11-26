
// useing AJAX with jQuery

$.ajax({
	method:"GET",
	url: "https://api.weatherbit.io/v2.0/current?city=LosAngeles,CA&key=937814708de744bbbbd51aca1ca19a41",

})
.done(function(results){
	displayResults(results);
	console.log(results);


});







function displayResults(results) {


	let weatherElement = document.querySelector(".weatherCon");
	let tempF= ((results.data[0].temp * 1.8) + 32);
	let apptempF= ((results.data[0].app_temp * 1.8) + 32);

	while(weatherElement.hasChildNodes())
	{
		weatherElement.removeChild(weatherElement.lastChild);
	}

	let weatherP=document.createElement("p");
	weatherP.innerHTML="Today's weather in " + results.data[0].city_name + ": " + tempF + " degrees - " + results.data[0].weather.description + ". Feels like " + apptempF + " degrees!";
	console.log(weatherP);

	weatherElement.appendChild(weatherP);

	

}

$(".list").on("click", ".listText", function(){
	if ($(this).hasClass("through"))
	 {
	 	$(this).removeClass("through");

	}
	else
	{
		$(this).addClass("through");
	}		

	});
$(".list").on("click",".fa-check", function()
{
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})

});


$("#add-form").on("submit", function(event){
	event.stopPropagation();
	event.preventDefault();


	// console.log("asdasd")
	let newItem = $("#add-id").val();

	let list_html = "<li class=\"listItem\"><i class=\"fas fa-check\"></i><p class=\"listText\"> " + newItem + "</p></li>"


	$(".list").append(list_html)

});
// $(".form-row").on("click", ".addList", function()
// {
// 	console.log("dkfjalksdjf");
// 	if ($(".form-control").hasClass("show"))
// 	{
// 		$("#add-id").removeClass("show");

// 	}
// 	else
// 	{
// 		$("#add-id").addClass("show");
// 	}

// });
$(".form-row").on("click", ".addList", function()
{
		$(".search-bar").slideToggle(500,function(){
		console.log("kdfjsl");

		});
	

	

});

	








