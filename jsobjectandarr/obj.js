
// object 
 

let favThings = {
    familyTree:{
        details:{
            lName:"king",
            name:"bharath",
            rollNumber:22020,
        },
        backLife: "afterlife"
    },
    favPlace :["goa","manali","kerala","sangareddy"],
    food: ["poori","vada","idle","birayani"],
    hobbies:["movies","food","cricket"],
    isAbsent:true,
    isHeActive:false,


}

console.log(favThings);

// dotnation:

let enter = favThings.familyTree;
console.log(enter);

let enter2 = favThings.familyTree.details;
console.log(enter2);

// brackets notation:

let enter3 = favThings['favPlace'];
console.log(enter3);

let enter4 = favThings['familyTree']['details'];

console.log(enter4);


let models ={};

models.company ='samsung'
models.goat ='life'
console.log(models);

delete models.goat;
console.log(models);      

// Arrays:
let arr =["bharath","kumar",true,false,52]
arr.pop()
console.log(arr);
arr.push('52');
console.log(arr);

arr.unshift('56');
console.log(arr);
arr.shift();
console.log(arr);
