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
    { src: '~plugins/mavon-editor', mode: 'client' },
    { src: '~/plugins/date-filter', mode: 'client' },
    { src: '~/plugins/vuelidate', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  env: {
    serverUrl: 'http://localhost:3000/graphql',
    clientUrl: 'http://157.230.108.113/graphql'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
