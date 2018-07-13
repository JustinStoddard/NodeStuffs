var http = require('http');
var dt = require('./firstModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Hello Justin! the current date and time are currently: " + dt.myDateTime());
    res.write(req.url);
    res.end();
}).listen(8080);