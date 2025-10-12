const http = require('node:http');

const server = http.createServer(function(req,res) { 

console.log(req.url);

switch(req.url){
    case '/':
        res.writeHead(200);
        return res.end(`Homepage`);

    case `/contact-us`:
        res.writeHead(200)
        return res.end(`Contact me at abhishekmalviya997@gmail.com`);

    case `/about`:
        res.writeHead(200);
        return res.end(`I will be a Software Engineer`);
    
    default :
        res.writeHead(404)
        return res.end(`You are Lost`);
}

});
server.listen(8000, ()=> console.log(`Server is running on PORT:8000`));