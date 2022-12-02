let js = "amazing";

console.log(40 + 8 + 23 - 10);


let firstName = "Matilda";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 13);
console.log(typeof 'jonas');

let year;
console.log(year);
console.log(typeof year);

year = 2001 ;
console.log(typeof year);

// bug in js the output is null
console.log(typeof null);
 
let x ,y ;
x= y = 25 -10-5;
console.log(x,y);


//////////////////////////////////////
// Coding Challenge 1
/*
Mark and John are trying to compare their BMI (Body Mass Index) , which is 
calculated using the formula : BMI = mass/ height **2 = mass /(height * height)
(mass in kg and height in meter).

1. Store Marks and Johns mass and height in variables 
2. Calculate both their BMIs using the formula( you can even implement both the versions)
3. Create a boolenan variable 'markHigher BMI' containing information about
    whether Mark has a higher BMI than John.

    Test Data 1 : Mark weights 78 kg and is 1.69 m tall . John weight 92 kg and is 1.95 m tall
Test Data 2 : Marks weights 95 kgs and is 1.88 m tall . John weights 85 kg and is 1.75 m tall

*/

// Test 1 

let mm = 78;
let mh = 1.69;

let jm = 92;
let jh = 1.95;


// Test 2
// let mm = 95;
// let mh = 1.88 ;

// let jm = 85;
// let jh = 1.76;


function BMICAL(mass,height){

    return mass/(height * height);

}


let mBMI = BMICAL(mm,mh);
let jBMI = BMICAL(jm , jh);


let markHigherBMI = mBMI > jBMI ;

console.log(mBMI , " " , jBMI , " " , markHigherBMI);

// Template litereals

const name = "Mehul Saxena";
const senetence = `My Name is ${name}`;
console.log(senetence);

// replacement of \n in the code using the template literals
console.log(`String
multiple 
lines.
`);


//  Decision making
const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving licence .');
}
else{
    const yearLeft = 18 -age
    console.log(`sarah is too young . Wait another ${yearLeft} years.`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;

}

console.log(century);

/////////////////////////////////////////////////////////////////////////
// Coding Change #2

/* 
    Use the BMI example from chanllenge 1, and the code you already wrote , and improve it.
    1. Print a nice output to the console, saying who has the higher BMI, The message 
    can be either  "Marks BMI is higher than Johns" or "Johns BMI is higer than Marks".

    2. Use a template string to include 
    */


