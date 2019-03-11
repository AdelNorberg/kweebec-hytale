<template>
  <div class="default-layout">
    <div class="container">
      <header-top />
      <nav-menu />
      <nuxt />
      <footer-bottom />
    </div>
  </div>
</template>

<script>
import home from "~/assets/home"
import profile from "~/assets/profile"
import headerTop from "~/components/header-top"
import footerBottom from "~/components/footer-bottom"
import navMenu from "~/components/nav-menu"

export default {
  components: {
    home,
    profile,
    headerTop,
    footerBottom,
    navMenu
  },
  data() {
    return {
      routers: [
        { name: 'Новости', router: 'news' },
        { name: 'Моды', router: 'mods' },
        { name: 'Карты', router: 'maps' },
        { name: 'Сборки', router: 'assembly' },
        { name: 'Текстуры', router: 'textures' }
      ]
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.auth.isLogin
    },
    getProfileData() {
      return this.$store.state.auth.profileData
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/var.scss';
@import '~assets/tag.scss';

html {
  font-family: 'Helvetica Neue', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #15243a;
}

a {
  color: white;
  text-decoration: none;
}

.default-layout {
  display: flex;
  justify-content: center;
  min-width: 1440px;
  background: url("/Hytale/new-bg.webp") no-repeat;
  background-size: 115%;
}

.container {
  width: 1440px;
  padding: 0 20px 0 20px;
}
</style>
