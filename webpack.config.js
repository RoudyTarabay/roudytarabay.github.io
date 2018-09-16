const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry:  './src/js',
  devtool:'source-map',
  output: {
    path: __dirname +"/build"
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      include: __dirname + '/src/js',
      use: {
        loader: "babel-loader"
      }
    },
    {
        test: /\.html$/,

        use: [
          {

            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
    {
      test: /\.css$/,
            include: __dirname,


      use: [MiniCssExtractPlugin.loader, "css-loader"]
    },

    {
      test: /\.less$/,
      use:{
        loader: 'style-loader!css-loader!less-loader'
      }
    }, {
     test: /\.(jpe|png|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,            
     use:{
      loader: 'file-loader'
    }
  }
  ],


},
plugins: [

new MiniCssExtractPlugin({
  filename: "[name].css",
}),
new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
]
};
module.exports.output.filename="bundle.min.js";

