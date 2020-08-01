export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global Styles (Do not import actual styles)
   ** https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: [
      // Plugins
      '~/assets/scss/plugins/_browserhack.scss', // Doc: https://github.com/selimdoyranli/browser-hack-sass-mixins
      '~/assets/scss/plugins/_breakpoint.scss',
      '~/assets/scss/plugins/_mq.scss', // Doc: https://github.com/sass-mq/sass-mq
      // Functions
      '~/assets/scss/functions/_center.scss',
      '~/assets/scss/functions/_triangle.scss',
      // Mixins
      '~/assets/scss/mixins/_font.scss',
      '~/assets/scss/mixins/_gradient.scss'
    ]
  },
  /*
   ** Global Styles (Actual styles)
   */
  css: [
    // APP (Import & Shared managements for scss styles)
    '~/assets/scss/app.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/style-resources'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
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
  },

  /*
   ** Server configuration
   ** See https://nuxtjs.org/api/configuration-server/
   */
  server: {
    host: '0.0.0.0', // default: localhost,
    timing: false,
    port: 80
  }
}
