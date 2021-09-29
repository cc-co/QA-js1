// Scope and functions

// local (inside the block)
// global (outside the block)
// if none exist, add to global scope

func1 = (num1, num2) => {
    return num1 - num2;
};

let welcome = function(name, age){
    console.log(`My name is ${name}, and I am ${age} years old`)
};

powerUp = (n1,n2) => {
    return Math.pow(n1,n2); 
};

console.log(func1(5,1));
welcome("me", 99);
console.log(powerUp(8,2));