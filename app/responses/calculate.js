var math = require('mathjs');

module.exports = function(user, request, respond) {

	var expression = request.slice(request.indexOf('calculate') + 'calculate'.length);

	console.log(expression + ' = ' + math.eval(expression));

	respond({
		text : user + '345'
	});
};
