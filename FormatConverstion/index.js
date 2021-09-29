import { appendFile, readFileSync, writeFileSync } from "fs";

let emp = {
  name: "Manjunath",
  age: 26,
  company: "Happiest Minds",
  technology: "WebApp with react",
  location: "Banglore",
};

let empData = JSON.stringify(emp, null, 2);

appendFile("JSONupdated.json", empData, (err) => {              //Appending more data to JSON file
  if (err) throw err;
  console.log("Data written to new file");
});

const doc = readFileSync("data.json");
const toString = doc.toString(); // convert to string
const data = JSON.parse(toString); // string to object
console.log(data);


function convertToCSV(arr) {            //Conversion of JSON to XML
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

writeFileSync("convertedToCSV.csv", convertToCSV(data), (err) => {      //Creating new file with CSV data
  if (err) throw err;
  console.log("Data written to new file");
});

function convertToXML(obj) {        //Conversion of JSON to XML
  var xml = "";
  for (var prop in obj) {
    xml += obj[prop] instanceof Array ? "" : "<" + prop + ">";
    if (obj[prop] instanceof Array) {
      for (var array in obj[prop]) {
        xml += "<" + prop + ">";
        xml += convertToXML(new Object(obj[prop][array]));
        xml += "</" + prop + ">";
      }
    } else if (typeof obj[prop] == "object") {
      xml += convertToXML(new Object(obj[prop]));
    } else {
      xml += obj[prop];
    }
    xml += obj[prop] instanceof Array ? "" : "</" + prop + ">";
  }
  var xml = xml.replace(/<\/?[0-9]{1,}>/g, "");
  return xml;
}

writeFileSync("convertedToXML.xml", convertToXML(data), (err) => {              //Creating new file with XML data       
  if (err) throw err;
  console.log("Data written to new file");
});