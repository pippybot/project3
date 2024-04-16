var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 41.83409469359984, lng: -87.62625439108541}, 
        zoom: 25,
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
trafficLayer = new google.maps.TrafficLayer();

function toggleLayers() {
    if (trafficLayer.getMap()) {
        trafficLayer.setMap(null);
    } else {
        trafficLayer.setMap(map);
    }
}

// Info window for markers
infoWindow = new google.maps.InfoWindow();

document.getElementById('changeLocButton').addEventListener('click', function() {
    changeLocation();
});

document.getElementById('showLayerButton').addEventListener('click', function() {
    toggleLayers();
});

document.getElementById('showInfoButton').addEventListener('click', function() {
    showInfo(markers[currentLocation]);
});
}

// Info for the Info Windows
function showInfo(marker) {
    var contentString = '';
    if (marker.title === 'UK') {
        contentString = 'I went to the UK last in Summer of 2023 with my grandmother and my brother.';
    } else if (marker.title === 'Fort Worth') {
        contentString = 'This year for my birthday, I am going to a big gaming event for Rocket League.';
    } else if (marker.title === 'Rowe Village') {
        contentString = 'When I was studying on campus during the Fall 2023 semester, this is the dorm I stayed at.';
    }
    infoWindow.setContent(contentString);
    infoWindow.open(map, marker);
}
