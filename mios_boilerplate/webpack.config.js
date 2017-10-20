var webpack = require('webpack')

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    appp: "./public-dev/src/javascript/global.js"
  },
  output: {
    path: path.resolve("./public-dev/scripts/"),
    filename: "bundle.js"
  },

  plugins: [
    new UglifyJSPlugin()
  ],

  resolve: {
    modules: [
    "node_modules",
    path.resolve(__dirname, "app")
    ],

    extensions: [".js", ".json", ".jsx"]

  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  }
}
