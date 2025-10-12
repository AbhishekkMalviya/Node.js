let balance = 120;
let newBalance = new Number(120);
console.log(balance);   //120
console.log(typeof balance); // number
console.log(newBalance); //[Number: 120]
console.log(typeof newBalance); // object



let firstname = undefined;
console.log(typeof firstname); //undefined

let lastname = null;
console.log(typeof lastname);//object



//Strings
let username= "Abhishek";
let mystring = 'hello';
let oldgreet = mystring + " " +username;
console.log(oldgreet); //hello Abhishek
console.log(typeof oldgreet);// string

let newgreet = `hello ${username} !`
console.log(newgreet); // hello Abhishek
console.log(typeof newgreet); // string



