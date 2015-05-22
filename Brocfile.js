var env = require('broccoli-env').getEnv();
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');
var concatTree = require('broccoli-sourcemap-concat');
var babelTranspiler = require('broccoli-babel-transpiler');
var ES6Modules = require('broccoli-es6modules');
var uglify = require('broccoli-uglify-js');

var statics = funnel('src/views');
var vendor = funnel('src/js/vendor');
var config = funnel('src/js/config');

var scriptTree = babelTranspiler('src/js/app', {
	loose: ['es6.classes'],
	blacklist: ['es6.modules', 'useStrict']
	// externalHelpers: true
});

scriptTree = new ES6Modules(scriptTree, {
	description: 'ES6Modules',
	esperantoOptions: {
		absolutePaths: true,
		strict: true,
	}
});

scriptTree = mergeTrees([vendor, config, scriptTree]);

scriptTree = concatTree(scriptTree, {
	inputFiles: ['**/*.js'],
	outputFile: '/app.js'
});

if (env === 'production') {
	scriptTree = uglify(scriptTree);
}

module.exports = mergeTrees([statics, scriptTree]);