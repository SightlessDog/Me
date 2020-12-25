module.exports = () => ({
  mode: 'production',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[chunkhash].js',
  },
});
