const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin = require("@zainulbr/i18n-webpack-plugin");
const languages = {
    "zh_TW": require("./src/_locales/zh_TW.json"),
    "ja": require("./src/_locales/ja.json")
};

module.exports = Object.keys(languages).map(function (language) {
    return {
        entry:{
            "fdrawer": `./src/js/fdrawer.${language}.js`,
            "glyphlist": `./src/js/glyphlist.${language}.js`,
            "index": `./src/js/index.js`
        },
        output: {
            filename: `[name].${language}.[contenthash].js`,
            path: path.resolve(__dirname, 'dist')
        },
        mode: 'production',
        target: ["web", "es2020"],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    // use: ['style-loader', 'css-loader'],
                }, {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                }, {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: language == 'zh_TW' ? `index.html` : `${language}.html`,
            }),
            new I18nPlugin(languages[language])
        ],
    }
});