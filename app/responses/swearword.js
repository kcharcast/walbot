var http = require('http');
var cheerio = require('cheerio');

module.exports = function(user, request, respond) {
	var options = {
		host: 'www.insult-generator.org'
	};

	http.get(options, function(response) {
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			var $ = cheerio.load(str);
			var swearword = $('.text').text();
			respond({
				text : user + "'" + swearword.toLowerCase() + "'"
			});
	    });
	}).end();
};
