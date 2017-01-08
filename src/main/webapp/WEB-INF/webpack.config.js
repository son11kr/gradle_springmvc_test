module.exports = {
    entry: [
         //'./app/App.js',
      //  './contactsapp/Root.js'
      //  './shoppinglist/AnimatedShoppingList.js'
        './bankapp/BankApp.js'
        //'./airplainapp/AirPlainApp.js'
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
