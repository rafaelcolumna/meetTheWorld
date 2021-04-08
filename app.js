
$(() => {
//this will allow buttons to be click on and show information only when clicked on.

$("#btn1").click(function(){
        $londonWeather();
        $("#london").toggle();
        $("#london").animate({left:'300px'});
    })
    $("#btn2").click(function(){
        $costaWeather();
        $("#costa").toggle();
    })
    $("#btn3").click(function(){
        $phuketWeather();
        $("#phuket").toggle();
    })
    $("#btn4").click(function(){
        $romeWeather();
        $("#rome").toggle();
    })
    $("#btn5").click(function(){
        $rioWeather();
        $("#rio").toggle();
    })
    $("#btn6").click(function(){
        $tokyoWeather();
        $("#tokyo").toggle();
    })
    $("#btn7").click(function(){
        $barcelonaWeather();
        $("#barcelona").toggle();
    })
    $("#btn8").click(function(){
        $nycWeather();
        $("#nyc").toggle();
    })

    $("#btn9").click(function(){
        $baliWeather();
        $("#bali").toggle();
    })


    let $londonWeather =() =>{
        $.ajax({
            type: "GET",
            //added specific location from API weather informacion by using coordinates.
            url: "http://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&units=imperial&appid=6206012957e2721844367aa18fb54387",
            dataType: "json",
            success: function(data) {
                // console.log(data);
                $("#london").append(`Current Temp: ${data.main.temp} F`);
            }
        })
        };
     let $costaWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=9.934739&lon=-84.087502&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#costa").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };

     let $phuketWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=7.878978&lon=98.398392&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#phuket").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };
         let $romeWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=41.902782&lon=12.496366&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#rome").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };

         let $rioWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=-22.908333&lon=-43.196388&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#rio").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };
         let $tokyoWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=35.652832&lon=139.839478&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#tokyo").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };

         let $barcelonaWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#barcelona").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };

         let $nycWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=40.730610&lon=-73.935242&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#nyc").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };

         let $baliWeather =() =>{
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=-8.409518&lon=115.188919&units=imperial&appid=6206012957e2721844367aa18fb54387",
                dataType: "json",
                success: function(data) {
                    // console.log(data);
                    $("#bali").append(`Current Temp: ${data.main.temp} F`);
                }
            })
         };


    });

    


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
// /////////////////////////////////////
// const getLondon =() => {
// $.ajax(settings).then(function (response) {
//     console.log(typeof response);

//     });
// }
// $(() => {
//     console.log (getLondon());
//     $("button").click(function(){
//         $("p").fadeIn();
//       });
// });

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
	