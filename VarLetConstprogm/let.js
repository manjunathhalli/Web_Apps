/*variable declaring with let  */

let chocolate ="KitKat";  //declaring and intializing variable 
console.log(chocolate);  // output kitkat

if (true){
    let chocolate="DairyMilk"; //declaring and intializing variable at block scope
    console.log(chocolate);  //output DairyMilk

    let fruit="Apple";
    console.log(fruit);

}
//let chocolate ="Silk";  //using let we  can not redeclare the variable (error:chocolate is already declared)

chocolate = "5star";   //updating the variable
console.log(chocolate); //output 5star

//console.log(fruit);   // error that fruit is not defined