
/**
 * Exteranto CLI configuration file.
 */

module.exports = {

  /**
   * Webpack config customizations.
   */

  webpackConfig: {
    entry: {
      background: './src/app/background/main.ts',
      content: './src/app/content/main.ts',
      feed: './src/app/feed/main.ts'
    }
  }

}
