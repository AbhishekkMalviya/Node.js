let cities = ["tokyo", "london", "paris", "newyork", "berlin"];

let newCities =[];

for(let i=0;i<cities.length; i++){
    if(cities[i]!=="paris"){
        newCities.push(cities[i]);
    }
}

console.log(newCities);
