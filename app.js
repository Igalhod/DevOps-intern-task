var http = require('http')
const port = 8080;
http.createServer(onRequest).listen(port);
console.log('Server has started at port', port);

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello World');
  response.end();
}