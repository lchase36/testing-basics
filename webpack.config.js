const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /^(?!.*\.test\.js$).*\.js$/,
      },
    ],
  },
};
