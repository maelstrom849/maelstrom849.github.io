async function getWeather() {
    params = {
        "latitude": 39.950,
        "longitude": -75.166,
        "appid": ""
    };
    console.log(`https://api.openweathermap.org/data/4.0/onecall/timeline/1day?lat=${params.latitude}&lon=${params.longitude}&appid=${params.appid}`);
    response = await fetch(`https://api.openweathermap.org/data/4.0/onecall/timeline/1day?lat=51.5&lon=-0.1&appid=${params.appid}`);
    console.log(JSON.stringify(response));
    document.getElementById("weather-div").appendChild(document.createTextNode(JSON.stringify(response)));
}

function testFunction() {
    console.log("function");
}