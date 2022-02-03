
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 10.166667, lng: 77.066667 },
  });
  const marker = new google.maps.Marker({
    position: center,
    map,
    title: "Click to zoom",
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}
