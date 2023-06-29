const fs = require('fs');
const path = require('path');
const {add, multiply, substraction, divide} = require('./math')


const getRandomNumber = ()=>{
    return Math.floor(Math.random() * 100);
}

const val1 = getRandomNumber()
const val2 = getRandomNumber();


console.log(`${val1} * ${val2} = ${multiply(val1, val2)}`)

fs.readFile(path.join(__dirname, 'writingfile', 'test.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
console.log(`The text file :`);

fs.writeFile(path.join(__dirname, 'writingfile', 'diary.txt'), 'Today, I learn NodeJS', (err) => {
    if (err) throw err;
    console.log("Succesfully created file to directory");
    fs.appendFile(path.join(__dirname, 'writingfile', 'diary.txt'), '\nI vowed that I will break my bad habit', (err) => {
        if (err) throw err;
        console.log("Succesfully append");
        fs.rename(path.join(__dirname, 'writingfile','diary.txt'), path.join(__dirname, 'writingfile', 'new_diary.txt'), (err)=>{
            console.log('Rename complete')
        })
    })
})

fs.appendFile(path.join(__dirname, 'writingfile', 'test.text'), '\nI will become polyglot', (err) =>{
    console.log('Succesfully append!')
})

//exist uncaught erros
process.on('uncaughtException', err => {
    console.log((`There was an uncaught exception : ${err}`))
    process.exit(1);
});

