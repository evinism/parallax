// webpack.config.js
module.exports = {
  entry: './app/assets/js/main.js',
  output: {
    path: 'public/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // really quite dumb
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
