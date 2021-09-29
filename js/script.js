// conditionals

// falsey

let falseOne = 0;
let falseTwo = ``;
let falseThree;
let falseFour = null;
let falseFive = NaN;
let falseSix = false;



let age;
age = 16;

if(age > 18 && age<65){
    console.log(`${age} is in between 18 - 65`)
}else if(age<18){
    console.log(`${age} is underage`)
}else{
    console.log(`${age} is over 65`)
};

(age<50)? console.log(`${age} is under 50`) : console.log(`${age} is over 50`);