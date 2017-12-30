const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['~bootstrap.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-awesome.js',
    '~plugins/vue-moment.js',
    '~plugins/vue-scrollto.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [, ['bootstrap-vue/nuxt', { css: false }]],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-awesome/]
          })
        ]
      }

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
