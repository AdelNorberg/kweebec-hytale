<template>
    <div>
      <nav class="nav-bar">
        <div class="nav-lists">
          <nuxt-link to="/">
            <home class="home-icon" :class="{'active-home': $route.path === '/'}"/>
          </nuxt-link>
          <div @click="$emit('activeBurger', true)">
            <burger class="burger-icon"/>
          </div>
          <nuxt-link v-for="(item, key) in routers" 
                    :to="'/' + item.router" 
                    :key="key" 
                    :class="{active: $route.name === item.router}" 
                    class="nav-bar-list">
            {{ item.name }}
          </nuxt-link>
          <nuxt-link v-if="getProfileData.role === 'admin' ? true : false" 
                    :class="{active: $route.name === 'moderation'}" 
                    to="/moderation" 
                    class="nav-bar-list">
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
            <nuxt-link v-if="getProfileData.role === 'admin' ? true : false" to="/addNews">
              <div class="add-news" :class="{active: $route.path === '/addNews'}">Добавить новость</div>
            </nuxt-link>
            <profile class="profile-icon"/>
            <div class="profile">  
              {{ getProfileData.nickname }}
            </div>
            <div @click="onLogout" class="logout">Выйти</div>
          </div>
        </div>
        <div class="decor"></div>
        <div class="decor-second"></div>
      </nav>   
    </div> 
</template>

<script>
import home from "~/assets/home"
import profile from "~/assets/profile"
import burger from "~/assets/icons/burger"

export default {
  components: {
    home,
    profile,
    burger
  },
  props: {
    routers: Array
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

<style lang="scss" scoped>
@import '~assets/var.scss';

.nav-bar {
  color: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  background-color: $primary-bg-2;
  font-size: 25px;
  box-shadow: $shadow-bg;
  border-radius: 5px;
  position: relative;
  border: 2px solid $primary-bg-1;
  margin-bottom: 2rem;
}

.decor {
  position: absolute;
  height: 100%;
  width: 100%;
  &:before {
    top: 0;
    left: 0;
    position: absolute;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: url("./../static/images/container-corner.png") no-repeat 0 0;
    background-size: 14px;
    transform: rotate(180deg);
  }
  &:after {
    top: 0;
    right: 0;
    position: absolute;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: url("./../static/images/container-corner.png") no-repeat 0 0;
    background-size: 14px;
    transform: rotate(-90deg);
  }
}

.decor-second {
  position: absolute;
  height: 100%;
  width: 100%;
  &:before {
    bottom: 0;
    left: 0;
    position: absolute;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: url("./../static/images/container-corner.png") no-repeat 0 0;
    background-size: 14px;
    transform: rotate(-270deg);
  }
  &:after {
    bottom: 0;
    right: 0;
    position: absolute;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: url("./../static/images/container-corner.png") no-repeat 0 0;
    background-size: 14px;
  }
}

.nav-lists {
  display: flex;
  margin-left: 1.5rem;
  margin-bottom: 0.1rem;
  z-index: 2;
}

.select-list {
  margin-top: 0.2rem;
  padding: 0.1rem 0 0 0.4rem;
  display: none;
  border: none;
  background:  $primary-bg-2;
  box-sizing: border-box;
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: 600;
  color: $secondary-color-1;
  transition: border 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;
}


.small-nav-bar {
  display: none;
}

.nav-right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.home-icon {
  height: 1.5rem;
  padding-top: 0.3rem;
  color: $secondary-color-2;
  font-size: 1.5rem;
  transition: 0.5s;
  background: radial-gradient(ellipse at center, rgba(237, 181, 72, 0.1) 0%,
            rgba(237, 181, 72, 0.1) 20%, rgba(237, 181, 72, 0) 70%, rgba(237, 181, 72, 0) 100%);
  &:hover {
    color: $primary-color-2;
  } 
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

.active {
  color: $primary-color-2;
}

.active-home {
  color: $primary-color-2;
  background: radial-gradient(ellipse at center, rgba(237, 181, 72, 0.1) 0%,
            rgba(237, 181, 72, 0.1) 20%, rgba(237, 181, 72, 0) 70%, rgba(237, 181, 72, 0) 100%);
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

.auth-box {
  display: flex;
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

.profile-icon {
  margin-top: 0.3rem;
  margin-right: 0.7rem;
}

.burger-icon {
  color: $secondary-color-2;
  display: none;
  margin-left: 0.9rem;
  margin-top: .2rem;
  cursor: pointer;
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
  margin-top: 0.15rem;
  font-weight: 500;
  color: #e43d59;
  cursor: pointer;
  &:hover {
    color: rgb(235, 17, 53);
  }
}

@media screen and (max-width: 1200px) {
  .nav-bar-list {
    display: none;
  }
  .nav-lists {
    display: flex;
    align-items: center;
  }
  .burger-icon {
    display: block;
  }
  .nav-bar {
    border-radius: 0;
    border: 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }
  .sign-button {
    margin-right: 0.5rem;
  }
}

@media screen and (max-width: 789px) {
  .nav-bar {
    display: none;
  }
}
</style>
