const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
        entry: [
            __dirname + '/src/js/app.js',
            __dirname + '/src/scss/app.scss'
        ],
        output: {
            path: path.resolve(__dirname, 'dist'), 
            filename: 'js/app.min.js',
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: 'css/app.min.css' })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [],
                }, {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
                , {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name][ext]'
                    }
                }
            ]
        },
        watch: true
    };