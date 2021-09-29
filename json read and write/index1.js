//Read by using fs module

const fs = require("fs");
   
fs.readFile("user.json", function(err, data) {
      
    if (err) throw err;

    const users = JSON.parse(data);
      
    console.log(users);  
});