const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js',
    devtool: 'source-map',
    output: {
        path: __dirname + "/build"
    },

    module: {
        rules: [{
                test: /\.js/,
                use: {
                    loader: 'babel-loader'
                },
                include: __dirname + '/src/js',
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            // Font files
            {
                test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
                loader: 'file-loader',
                include: [/fonts/],

                options: {
                    name: '[hash].[ext]',
                    outputPath: 'css/',
                    publicPath: url => '../css/' + url
                }
            },
            /*  {
                  test: /\.less$/,
                  loader: 'style-loader!css-loader!less-loader'
              }, {
                  // test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,            
                  // loader: 'file-loader'
              }*/
        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
if (process.env.NODE_ENV === 'production')
    module.exports.output.filename = "bundle.min.js";

else
    module.exports.output.filename = "bundle.js";