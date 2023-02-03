module.exports = {
  module: {
    entry: "./src/index.js",
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
