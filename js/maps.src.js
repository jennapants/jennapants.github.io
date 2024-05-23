function initialize() {
	var mapOptions = {
		// ON MONUMENT
		// center: new google.maps.LatLng( 42.381733, -71.093439 ),

		zoom: 18,
		center: new google.maps.LatLng( 43.151544, -77.607840 ),
		scrollwheel: false,
		panControl: false,
		zoomControl: false,
		rotateControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}
	var map = new google.maps.Map( document.getElementById( "container-map-inner" ), mapOptions );
}

function loadScript() {
	var script = document.createElement( "script" );
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDJ6fcE7We16B9VhdqTeY7bQx-26bqzGyY&sensor=true&callback=initialize";
	document.body.appendChild( script );
}

// Only load maps if screen is large enough to warrant use
if( matchMedia( "only screen and (min-width: 480px)" ).matches ) {
	window.onload = loadScript;
}
