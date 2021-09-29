 const second = () => {
    setTimeout(() => {
        console.log("Hi this is Manjunath");
    },2000)
}

const first = () => {
    console.log("first function is called");
    second();
    console.log("the code is still running");
}
first();

//second funct is callback funct 

