function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var chosenLocation = new google.maps.LatLng(41.83380694415314, -87.62611786373115);
	var mapOptions = {
		center: chosenLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: chosenLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/lokiHype.PNG'
	});

	var contentString = '<h1>IIT Rowe Village</h1><p>Jeanne and John Rowe Village, designed by acclaimed international architect Helmut Jahn, consists of three five-story buildings that face the primary thoroughfare running through Mies Campus. One of its most distinctive features is that the Green Line elevated (“L”) train runs behind, which gives it a distinctly Chicago vibe. This was the building I lived in when I was still on campus! </p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);
