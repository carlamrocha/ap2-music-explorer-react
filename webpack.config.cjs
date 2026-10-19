
const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/main.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: {
      directory: __dirname,
      publicPath: '/',
    },
    devMiddleware: {
      publicPath: '/',
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
};
