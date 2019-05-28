module.exports = {
  entry: __dirname + "/client/src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist"
  }
};
