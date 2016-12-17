module.exports = {
    entry: [
         './app/App.js',
      //  './contactsapp/Root.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};