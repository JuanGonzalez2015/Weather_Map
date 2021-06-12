
function drawWeather( d, id,city ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description;

    document.getElementById(`description-${id}`).innerHTML = description;
    document.getElementById(`temp-${id}`).innerHTML = celcius + '&deg;';
    document.getElementById(`location-${id}`).innerHTML = city.name;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }
}
window.onload = function() {
    weatherMap(  29.4246,-98.4951);
}















