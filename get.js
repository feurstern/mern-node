const fsPromise = require('fs').promises;
const path = require('path');
const {add, multiply, substraction, divide} = require('./math')


const getRandomNumber = ()=>{
    return Math.floor(Math.random() * 100);
}

const val1 = getRandomNumber()
const val2 = getRandomNumber();
const addText = 'I will become master in Programing language!';

console.log(`${val1} * ${val2} = ${multiply(val1, val2)}`)

const fileOperation = async()=>{
    try{
        const data = await fsPromise.readFile(path.join(__dirname,'writingfile', 'new_diary.txt'));
        await fsPromise.writeFile(path.join(__dirname,'writingfile', 'new_diary.txt'), data.toString());
        await fsPromise.rename(path.join(__dirname, 'writingfile', 'new_diary.txt'), path.join(__dirname, 'writingfile', 'diary.txt'));

        // const newData =  await fsPromise.readFile(path.join(__dirname, 'writingfile', 'diary.txt'));
        // await fsPromise.appendFile(path.join(__dirname, 'writingfile', 'new_diary.txt', '/nI will become a polyglot that I can speak English, German, Japanese'));

        console.log(data.toString())
    }
    catch(err){
        console.log(err);
    }
}

fileOperation()

// fs.readFile(path.join(__dirname, 'writingfile', 'test.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
// console.log(`The text file :`);

// this is not longer used due to callback hell
// fs.writeFile(path.join(__dirname, 'writingfile', 'diary.txt'), 'Today, I learn NodeJS', (err) => {
//     if (err) throw err;
//     console.log("Succesfully created file to directory");
//     fs.appendFile(path.join(__dirname, 'writingfile', 'diary.txt'), '\nI vowed that I will break my bad habit', (err) => {
//         if (err) throw err;
//         console.log("Succesfully append");
//         fs.rename(path.join(__dirname, 'writingfile','diary.txt'), path.join(__dirname, 'writingfile', 'new_diary.txt'), (err)=>{
//             console.log('Rename complete')
//         })
//     })
// })

// fs.appendFile(path.join(__dirname, 'writingfile', 'test.text'), '\nI will become polyglot', (err) =>{
//     console.log('Succesfully append!')
// })

//exist uncaught erros
process.on('uncaughtException', err => {
    console.log((`There was an uncaught exception : ${err}`))
    process.exit(1);
});

