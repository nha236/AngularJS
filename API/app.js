// call spi from sever
$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&id=524901&APPID=710a8a155ade8daf23d7240bf1ca4d6f&units=metric",
function(api){
    console.log(api);
    console.log("local temp:" +api.main.temp);
    console.log(api.weather[0].description);
    console.log(api.weather[0].icon);
    console.log("wind speed:" +api.wind.speed);
    $('.temp').html('Local Temp: ' +api.main.temp)
    $('.icon img').attr('src', 'https://openweathermap.org/img/wn/' +api.weather[0].icon +'.png')
    $('.long').html('long: '+api.coord.lon)
    $('.lat').html('lat: '+api.coord.lat)
});

/* call api
$.get("api url",function(){

}); 
*/