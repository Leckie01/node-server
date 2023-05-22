const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello world!');
    res.end();
}).listen(8080);


