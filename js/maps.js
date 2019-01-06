$(function () {

    function initMap() {
        var location = new google.maps.LatLng(41.996433, 21.397222);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = {
            url: "img/marker.png",
            scaledSize: new google.maps.Size(28, 48)
        };


        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});