const fs = require('fs');


if(!fs.existsSync('/miku')){
    fs.mkdir('./miku', (err)=>{
        if(err) throw err;
        console.log("The directory has been created successfully!")
    })  
}

if(fs.existsSync('./miku')){
    fs.rmdir('./miku', (error)=>{
        if(error) throw error;
        console.log("The directory has been deleted succsefully");
    })
}