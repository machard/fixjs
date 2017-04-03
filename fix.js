var config = require('./src/config');

module.exports = function(version) {
	config.setData(version || '42');

	var Server = require('./src/server');
	var Client = require('./src/client');

	return {
		createServer: function(stream, opt) {
		    return new Server(stream, opt);
		},
		createClient: function(stream, opt) {
		    return new Client(stream, opt);
		},
		Errors: require('./src/errors'),
		Fields: require('./src/fields'),
		Msgs: require('./src/msgs'),
	}
};
