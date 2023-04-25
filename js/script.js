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
  const image = 'media/giphy.gif'
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

initMap();
