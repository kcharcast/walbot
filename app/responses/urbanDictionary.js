var http = require('http');

module.exports = function(user, request, respond) {

	var queryString = request.slice(request.search(/urban dictionary/i) + 16).trim(),
		options = {
	    host: 'api.urbandictionary.com',
	    path: '/v0/define?term=' + encodeURI(queryString)
	};

	http.get(options, function(response) {
		var results = '',
			relatedTags = "",
			url = "";
	    response.on('data', function (chunk) {
	        results += chunk;
	    });

	    response.on('end', function () {
	    	results = JSON.parse(results);
	    	text = 'No match found for ' + queryString;

	    	if (results.result_type !== 'no_results'){

	    		relatedTags = results.tags.join(', ');
	    		results.list = results.list.slice(5);

	    		text = results.list.map(function(obj, index){
	    			index++;
	    			return index + ") " + obj.definition + '\n    ' + 'e.g: ' + obj.example + '\n    by: ' + obj.author;
	    		});

	    		text = '\n Top 5 meaning of ' + queryString + ':\n' + text.join("\n\n") + '\n\n\nRelated tags: ' + relatedTags;
	    	}
			respond({
				text : text
			});
	    });
	}).end();
};