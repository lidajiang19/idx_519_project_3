function initMap() {
  // Create a new map instance
  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 12,
  })

  // Add a bike layer to the map
  let bikeLayer = new google.maps.BicyclingLayer()
  bikeLayer.setMap(map)

  // Add a simple marker to the map
  let marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: 'Chicago',
  })

  // Add a listener for the "click" event
  map.addListener('click', (event) => {
    // Get the clicked location's latitude and longitude
    let clickedLat = event.latLng.lat()
    let clickedLng = event.latLng.lng()

    // Create a new marker at the clicked location
    let marker = new google.maps.Marker({
      position: { lat: clickedLat, lng: clickedLng },
      map: map,
    })
  })
}
window.initMap = initMap
