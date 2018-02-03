const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYnNjMjEyMCIsImEiOiJjamQxdW9pdzEyMzJqMnduMmplc21wYndzIn0.PK09Vx8tBp8VOS9tKWQEWQ';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  // style: "mapbox://styles/mapbox/streets-v10" 
  style: "mapbox://styles/mapbox/dark-v9" // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activities", [-74.009151, 40.705086]); 
marker.addTo(map);