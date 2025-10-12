let teaCollection = [];

let tea;

do {
   tea= prompt(`Enter your favourite tea (type "stop" to finish): `);
    if(tea!== "stop") teaCollection.push(tea);
} while (tea!=="stop");
console.log(teaCollection);
