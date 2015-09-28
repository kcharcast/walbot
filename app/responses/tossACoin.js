module.exports = function(user, request, respond) {
	respond({
		text : user + (Math.floor(Math.random() * 2) === 0 ? 'heads!' : 'tails!')
	});
}
