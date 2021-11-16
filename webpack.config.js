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
      alias: {
        "@assets": path.resolve(__dirname, "./assets"),
        "@constants": path.resolve(__dirname, "./react/constants"),
        "@components": path.resolve(__dirname, "./react/components"),
        "@helpers": path.resolve(__dirname, "./react/helpers"),
        "@pages": path.resolve(__dirname, "./react/pages"),
        "@services": path.resolve(__dirname, "./react/services"),
        "@shared": path.resolve(__dirname, "./react/shared"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
  };
};

/* module.exports = (data) => {
  return {
    entry: path.resolve(__dirname, "./src/client/index.js"),
    plugins: getPlugins(data.ENV),
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "bundle.js",
      publicPath: "/public",
    },
    devtool: "inline-source-map",
    devServer: {
      https: true,
      port: 3000,
    },
  };
};
 */
