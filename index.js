http = require('http')
http.createServer((req, res) => {
if(req.url=== "/" && req.method === "GET") {
    res.writeHead(200);
    res.write("<h1>Welcome Home</h1>")
    res.end()
} else if(req.url === "/account" && req.method === "GET") {
    res.writeHead(200);
    res.write("<h1>Welcome to Accounts</h1>")
    res.end()
} else {
    res.writeHead(404);
    res.end("<h1>404 Not Found</h1>")
}
}).listen(8000)
console.log("Serving on port 8000");