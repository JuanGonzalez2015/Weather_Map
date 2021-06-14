///Creates the Map
mapboxgl.accessToken = TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
        center: [-98.4916, 29.4252],
    zoom: 13
});

// Adds the search on the map
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

geocoder.on('result', function (e) {

    console.log(e.result)
    const [lon,lat] = e.result.center
    weatherMap( lat, lon);

});

