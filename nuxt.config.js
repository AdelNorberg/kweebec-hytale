module.exports = {
  mode: 'universal',
  head: {
    title: 'Hytale-kweebec',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hytale-kweebec - хайтейл, моды, сервера, карты, текстуры, сборки' },
      { hid: 'keywords', name: 'keywords', content: 'hytale,хайтейл,квибик,моды,карты,сервера,текстуры,новости,сборки,рейтинг,достижение' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/kweebec.png' }
    ]
  },
  loading: { color: '#ecbc62' },
  css: [
    '~/assets/styles/transition.css'
  ],
  plugins: [
    { src: '~plugins/mavon-editor', mode: 'client' },
    { src: '~/plugins/date-filter', mode: 'client' },
    { src: '~/plugins/vuelidate', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vue-responsive-components', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  env: {
    serverUrl: 'http://localhost:3000/graphql',
    clientUrl: 'http://localhost:3000/graphql'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
