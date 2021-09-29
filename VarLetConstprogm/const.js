/*variable declaring with consts  */

const chocolate ="KitKat";  //declaring and intializing variable 
console.log(chocolate);  // output kitkat

if (true){
    const chocolate="DairyMilk"; //declaring and intializing variable at block scope
    console.log(chocolate);  //output DairyMilk
    const fruit="Apple";
    console.log(fruit);
}
//const chocolate ="Silk";  //using const we  can not redeclare the variable (error:chocolate is already declared)
//chocolate = "5star";   //using const we can not update the variable(Assigning to constant variable)
//console.log(fruit);   // error that fruit is not defined
console.log(chocolate);

// we can create a const object:
const market = {
    name:"FruitMarket",
    location:"Bangalore", 
    isOpen:"Yes"
};

// we can change or update a property of the object:
market.isOpen = "No";
console.log(market.isOpen);