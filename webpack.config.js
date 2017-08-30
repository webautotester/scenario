const path = require('path');
const libraryName = 'index';
const outputFile = libraryName + '.js';


module.exports = {
	entry: './src/library.js',  
	output: {
		filename: outputFile,
		path: path.resolve(__dirname, 'lib'),
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	}
};