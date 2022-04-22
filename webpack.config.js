const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'development', presets: [] }) => {
  return merge(
    {
      devServer: {
        contentBase: path.resolve('./build'),
        watchContentBase: true,
        port: 3000,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader'],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./index.html') }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode)
  );
};
