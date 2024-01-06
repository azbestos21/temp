const http  =require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/about')
    {
        res.end("This is our history")
    }
    else if(req.url === '/')
    {
        res.end("Welcome to home page")
    }
    else{
        res.end("<h1>OOPS</h1>Page does not exist")
    }

})
server.listen(5000)