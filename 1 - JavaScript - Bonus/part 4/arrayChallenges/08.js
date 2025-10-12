let europeCities = [`paris`, `rome`]

let asianCities = [`Tokyo`, `bangkok`]

// let WorldCities = europeCities + asianCities; // this would return string so no need to use these method.
let WorldCities = europeCities.concat(asianCities);

console.log(WorldCities);
