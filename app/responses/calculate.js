var math = require('mathjs');

module.exports = function(user, request, respond) {

	var expression = request.slice(request.indexOf('calculate') + 'calculate'.length);

	var result = expression + ' = ' + math.eval(expression);

	respond({
		text : user + result
	});
};
