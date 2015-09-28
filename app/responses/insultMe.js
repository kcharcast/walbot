var http = require('http');

module.exports = function(user, request, respond) {
	http.get({
	    host: 'quandyfactory.com',
	    path: '/insult/json'
	}, function(response) {
		var str = '';
	    response.on('data', function (chunk) {
	        str += chunk;
	    });

	    response.on('end', function () {
			var insult = JSON.parse(str).insult;
			respond({
				text : user + insult.toLowerCase()
			});
	    });
	}).end();
};
