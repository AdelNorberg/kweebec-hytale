<template>
  <div class="default-layout">
    <div class="container">
      <header class="header">
        <div class="header-kweebec"></div>
        <div class="header-text">Kweebec</div>
      </header>
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
      <footer class="footer">
        <div class="footer-info">
          ©2019 hytale-kweebec.ru
        </div>
        <div class="following-box">
          <div class="footer-following-text">Подпишись на нас:</div>
          <div>
            <span class="separator"></span>
            <a href="https://vk.com/hytale_kweebec"  target="_blank">
              <vk class="vk"/>
            </a> 
            <span class="separator"></span>
            <a href="https://www.youtube.com/channel/UCvomqzJ4iFyOby2zWJKgZCA" target="_blank">
              <youtube class="youtube"/>
            </a> 
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import vk from '~/assets/vk'
import youtube from '~/assets/youtube'
import home from "~/assets/home.vue"
import profile from "~/assets/profile.vue"

export default {
  created() {
    this.$store.dispatch('auth/isLogin')
  },
  components: {
    home,
    profile,
    vk,
    youtube
  },
  data() {
    return {
      routers: [
        { name: 'Моды', router: 'error' },
        { name: 'Карты', router: 'error' },
        { name: 'Сборки', router: 'error' },
        { name: 'Текстуры', router: 'error' }
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

.footer, .header, .nav-bar {
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

.header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.header-kweebec {
  height: 8rem;
  width: 10rem;
  background: url("/images/kweebec.png") no-repeat;
  background-size: 100%;
}

.header-text {
  margin-right: 6rem;
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

.footer {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: #10161E;
  box-shadow: inset 0 0 0 1px #2c2b22;
  border-radius: 5px;
  color: rgba(183, 206, 221, 0.3);
}

.following-box {
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-info {
  font-size: 1rem;
}

.separator {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #32372b;
  vertical-align: middle;
  margin-top: -0.5rem;
  font-size: 1.2em;
  line-height: 70px;
}

.vk {
  margin-right: 0.7rem;
}

.youtube {
  margin-left: 0.4rem;
  padding-top: 0.4rem;
}

.footer-following-text {
  color: rgba(183, 206, 221, 0.3);
}
</style>
