const path = require('path')
module.exports = {
  entry: {
    server: './src/server.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: './.cache/babel-loader',
              compact: false
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
        include: [path.join(process.cwd(), 'src')]
      }
    ]
  }
}
