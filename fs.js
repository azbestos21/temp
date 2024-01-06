const { log } = require("console")
const {readFileSync,writeFileSync} = require("fs")
const first = readFileSync('./content/sub-folder/text.txt','utf8')
writeFileSync('./content/sub-folder/newfile.txt',`Hello this is the result ${first}`,{flag:'a'})
