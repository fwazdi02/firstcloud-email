 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  target:'web',
  mode: 'development',
  entry: {
     index: './src/index.js',
  },
  devServer: {
    static: './dist',
    hot:false,
  },
  output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath:'/',
     chunkFilename: '[id].[hash:8].js',
     clean: true,
  },
  module: {
    rules: [
      {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
         test: /\.html$/,
         loader: "html-loader"
      }
     ],
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
       template:'src/subscribe.html',
       filename:'subscribe.html'
     }),
     new HtmlWebpackPlugin({
       title: 'Development',
       template:'src/unsubscribe.html',
       filename:'unsubscribe.html'
     }),
  ],
 };

