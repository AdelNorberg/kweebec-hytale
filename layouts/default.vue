<template>
  <div class="default-layout">
    <div class="container">
      <header-top />
      <nav class="nav-bar">
        <div class="nav-lists">
          <nuxt-link to="/">
            <home class="home-icon" />
          </nuxt-link>
          <nuxt-link v-for="(item, key) in routers" :to="'/' + item.router" :key="key" class="nav-bar-list">
            {{ item.name }}
          </nuxt-link>
          <nuxt-link v-if="getProfileData.role === 'admin' ? true : false" to="/moderation" class="nav-bar-list">
            Модерация
          </nuxt-link>
        </div>
        <div class="nav-right-box">
          <nuxt-link v-if="!isLogin"  to="signin">
            <div class="sign-button">
              Войти
            </div>
          </nuxt-link>
          <div v-if="isLogin" class="auth-box">
            <nuxt-link to="/addNews">
              <div class="add-news">Добавить новость</div>
            </nuxt-link>
            <profile class="profile-icon"/>
            <div class="profile">  
              {{ getProfileData.nickname }}
            </div>
            <div @click="onLogout" class="logout">Выйти</div>
          </div>
        </div>
      </nav>  
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

export default {
  components: {
    home,
    profile,
    headerTop,
    footerBottom
  },
  data() {
    return {
      routers: [
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

.nav-bar {
  color: white;
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

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: $primary-bg-2;
  font-size: 25px;
  box-shadow: $shadow-bg;
  border-radius: 5px;
  position: relative;
  border: 2px solid $primary-bg-1;
  margin-bottom: 2rem;
  // :before {
  //   top: 0;
  //   left: 0;
  //   position: absolute;
  //   content: "";
  //   display: block;
  //   width: 14px;
  //   height: 14px;
  //   background: url("./../static/images/container-corner.png") no-repeat 0 0;
  //   background-size: 14px;
  //   transform: rotate(180deg);
  // }
  // :after {
  //   top: 0;
  //   right: 0;
  //   position: absolute;
  //   content: "";
  //   display: block;
  //   width: 14px;
  //   height: 14px;
  //   background: url("./../static/images/container-corner.png") no-repeat 0 0;
  //   background-size: 14px;
  //   transform: rotate(-90deg);
  // }
}

.auth-box {
  display: flex;
}

.add-news {
  font-size: 1.2rem;
  color: $secondary-color-2;
  font-weight: 600;
  margin-right: 1.2rem;
  transition: 0.5s;
  &:hover {
    color: #edb548;
  } 
}

.profile-icon {
  margin-top: 0.3rem;
  margin-right: 0.7rem;
}


.profile {
  font-size: 1.2rem;
  font-weight: 300;
  margin-right: 1.4rem;
  margin-top: 0.15rem;
}

.logout {
  font-size: 1.2rem;
  margin-right: 1.9rem;
  font-weight: 500;
  color: #e43d59;
  cursor: pointer;
  &:hover {
    color: rgb(235, 17, 53);
  }
}

.nav-lists {
  margin-left: 1.5rem;
  margin-bottom: 0.1rem;
}

.nav-bar-list {
  padding-left: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: $secondary-color-2;
  transition: 0.5s;
  &:hover {
    color: $primary-color-2;
  } 
}

.nav-right-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-icon {
  height: 1.5rem;
  padding-top: 0.3rem;
  color: $primary-color-2;
  font-size: 1.5rem;
  background: radial-gradient(ellipse at center, rgba(237, 181, 72, 0.1) 0%,
            rgba(237, 181, 72, 0.1) 20%, rgba(237, 181, 72, 0) 70%, rgba(237, 181, 72, 0) 100%);
}

.sign-button {
  display: inline-block;
  position: relative;
  font-weight: 600;
  z-index: 0;
  height: 1.7em;
  padding: 0.1rem 1.2em 0 1.2em;
  margin-right: 0.2rem;
  border-radius: 5px;
  border: 1px solid $primary-color-1;
  background: linear-gradient(to bottom, #3583b4, #225b8b);
  box-sizing: border-box;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  &:hover {
    background: linear-gradient(to bottom, #4c8db6, hsl(207, 59%, 36%));
  }
}
</style>
