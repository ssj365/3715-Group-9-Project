var map;
window.onload = getMyLocation;
function getMyLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(displayLocation);
	}
	else {
		alert("Oops, no geolocation support");
	}
}
function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	showMap(position.coords);
}

function showMap(coords) {
        var googleLatAndLong = new google.maps.LatLng(coords.latitude, 
												  coords.longitude);
		var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: googleLatAndLong,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('right-panel'));
		

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay, googleLatAndLong);
        };
        
		document.getElementById('end').addEventListener('change', onChangeHandler);
        document.getElementById('mode').addEventListener('change', onChangeHandler);
		addMarker(map, googleLatAndLong);
	  }
	  
	  function calculateAndDisplayRoute(directionsService, directionsDisplay, position) {
        var selectedMode = document.getElementById('mode').value;
		var start = position;
        var end = document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
	  
	  
function addMarker(map, latlong) {
	var markerOptions = {
		position: latlong,
		map: map,
		clickable: false
	};
	var marker = new google.maps.Marker(markerOptions);

}


	  
    