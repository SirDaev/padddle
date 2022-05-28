// Calculate the distance in kilometers and miles between two longitude/latitude coordinates.
// Source: https://www.geeksforgeeks.org/program-distance-two-points-earth/

export const calcDistance = function(lat1, lon1, lat2, lon2) {

  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 =  lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2),2);
          
  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers and miles
  let rKilometers = 6371;
  let rMiles = 3956;

  // calculate the result
  return({
    miles: c*rMiles,
    kilometers: c*rKilometers
  });
}