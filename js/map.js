var map;
var layers = 0;
var transit;
var traffic;
var bike; 

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 41.83409469359984, lng: -87.62625439108541}, 
        zoom: 17,
        mapID: 'Rowe_Village_ID',
    });

    // Marker for Dorm
    new google.maps.Marker({
        position: {lat: 41.83409469359984, lng: -87.62625439108541},
        map,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/lokiHype.PNG',
            scaledSize: new google.maps.Size(50,50)
        }
    });

    // Marker for the UK
    new google.maps.Marker({
        position: {lat: 55.954184778757956, lng: -3.1867993233814462},
        map,
        zoom: 10,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/lokiHype.PNG',
            scaledSize: new google.maps.Size(50,50)
        }
    });

    // Marker for Fort Worth
    new google.maps.Marker({
        position: {lat: 32.74120577120599, lng: -97.36894587494513},
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

// Defining coordinates for each location (location 2 is UK and location 3 is Fort Worth)
const locationDorm = {lat: 41.83409469359984, lng: -87.62625439108541};
const locationUK = {lat: 55.954184778757956, lng: -3.1867993233814462};
const locationFW = {lat: 32.74120577120599, lng: -97.36894587494513};

// Function to change the location
function changeLocation() {
    let newLocation;
    // Checking if the center of map is at one of locations (location dorm) here
    if (map.getCenter().lat() == locationDorm.lat && map.getCenter().lng() == locationDorm.lng) {
        // If yes, set newLocation to locationUK
        newLocation = locationUK;
    }
    // If no (else), we are at locationUK, set newLocation to location 3 (Fort Worth)
    else if (map.getCenter().lat() == locationUK.lat && map.getCenter().lng() == locationUK.lng) {
        newLocation = locationFW;
    }
    // If at FW, go to location 1 (dorm)
    else {
        newLocation = { lat: 41.83409469359984, lng: -87.62625439108541 };
    }
    // Set map center to new location
    map.setCenter(newLocation);
}

// This is where we undo and redo layers
function showLayers() {

    if (layers == 1) {

        transit.setMap(null);
        traffic.setMap(null);
        bike.setMap(null);
        layers = 0;

    } else {
        
        transit.setMap(map);
        traffic.setMap(map);
        bike.setMap(map);
        layers = 1;
    }
}

