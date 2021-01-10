mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: restaurant.geometry.coordinates, // starting position [lng, lat]
    zoom: 13// starting zoom
});
map.addControl(new mapboxgl.NavigationControl())
new mapboxgl.Marker()
    .setLngLat(restaurant.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({pffset:25})
        .setHTML(
            `<h4>${restaurant.title}</h4><p>${restaurant.location}</p>`
        )
    )
    .addTo(map)