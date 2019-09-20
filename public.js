var static = require('node-static'),
    port = 3000,
    http = require('http');

var server = new static.Server('./public', {cache:3600, gzip: true});
http.createServer((req, res) => {
    req.on('end', () => {
        server.serve(req, res);
    }).resume();
}).listen(port);

console.log("Serving on port " + port);