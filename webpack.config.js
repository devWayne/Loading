var path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "loading.js",
        libraryTarget: "umd"
    },
    loaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
            presets: ['es2015']
        }
    }]
}
