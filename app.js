// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "58089bd26bmsha2bea889c092340p136f84jsnf84ebb1f84d7",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
$(() => {
//this will allow buttons to be hover on and show information only when hovering over.
    $("#btn1").hover(function(){
        $("#london").toggle();
    })
    $("#btn2").hover(function(){
        $("#costa").toggle();
    })
    $("#btn3").hover(function(){
        $("#phuket").toggle();
    })
    $("#btn4").hover(function(){
        $("#rome").toggle();
    })
    $("#btn5").hover(function(){
        $("#rio").toggle();
    })
    $("#btn6").hover(function(){
        $("#tokyo").toggle();
    })
    $("#btn7").hover(function(){
        $("#barcelona").toggle();
    })
    $("#btn8").hover(function(){
        $("#nyc").toggle();
    })

    $("#btn9").hover(function(){
        $("#bali").toggle();
    })
});
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "58089bd26bmsha2bea889c092340p136f84jsnf84ebb1f84d7",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
};
/////////////////////////////////////
const getLondon =() => {
$.ajax(settings).then(function (response) {
    console.log(response);

    });
}
$(() => {
    console.log (getLondon());
    $("button").click(function(){
        $("p").fadeIn();
      });
});

//////////////////////////////////////
// const baseURL = settings.url
// const apiKey = settings.headers["x-rapidapi-key"]
// const apiHost = settings.headers["x-rapidapi-host"]
// let londonURL = baseURL + apiKey + apiHost

// const getLondon = () => {
// $.ajax({
//     url : londonURL
// }).then((londonData)=> {
//     $('.london').html(`
//         <p>${londonData.weather}</p>
//      `)
//     })
//     console.log(getLondon());
// };
	