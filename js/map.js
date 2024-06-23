function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-17.914241670139607, -64.52775005581749),
    zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
