module.exports = () => ({
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js',
  },
});
