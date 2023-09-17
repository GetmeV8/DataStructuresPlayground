let name = {
    firstname: "Rameez",
    lastname: "Ebrahim",
}
let printFullName = function ()  {
    console.log(this.firstname + " " + this.lastname)
}
printFullName.call(name);

let name2 = {
    firstname: "Lionel",
    lastname: "Messi",
}

//function borrowing

 printFullName.call(name2);

 //apply method
 printFullName.apply(name2,["Mumbai","Maharashtra"]);

 //bind method
 let prinMyName = printFullName.bind(name2,"Mumbai","Maharashtra");
 console.log(prinMyName);
 prinMyName();