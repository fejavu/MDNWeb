// Load HTTP modele
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Creat HTTP server and listen on port 3000 for request
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello Fucking World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});