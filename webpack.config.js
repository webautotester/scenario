const path = require('path');
const glob = require('glob');

module.exports = {
	entry: { 'src' : glob.sync('./src/*.js') },  
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'lib')
	}
};