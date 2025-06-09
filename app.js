// console.log(__dirname);
// console.log(__filename);
// setInterval(()=>{
//     console.log('hello world')
// },1000);
// //require
// //module
// //process

const fs = require('fs');
fs.readFile('./content/first.text','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.text','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
       const second = result;

       fs.writeFile('./content/result.txt',`here is the result' : ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task');

       })
        
    })
})