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
  
        // Add  an event  listener to the change location button
        document.getElementById('changeLocButton').addEventListener('click', changeLocation);
    }
      // Call the 'map.js' file to allow for the buttons to function
      <script src="js/map.js">

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFbBn9_XSkyH3MzTxYkrzKWm9BYxZkIjc&loading=async&callback=initMap"></script>

var marker;
const fortworth = {lat: 32.75361817256558, lng: -97.31959193117723};
const uk = {lat: 55.20928090114521, lng: -2.8708931416767762};
var curLoc = fortworth;
var info = 0;
var layers = 0;
var transit;
var traffic;
var bike;

function initMap() {

    transit = new google.maps.TransitLayer();
    traffic = new google.maps.TrafficLayer();
    bike = new google.maps.BicyclingLayer();

    map = new google.maps.Map(document.getElementById('map'), {
        center: curLoc,
        zoom: 10
    });

    // Feature #1:
    // Bounces one of my Twitch emotes as the marker:
    marker = new google.maps.Marker({
        map: map,
        position: curLoc,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/lokiHype.PNG',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    document.getElementById('changeLocButton').addEventListener('click', function() {changeLocation()});

    // Feature #2:
    document.getElementById('showInfoButton').addEventListener('click', function() {showInfo()});

    // Feature #3:
    document.getElementById('showLayerButton').addEventListener('click', function() {showLayers()});
    transit = new google.maps.TransitLayer();
    traffic = new google.maps.TrafficLayer();
    bike = new google.maps.BicyclingLayer();
}

function changeLocation() {

    if (curLoc == fortworth) {
        curLoc = uk;
        marker.setPosition(uk);
        map.setCenter(curLoc);

    } else {
        curLoc = fortworth;
        marker.setPosition(fortworth);
        map.setCenter(curLoc);
    }
}

function showInfo() {

    if (info == 1) {

        infoWindow.close();
        info = 0;

    } else {

        if (curLoc == fortworth) {

            infoWindow = new google.maps.InfoWindow({
                content: "I am going to Fort Worth for my birthday to meet some friends at a gaming event in September.",
                ariaLabel: "Fort Worth",
            });
            
        } else {
    
            infoWindow = new google.maps.InfoWindow({
                content: "I visted the UK for my first trip outside the United States. My favorite part was Scotland.",
                ariaLabel: "UK"
            });
        }

        infoWindow.open({
            anchor: marker,
            map: map,
        });

        info = 1;
    }
}

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
