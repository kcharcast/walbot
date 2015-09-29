module.exports = function (req, res) {

	var userName = req.body.user_name;
	var user = '@' + userName + ', ';
	var request = req.body.text;
	var apiKey = process.env.SLACK_API_KEY || 'local-development';

	var phrases = {
		'calculate': require('./responses/calculate'),
		'cat me': require('./responses/catMe'),
		'bird me': require('./responses/birdMe'),
		'dog me': require('./responses/dogMe'),
		'insult me': require('./responses/insultMe'),
		'toss a coin': require('./responses/tossACoin'),
		'swearword': require('./responses/swearword'),
		'what\'s for lunch': require('./responses/whatsForLunch'),
		'tell me a joke': require('./responses/tellMeAJoke'),
		'spotify me': require('./responses/spotify')
	};

	var respond = function(data) {
		if (userName !== 'slackbot' && req.body.token === apiKey) {
			return res.status(200).json(data);
		} else {
			return res.status(200).end();
		}
	};

	var matched = false;
	for (var phrase in phrases) {
		if (request.indexOf(phrase) > -1) {
			matched = true;
			phrases[phrase](user, request, respond);
		}
	}
	if (!matched) {
		respond({
			text: user + 'I don\'t know what that means! You can enter the following: ' + Object.keys(phrases).map(function(phrase) {
				return '`' + phrase + '`';
			}).join(', ') + '.'
		});
	}
};
