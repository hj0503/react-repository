const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

  entry: './src/index.ts',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json' ]
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'  
    })
  ]
}