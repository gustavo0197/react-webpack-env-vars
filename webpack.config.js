const path = require("path");
const webpack = require("webpack");

module.exports = (data) => {
  console.log("Environment variables", data);

  return {
    entry: {
      chat: "./src/index.js",
    },
    mode: "development",
    plugins: [
      // Set the environment variables to use in React
      new webpack.DefinePlugin({
        chatConfig: {
          TITLE: JSON.stringify(data.TITLE),
          COLOUR: JSON.stringify(data.COLOUR),
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /node_modules/,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
  };
};
