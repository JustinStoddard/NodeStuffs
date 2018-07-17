var http = require('http');
var dt = require('./firstModule');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
            res.write("Hello Justin! the current date and time are currently: " + dt.myDateTime());
            res.write(req.url);
    res.end(txt);
}).listen(8080);