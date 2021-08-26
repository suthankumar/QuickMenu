const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: "styles.css",
  chunkFilename: "styles.css"
});

module.exports = {
  entry: ['./src/App.js'],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",  'postcss-loader',
          ],
      },

    ],
  },
  output: {
    path: path.join(__dirname, '/public/webpack/'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [miniCssPlugin,htmlPlugin]
};
