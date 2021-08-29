let fs = require("fs");

console.log("Befor");

// // // // // // // Using a normal call back function
// fs.readFile("f1.txt", function cb(err, data){
//     console.log("data "+data);
// })

// // // // // // // Using a promises function
let fReadPromise = fs.promises.readFile("f1.txt");

fReadPromise.then(function  cb(data){
    console.log("data "+ data);
})

fReadPromise.catch(function  cb(err){
    console.log("error "+ err);
})

console.log("After");