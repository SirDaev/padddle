// Calculate the distance in kilometers and miles between two longitude/latitude coordinates.
// Source: https://www.geeksforgeeks.org/program-distance-two-points-earth/

export const calcBearing = function(lat1, lon1, lat2, lon2) {
  var y = Math.sin(lon2-lon1) * Math.cos(lat2);
  var x = Math.cos(lat1)*Math.sin(lat2) -  Math.sin(lat1)*Math.cos(lat2)*Math.cos(lon2-lon1);
  var bearing = Math.atan2(y, x) * (180/Math.PI);
  console.log(bearing+180)
  console.log((bearing+180)%360)
  return bearing;
}