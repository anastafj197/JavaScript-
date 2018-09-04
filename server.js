#Frank Anastasia 
#Basic JS server with node.js

var http = require('http');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Basic Server');
	response.end();
}

http.createServer(onRequest).listen(8000);
