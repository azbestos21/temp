const {readFile,writeFile} = require('fs')
readFile("./content/sub-folder/text.txt",'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile("./content/sub-folder/newfile.txt",'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
    writeFile("./content/sub-folder/result.txt",`Result of add of two files is: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    })
})

})