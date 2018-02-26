var path = require('path');

module.exports = {
    entry: "./front/index.js",
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets:["env", "react"] // plugins
                }
            },
        ]
    }
}