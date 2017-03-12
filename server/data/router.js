var showPage = require("./showPage");

function route(pathname) {

	var handle = {};
	handle["/"] = showPage.home;
	handle["/images"] = show.images;

	if(typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("404 Not Found " + pathname);
	}
}

export.route = route;