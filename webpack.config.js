const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
          }
        ]
      },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './public',
      hot: true
    }
  };