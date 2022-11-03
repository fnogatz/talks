var map;
var centerOfUlm = [48.37616366164922,10.006818299883644];

function setCurrentPosition(position) {
  var coords = position.coords;
  var msg = '<b>Your current position!</b>';

  msg += '<form action="/checkin-simple.7.html" method="post">\
    <input type="hidden" name="longitude" value="'+coords.longitude+'" />\
    <input type="hidden" name="latitude" value="'+coords.latitude+'" />\
    <input type="text" name="username" placeholder="Username" required="true" />\
    <input type="submit" value="Check in!" />\
    </form>';

  L.marker([coords.latitude, coords.longitude]).addTo(map).bindPopup(msg).openPopup();

  map.setView([coords.latitude, coords.longitude], 13);
}

document.addEventListener('DOMContentLoaded', function() {
  map = L.map('map').setView(centerOfUlm, 13);
  L.tileLayer('http://{s}.tile.cloudmade.com/bcaf462f30bd4c02a7378b1bc17dd6b6/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setCurrentPosition);
  }
}, false);