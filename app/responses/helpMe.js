module.exports = function(user, request, respond) {
	return {
		text: user + 'here\'s what you can ask me: ' + Object.keys(phrases).map(function(phrase) {
			return '`' + phrase + '`';
		}).join(', ')
	};
};
