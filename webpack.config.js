// really basic webpack config that includes jsx and react and babel loaders
module.exports = {
    entry: './app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test   : /\.(js|jsx)$/,
                loaders: 'babel-loader',
                query:
                {
                    presets:['es2015', 'react']
                }
            }
        ]
    }
  }