var http = require('http');
var cheerio = require('cheerio');

module.exports = function(user, request, respond) {

	var options = {
	    host: 'whatthefuckshouldimakefordinner.com',
	    path: '/veg.php'
	};

	http.get(options, function(response) {
		var str = '';
	    response.on('data', function (chunk) {
	        str += chunk;
	    });

	    response.on('end', function () {
			var $ = cheerio.load(str);
			var result = $('a')[0];
			var href = result.attribs.href;
			var text = result.children[0].data.toLowerCase();
			respond({
				text : user + 'how about <' + href + '|' + text + '>?'
			});
	    });
	}).end();
};
