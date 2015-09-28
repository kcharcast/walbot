var http = require('http');

module.exports = function(user, request, respond) {
	http.get({
	    host: 'tambal.azurewebsites.net',
	    path: '/joke/random'
	}, function(response) {
		var str = '';
	    response.on('data', function (chunk) {
	        str += chunk;
	    });

	    response.on('end', function () {
			respond({
				text : user + JSON.parse(str).joke
			});
	    });
	}).end();
};
