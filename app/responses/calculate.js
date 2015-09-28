var math = require('mathjs');

module.exports = function(user, request, respond) {

	var expression = request.slice(request.indexOf('calculate') + 'calculate'.length);

	var result;

	try {
		result = expression + ' = ' + math.eval(expression);
	} catch(err) {
		result = 'I don\'t understand that expression!';
	}

	respond({
		text : user + result
	});
};
