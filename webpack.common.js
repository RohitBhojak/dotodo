const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/template.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/favicon", to: "" }, // Copies from src/assets/icons to the root of the dist folder
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
