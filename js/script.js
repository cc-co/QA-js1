//ASI

//Task 1 flow chart

let A =100;

while(A<200){
    console.log(A)
    A++;
}; 

//flow chart 2

let a = 100;

while(a<200){
    if(a%2 == 0){
        console.log("-");
        a++;
    }else{
        console.log("*");
        a++;
    }


};

//2.

// for(let i=0; i<10; i++){
//     for(let j=1; j<11; j++){
//         console.log(j);
//     }
// };

for(let x=1;x<11;x++){
    for(let y=0;y<10;y++){
        console.log(x)
    }
};

//3. Replace while with for

for(let AA =100; AA<200; AA++){
    console.log(AA)
}; 

for(let aa=100; aa<200; aa++){
    if(aa%2 == 0){
        console.log("-");
    }else{
        console.log("*");
    }
};

//4. switch

let current_day = "saturday";

switch(current_day){
    case "monday":
        console.log("it's Monday");
    case "tuesday":
        console.log("it's Tuesday");
    case "wednesday":
        console.log("it's Wednesday");
    case "thursday":
        console.log("it's Thursday");
    case "friday":
        console.log("it's Friday");
        break;
    case "saturday":
        console.log("it's Saturday");
        break;
    case "sunday":
        console.log("it's Sunday");
        break;
    default:
        console.warn(`no valid day`); 
        break;    
}

// console.log(Date.now())