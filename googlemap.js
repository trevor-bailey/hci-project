var longitude;
var latitude;





// Initialize and add the map
function initMap(long,lat) {


  navigator.geolocation.getCurrentPosition(function(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    const userLocation = { lat:latitude, lng:longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: userLocation,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: userLocation,
      map: map,
    });

  })


}