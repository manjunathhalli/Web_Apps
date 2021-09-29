/*var uses */

var fruit ="Apple";  //declaring and intializing variable globally
console.log(fruit);  // output Apple

function myFunction(){
    var choclate="DairyMilk"; //declaring and intializing variable functional scope
    //console.log(choclate);  //output DairyMilk

    var choclate ="Silk";  //redeclaring the variable
    // console.log(choclate);

    choclate = "5star";   //updating the variable
    console.log(choclate);

    console.log(fruit);    //output Apple
}
console.log(myFunction()); //calling the function
//console.log(choclate);    //we will get error that choclate not defined