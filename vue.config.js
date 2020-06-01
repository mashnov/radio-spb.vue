const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

// Only for GHPages
const outputDir = '../docs/vue';
const developPath = '/';
const productionPath = '/radio/vue/';
const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? productionPath : developPath;
const productionSourceMap = isProduction;

module.exports = {
  outputDir,
  publicPath,
  productionSourceMap,
  configureWebpack: {
    plugins: [
      new WebpackNotifierPlugin({
        title: 'Vue Project',
        contentImage: path.join(__dirname, './src/assets/icons/150.png')
      }),
      new UnusedFilesWebpackPlugin({
        failOnUnused: true,
        patterns: ['./src/[!_assets]*/*.*'],
      }),
      new CopyWebpackPlugin([
        { from: `${__dirname}/src/assets`, to: './' },
      ]),
    ],
    resolve: {
      alias: {
        store: path.resolve(__dirname, 'src/store'),
        favicon: path.resolve(__dirname, 'src/assets/favicon'),
        images: path.resolve(__dirname, 'src/assets/images'),
        components: path.resolve(__dirname, 'src/components'),
      },
      extensions: ['.js', '.vue'],
    },
  },
  css: {
    loaderOptions: {
      css: {
        url: true,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config.plugin('html').tap(args => {
      args[0].title = 'Radio';
      return args;
    });
  },
};
