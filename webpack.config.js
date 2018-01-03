module.exports = {
  entry:  './src/js',
  output: {
    path: __dirname ,
      filename: 'build/bundle.js',
    },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src/js',
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
			test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,            
			loader: 'file-loader'
        }
    ],
  }
};
