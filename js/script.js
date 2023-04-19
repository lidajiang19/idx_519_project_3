// Initialize and add the map
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

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: 'Chicago',
  })
}

initMap()
