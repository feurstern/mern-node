const fs = require('fs')
const path = require('path')


//reaad tjhe file that we want to open
const rs = fs.createReadStream(path.join(__dirname, 'writingfile', 'diary.txt'), {encode : 'utf8'});
//create the file.
const ws = fs.createWriteStream(path.join(__dirname, 'writingfile', 'new-diary.txt'));

// listener
// rs.on('data', (chunkData)=>{
//     ws.write(chunkData);
//     console.log(chunkData.toString())
// })

rs.pipe(ws);