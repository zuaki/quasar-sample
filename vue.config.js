const webpack = require("webpack");

module.exports = {
  pluginOptions: {
    quasar: {
      theme: "mat",
      rtlSupport: true,
      importAll: true
    }
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar-framework[\\\/]/],
  /**
   * webpackに外部プラグインを読み込ませる
   */
  configureWebpack: {
    plugins: [
      // jQueryを別名($)で読み込ませる
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  }
};
