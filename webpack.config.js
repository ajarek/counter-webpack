const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/app/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
       use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [
            "style-loader",
             "css-loader",
            "postcss-loader"
            ]
      },
      {
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				loader: 'file-loader',
				options: {
					name: '/assets/images/[name].[ext]',
				},
			},
      {
        test: /\.(?:woff|woff2|eot|ttf|otf)$/i,
                loader: "url-loader",
                options: {
                    limit: 50000,
                    mimetype: "application/font-ttf",
                    name: "/assets/fonts/[name].[ext]",
                },
      }

    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Counter",
        template: "./src/public/index.html",
        filename: "index.html"//output file
    }),
  ],
  mode: "development",
};

module.exports = config;