
function initMap() {
    var coordinates = {lat: 59.938851, lng: 30.323080},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 18
        });
        image = '../img/map-marker.svg',
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });
}