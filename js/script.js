let myMap = L.map('map').setView([37.61, -122.011], 10)

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  // Attribution is obligatory as per copyright!
  maxZoom: 20,
}).addTo(myMap)

let sfo_marker = L.marker([37.618, -122.375]).addTo(myMap)
let oak_marker = L.marker([37.71, -122.224]).addTo(myMap)
let sjc_marker = L.marker([37.361, -121.928]).addTo(myMap)
