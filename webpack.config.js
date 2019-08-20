const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
      
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader'
      // },
      
    ],
    // loaders:[
    //   {
    //     test: /\.scss$/,
    //     use: [
    //         {
    //           loader:"sass-loader" // compiles Sass to CSS, using Node Sass by default
    //         }
    //     ]
    //   },
      
    // ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['.jsx', '.ts', '.js','.tsx']
  },
  devtool: 'source-map'
};