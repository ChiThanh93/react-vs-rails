var webpack = require("webpack");

const paths = {
  js: __dirname + "/app/assets/javascripts",
  jsx: __dirname + "/jsx",
}

module.exports = {
  entry: paths.jsx + "/app",
  output: {
    path: paths.js,
    filename: "react-app.js",
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.jsx?$/,
      loader: "babel-loader",
      query: {
        presets: ['react']
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      PropTypes: "prop-types", //validate_type
      update: "react-addons-update", //addon-update-state
      t: "counterpart", //i18n
      semantic: "semantic-ui"
    })
  ],
}
