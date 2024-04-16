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
   





// Defining Buttons
function createButton() {
    var btn = document.createElement("button"); // Creating the button
    btn.id = id
    btn.innerHTML = "Information"; // This sets the button text (this will be for Rowe Village)
    btn.onclick = onClickFunction;
    return btn;
}

function setUpButtons() {
    var container = document.getElementById("buttonContainer");

    // Creating the Info button for each marker/place
    // First set of info is for Rowe Village
    var infoButton = createButton("infoButton", "Show Alert", function() {
        alert("This is the dorm that I stayed in when I was living on campus during the Fall 2023 semester!");
    });

    
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
