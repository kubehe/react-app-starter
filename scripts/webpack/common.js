/* eslint-disable */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV.includes('prod');

module.exports = {
  entry: {
    app: [helpers.root('src/index.js')]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'src'
    }
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: helpers.root('src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      // SCSS files
      {
        test: /\.scss$|\.sass$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root('public/index.html'),
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyWebpackPlugin([
      {
        from: helpers.root('public')
      }
    ])
  ]
};