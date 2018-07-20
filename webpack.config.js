const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry:  './src/js',
  devtool:'source-map',
  output: {
    path: __dirname +"/build"
    },
   
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src/js',
      },
      {
      	 test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
   
      {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
			test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,            
			loader: 'file-loader'
        }
    ]

  },
    plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
if (process.env.NODE_ENV === 'production') 
		module.exports.output.filename="bundle.min.js";

else
	module.exports.output.filename="bundle.js";


