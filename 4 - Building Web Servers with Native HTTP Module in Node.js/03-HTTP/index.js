const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(function (req, res) {

    const method = req.method;
    const path = req.url;

const log = `\n[${Date.now()}] : ${method} ${path}`
fs.appendFileSync('log.txt', log, 'utf-8');

    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    return res.writeHead(200).end(`hello from Abhishek's Server :)`);
                case '/contact-us':
                    return res.writeHead(200).end(`you can contact me on abhishekmalviya997@gmail.com or \n+91 99774-19474`);
                    case '/tweet':
                        return res.writeHead(200).end(`Tweet01\nTweet02\n`);
            }
        }
        break; // IMP if not done here than /tweet also works on get request.
        case 'POST': {
            switch (path) {
                case '/tweet':
                    return res.writeHead(201).end(`tweeted successfully :)`);
            }
        }
    }
    return res.writeHead(404).end(`You are lost :(`);
});

server.listen(8000, () => console.log(`Server is listening on port:8000`));