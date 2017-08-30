const path = require('path');
const glob = require('glob');

module.exports = {
  entry: { 'src' : glob.sync('./src/*.js') },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'out')
  }
};