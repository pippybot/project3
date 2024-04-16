var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 41.83409469359984, lng: -87.62625439108541}, 
        zoom: 17,
        mapID: 'Rowe_Village_ID',
    });
    
    new google.maps.Marker({
        position: {lat: 41.83409469359984, lng: -87.62625439108541},
        map,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/lokiHype.PNG',
            scaledSize: new google.maps.Size(50,50)
        }
    });

    // Add an event listener to the change location button
    document.getElementById('changeLocButton').addEventListener('click', changeLocation);
}

// Marker added for UK 
function changeLocation() {
   // Defining coordinates
   const newLocation = {lat: 55.391223530439646, lng: -2.591264406992628};

    //Set  map's  center to new  location
    map.setCenter(newLocation);
}
 
    // Marker added for FortWorth
    function changeLocation() {
        // Defining coordinates
        const newLocation = {lat: 32.75361817256558, lng: -97.31959193117723};

    //Set  map's  center to new  location
    map.setCenter(newLocation);
}

// Defining the layers
function layers() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 34.04924594193164, lng: -118.24104309082031 },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}
