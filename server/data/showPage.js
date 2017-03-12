var fs = require('fs');

function home() {
	console.log("This is the home page.");
}

function images() {
	console.log("This is the images source.");
}

exports.home = home;
exports.images = images;