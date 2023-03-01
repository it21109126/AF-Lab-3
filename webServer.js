// Create a web server
const http = require('http');
http.createServer(function (req, res) {
 try {

    res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Hello World!');
 res.end();
 } catch(err){
    console.log(err.message);
 }
}).listen(8080);
