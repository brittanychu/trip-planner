const { Marker } = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


function buildMarker(type, coords){
    if(!iconURLs.hasOwnProperty(type)) {
        type = "activities";
    }
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundSize = "contain";
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
    return new Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;
