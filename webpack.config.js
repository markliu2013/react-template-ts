const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, '/dist'), // the bundle output path
        filename: 'main.js' // the name of the bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html' // to import index.html file inside index.js
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
    devServer: {
        port: 3035 // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
};