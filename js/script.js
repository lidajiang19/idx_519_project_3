// // Initialize and add the map
let map

async function initMap() {
  // The location of Chicago
  const position = { lat: 41.8781, lng: -87.6298 }
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps')
  const { AdvancedMarkerView } = await google.maps.importLibrary('marker')

  // The map, centered at Chicago
  map = new Map(document.getElementById('map'), {
    zoom: 4,
    center: position,
    mapId: 'DEMO_MAP_ID',
  })
}
//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: 'Chicago',
//   })
// }


// Add pic marker
// developers.google.com/maps/documentation/javascript/examples/icon-simple
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: 41.8781, lng: -87.6298 },
  })
  const image = "media/giphy.gif"
  const beachMarker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map,
    icon: image,
  })
}

// //styled map selection
// // let map

function initMap() {
  // Create the map with no initial style specified.
  // It therefore has default styling.
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.86, lng: 151.209 },
    zoom: 13,
    mapTypeControl: false,
  })

}

//get lat/lng from click events
function initMap() {
  const myLatlng = { lat: 41.8781, lng: -87.6298 }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatlng,
  })
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: 'Click the map to get Lat/Lng!',
    position: myLatlng,
  })

  infoWindow.open(map)
  // Configure the click listener.
  map.addListener('click', (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close()
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    })
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
    )
    infoWindow.open(map)
  })
}

//bike layer
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: { lat: 41.8781, lng: -87.6298 },
  })
  const bikeLayer = new google.maps.BicyclingLayer()

  bikeLayer.setMap(map)
}

window.initMap = initMap
