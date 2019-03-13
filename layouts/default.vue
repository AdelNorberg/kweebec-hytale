<template>
  <div class="default-layout">
    <burger-menu :active="burgerActive" @activeBurger="onActiveBurger"/>
    <div class="container">
      <transition name="fade">
        <div v-if="$nuxt.isOffline" class="offline">
          Нет подключения к Интернету
          <loading class="loading-icon"/> 
        </div>
      </transition>
      <header-top />
      <nav-menu :routers="routers" @activeBurger="onActiveBurger"/>
      <nuxt class="nuxt-content"/>
      <footer-bottom />
    </div>
  </div>
</template>

<script>
import headerTop from "~/components/header-top"
import footerBottom from "~/components/footer-bottom"
import navMenu from "~/components/nav-menu"
import loading from "~/assets/icons/loading"
import burgerMenu from "~/components/burger-menu"

export default {
  components: {
    headerTop,
    footerBottom,
    navMenu,
    loading,
    burgerMenu
  },
  data() {
    return {
      routers: [
        { name: 'Новости', router: 'news' },
        { name: 'Моды', router: 'mods' },
        { name: 'Карты', router: 'maps' },
        { name: 'Сборки', router: 'assembly' },
        { name: 'Текстуры', router: 'textures' }
      ],
      burgerActive: false
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
    },
    onActiveBurger(active) {
      this.burgerActive = active
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
  background: url("/Hytale/new-bg.webp") no-repeat;
  background-size: 115%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.container {
  min-width: 1440px;
  width: 1440px;
  padding: 0 20px 0 20px;
}

.offline {
  position: absolute;
  height: 3rem;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
}

.loading-icon {
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}


@media screen and (max-width: 1440px) {
  .container {
    min-width: 100%;
    padding: 0;
  }
  .default-layout {
    padding-left: 0rem;
    padding-right: 0rem;
  }
  .nuxt-content {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
