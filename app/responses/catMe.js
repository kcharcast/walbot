var http = require('http');

module.exports = function(user, request, respond) {

	var options = {
	    host: 'thecatapi.com',
	    path: '/api/images/get?format=src'
	};

	if (request.indexOf('gif') > -1) {
		options.path = options.path + '&type=gif';
	}

	http.get(options, function(response) {
		var str = '';
	    response.on('data', function (chunk) {
	        str += chunk;
	    });

	    response.on('end', function () {
			respond({
				text : user + '<' + response.headers.location + '|here you go!>'
			});
	    });
	}).end();
};
