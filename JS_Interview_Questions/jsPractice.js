// sum(1)(2)

function sum(a){
    console.log(a);
    return function(b){
        return a+b;
    }
}

console.log(sum)
console.log(sum(5)(5));


// add(1)(2)(3)....()

function add(a){
    return function(b){
        if (b) return add(a+b);
        else return a;
}
}



console.log(add(3)(3)(3)(4)());



// bind , call and apply

let name = {
    firstName  :"Mehul",
    lastName : "Saxena",
    fullName : function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

name.fullName();

let fullNamePrint = function(state,city){
    console.log(this.firstName + " " + this.lastName + " " + state + " " +city)
}

let name2 = {
    firstName : "XYZ",
    lastName : "KKK",
}

name.fullName.call(name2);
fullNamePrint.call(name2,"UP" ,"Kanpur");

fullNamePrint.apply(name2,["MAHA" ,"Mumbai"]);

let name3 = {
    firstName :"TTTTTT",
    lastName: "LLLLLLL"
}


let printMyName = fullNamePrint.bind(name3,"Kanpurrr" ,"Kannauj");
printMyName()