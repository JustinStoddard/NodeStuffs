var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
  });
  fs.open('index2.html', 'w', function (err, file) { //The W in quotes tells node to create a blank file. 
    if (err) throw err;
    console.log('Saved!');
  });
  fs.appendFile('index2.html', 'This is the new stuff', function (err) {
    if (err) throw err;
    console.log('Replaced!')
  });
  fs.unlink('index2.html', function (err) {
    if (err) throw err;
    console.log('File Deleted!');
  });
}).listen(8080);

