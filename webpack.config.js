module.exports = {
  entry: __dirname + "/client/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[sha1:hash:hex:9]"
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/dist"
  }
};
