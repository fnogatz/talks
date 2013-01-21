document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function positionFound(position) {
      alert("lat: "+position.coords.latitude+"; lon: "+position.coords.longitude);
    });
  }
}, false);