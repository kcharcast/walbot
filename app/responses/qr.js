var http = require('http');

module.exports = function(user, request, respond) {

	var url = request.slice(request.indexOf('qr') + 'qr'.length).trim();

	respond({
		text : user + '<https://chart.googleapis.com/chart?chs=178x178&cht=qr&chl=' + url + '|here you go>!'
	});
};
