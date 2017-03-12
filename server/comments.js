var http = require("http");

var comments = {
    "comments": [
        {
            "body": "<p>Left. But both are amazing </p>",
            "created_at": "2017-03-11T07:44:09Z",
            "id": 6034366,
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/01.jpg",
                "username": "scarlet"
            }
        },
        {
            "body": "<p><a href=\"https://dribbble.com/1166461\">@Andrei Dulcu</a> Thank you! ☺️</p>",
            "created_at": "2017-03-11T07:45:27Z",
            "id": 6034367,
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/02.jpg",
                "username": "crazy"
            }
        },
        {
            "body": "<p>Very nice</p>",
            "created_at": "2017-03-11T07:49:36Z",
            "id": 6034378,
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/03.jpg",
                "username": "发的色弱他"
            }
        },
        {
            "body": "<p>Perfect!</p>",
            "created_at": "2017-03-11T08:00:36Z",
            "id": 6034410,
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/04.png",
                "username": "韦斯特"
            }
        },
        {
            "body": "<p>Like the layout!</p>",
            "created_at": "2017-03-11T08:27:01Z",
            "id": "6034413",
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/05.jpg",
                "username": "androidApp"
            }
        },
        {
            "body": "<p>Right one :) But both versions are great!</p>",
            "created_at": "2017-03-11T09:31:33Z",
            "id": "6034453",
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/01.jpg",
                "username": "黑武士"
            }
        },
        {
            "body": "<p><a href=\"https://dribbble.com/938110\">@Silvia Bormüller</a> Thank you! ^^</p>",
            "created_at": "2017-03-11T09:32:15Z",
            "id": "6034454",
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/02.jpg",
                "username": "哈哈"
            }
        },
        {
            "body": "<p>excelent work</p>",
            "created_at": "2017-03-11T12:34:55Z",
            "id": "6034589",
            "user": {
                "avatar_url": "http://10.0.2.2:8080/images/03.jpg",
                "username": "如若"
            }
        }
    ]
}

var str = JSON.stringify(comments);

function onRequest(request, response) {
	
	console.log("Request received.");
	response.writeHead(200, {
		'Content-Type':'text/plain',
		'charset': 'utf-8',
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Method' : 'PUT,POST,GET,DELETE,OPTIONS'
	});


	response.write(str);
	response.end();
}

http.createServer(onRequest).listen(9000);

console.log("Server has started. post on 9000\n");