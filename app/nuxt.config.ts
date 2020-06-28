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
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
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
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    '@nuxtjs/auth',
    'nuxt-healthcheck'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.ts'
  },
  i18n: {
    locales: [
      {
        code: 'ja',
        file: 'ja.json'
      }
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'lang/'
  },
  apollo: {
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only'
      }
    },
    errorHandler: '~/apollo/error-handler.ts',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8765/query',
        browserHttpEndpoint: '/query'
      }
    },
    tokenName: 'auth._token.auth0',
    authenticationType: '' // default の Bearer だと「Bearer: Bearer」というように重複が起きるため
  },
  proxy: ['http://localhost:8765/query'],
  toast: {
    position: 'top-right',
    duration: 5000
  },
  auth: {
    strategies: {
      auth0: {
        domain: process.env.NUXT_ENV_AUTH0_TENANT_DOMAIN,
        client_id: process.env.NUXT_ENV_AUTH0_CLIENT_ID,
        audience: process.env.NUXT_ENV_API_AUDIENCE
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/callback',
      home: '/'
    }
  },
  healthcheck: {
    path: '/ping',
    contentType: 'application/json',
    healthy: () => {
      return JSON.stringify({ result: 'pong' })
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}
