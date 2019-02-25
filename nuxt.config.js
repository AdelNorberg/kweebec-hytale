const pkg = require('./package')


module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#ecbc62' },
  css: [
    '~/assets/styles/transition.css'
  ],
  plugins: [
    { src: '~plugins/mavon-editor', ssr: false },
    { src: '~plugins/date-filter', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://157.230.108.113:3000/graphql'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
