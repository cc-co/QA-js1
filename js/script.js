// Objects, arrays and JSON

let vehicle = {
    "type": "car",
    "seats":"5",
    "wheels" : 4
};

// JSON

// array exercise
//1.

let myArray = ["hello", "everyone"];

console.log(myArray.length);

myArray.push("1","2","3");

console.log(myArray.length);

myArray.shift();

for(let i of myArray){
    console.log(i);
};