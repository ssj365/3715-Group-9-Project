var map;
window.onload = showMap;


function showMap(coords) {
        var googleLatAndLong = new google.maps.LatLng(coords.latitude, 
												  coords.longitude);
		var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
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
		var start = {lat: 47.569972, lng:  -52.681605};
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


	  
    