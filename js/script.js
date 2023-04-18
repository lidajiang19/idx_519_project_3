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

let golden_gate = L.circle([37.819, -122.478], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: '0.5',
  radius: 1500,
}).addTo(myMap)

let diablo = L.polygon(
  [
    [37.941, -121.959],
    [37.877, -122.016],
    [37.804, -121.826],
    [37.897, -121.825],
  ],
  {
    color: 'green',
    fillColor: '#36ba40',
    fillOpacity: '0.5',
  },
).addTo(myMap)

sfo_marker.bindPopup('<b>SFO</b>')
oak_marker.bindPopup('<b>OAK</b>')
sjc_marker.bindPopup('<b>SJC</b>')
golden_gate.bindPopup('<b>Golden Gate Bridge</b>')
diablo.bindPopup('<b>Mt. Diablo</b>')
