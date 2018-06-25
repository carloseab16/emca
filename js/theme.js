;(function($) {
if ( $('#mapBox').length ){
    var $lat = $('#mapBox').data('lat');
    var $lon = $('#mapBox').data('lon');
    var $zoom = $('#mapBox').data('zoom');
//        var $marker = $('#mapBox').data('marker');
//        var $info = $('#mapBox').data('info');
//        var $markerLat = $('#mapBox').data('mlat');
//        var $markerLon = $('#mapBox').data('mlon');
    var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
{
    "featureType": "landscape",
    "stylers": [
        {
            "hue": "#00dd00"
        }
    ]
},
{
    "featureType": "road",
    "stylers": [
        {
            "hue": "#dd0000"
        }
    ]
},
{
    "featureType": "water",
    "stylers": [
        {
            "hue": "#000040"
        }
    ]
},
{
    "featureType": "poi.park",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.arterial",
    "stylers": [
        {
            "hue": "#ffff00"
        }
    ]
},
{
    "featureType": "road.local",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
}
]
        });
    
//            map.addMarker({
//                lat: $markerLat,
//                lng: $markerLon,
//                icon: $marker,    
//                infoWindow: {
//                  content: $info
//                }
//            })
    }

})(jQuery)
