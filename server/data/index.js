var http = require('http');


var str = '{"shots":[{"id":1,"images":{"normal":"http://10.0.2.2:8080/images/01.jpg"}},{"id":1,"images":{"normal":"http://10.0.2.2:8080/images/02.jpg"}},{"id":3,"images":{"normal":"http://10.0.2.2:8080/images/03.jpg"}},{"id":4,"images":{"normal":"http://10.0.2.2:8080/images/04.jpg"}},{"id":5,"images":{"normal":"http://10.0.2.2:8080/images/05.jpg"}}]}';



http.createServer(function (request, response) {
	
	response.writeHead(200, {
		'Content-Type':'text/plain',
		'charset': 'utf-8',
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Method' : 'PUT,POST,GET,DELETE,OPTIONS'
	});


	response.write(str);
	response.end();
}).listen(8888);


if(http) {
	console.log(false);
}

console.log("Server has started. post on 8888\n");

