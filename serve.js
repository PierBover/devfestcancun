const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const baseConfig = require('./webpack.config.js');

const serveConfig = {
};

module.exports = merge(baseConfig, serveConfig);

module.exports.serve = {
	add: (app, middleware, options) => {
		app.use(convert(history({})));
	},
	dev: {
		stats: 'minimal'
	}
}