let topCities = ["Berlin", "new york" , "Singapore"]


// let hardCopyCities = [...topCities];

let hardCopyCities = topCities.slice();
topCities.pop()
console.log(hardCopyCities);
