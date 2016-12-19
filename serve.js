var http = require('http');
var serve = require('ecstatic');

http.createServer(
  serve({ root: __dirname + '/build/'})
).listen(3000);

console.log('Serving the lite client at http://localhost:3000');
