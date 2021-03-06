var http = require('http');

module.exports = function(user, request, respond) {

	var queryString = request.slice(request.search(/spotify me/i) + 10).trim(),
		options = {
	    host: 'ws.spotify.com',
	    path: '/search/1/track.json?q=' + encodeURI(queryString)
	};

	http.get(options, function(response) {
		var results = '',
			url = "";
	    response.on('data', function (chunk) {
	        results += chunk;
	    });

	    response.on('end', function () {
	    	results = JSON.parse(results);
	    	text = "No tracks found for" + queryString;

	    	if (results.tracks.length){
	    		url = results.tracks[0].href.replace(/\:/g, '/').replace('spotify', 'http://open.spotify.com');
	    		text = user + 'is this what you are looking for? <' + url + '|'+ results.tracks[0].name +'>';
	    	}
			respond({
				text : text
			});
	    });
	}).end();
};