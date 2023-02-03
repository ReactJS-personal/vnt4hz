module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
      return webpackConfig;
    },

    // plugins: [
    //   // Inject the "__DEV__" global variable.
    //   new webpack.DefinePlugin({
    //     __DEV__: process.env.NODE_ENV !== "production",
    //   })
    // ],
  },
};
