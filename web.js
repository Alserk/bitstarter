var express = require('express');
var fs=request('fs');
var buffer = fs.readFileSync("index.html","utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  	var buffer = fs.readFileSync("index.html");
//	console.log(buffer);
	concole.log(fs.readFileSync("index.html","utf-8").toString('utf-8'))
	response.send(fs.readFileSync("index.html","utf-8").toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
