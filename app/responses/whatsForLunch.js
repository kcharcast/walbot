module.exports = function(user, request, respond) {
	var places = [
		'Cosmo',
		'Itsu',
		'Marks and Spencer\'s',
		'Mission Burrito',
		'O\'Neill\s',
		'Sainsbury\'s',
		'Shed',
		'Sushimania',
		'Wagamama',
		'West Cornwall Pasty Co.'
	];
	var place = places[Math.floor(Math.random() * places.length)];

	respond({
		text : user + 'how about <http://google.com/#q=' + place + '%20Reading|' + place + '>?'
	});
};
