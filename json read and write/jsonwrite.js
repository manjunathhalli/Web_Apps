const fs = require("fs");

const users = require("./user.json");

let user = {
    name : "Manjunath",
    age : 26,
    language : ["C,c++,Java,JavaScript"]
};

users.push(user);

fs.writeFile("user.json",JSON.stringify(users),err => {
    if (err) throw err;
    console.log("Done writing");
 });