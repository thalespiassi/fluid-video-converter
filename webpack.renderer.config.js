const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
});

rules.push({
  loader: 'babel-loader',
  test: /\.js$/,
  exclude: /node_modules/,
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime']
  }
});

module.exports = {
  // Put your normal webpack config below here
  // entry: ['@babel/polyfill'],
  module: {
    rules
  }
};
