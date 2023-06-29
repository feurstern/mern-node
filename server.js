const express = require('express');
const app = express();
const os  = require('os');
const math = require('./math')

// server view of information
const path = require('path');
const { get } = require('http');
app.use('/', express.static(path.join(__dirname,'/public')))

// which port that I wan to use for
const PORT  = process.env.PORT || 3020;

// tell orur app to listenig
app.listen(PORT,()=>console.log(`Server listening on ${PORT}`));
console.log(`OS Name : ${os.type()}`);
console.log(`OS Version : ${os.version()}`)
console.log(__dirname);
console.log(__filename)
console.log(`The path is ${path.dirname(__filename)}`);
console.log(`The file name is : ${path.basename(__filename)}`)
console.log(path.parse(__filename))
const getInfoFolder = path.parse(__filename);

const getRandomNumber =()=>{
    return  Math.floor(Math.random() * 100)
}

const value1= getRandomNumber();
const value2 = getRandomNumber();

// math operator
console.log(`${value1} + ${value2} = ${math.add(value1, value2)}`)

// getInfoFolder.forEach(element => {
//     // console.log(element);
    
// });