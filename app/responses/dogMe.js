var http = require('http');
var cheerio = require('cheerio');

module.exports = function(user, request, respond) {
	var options = {
		host: 'www.woofsites.com',
	    path: '/browse/browse-dog-photos.php'
	};

	http.get(options, function(response) {
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			var $ = cheerio.load(str);
			var src = $('img')[2].attribs.src;
			respond({
				text : user + '<http://' + options.host + src +'|here you go!>'
			});
	    });
	}).end();
};
