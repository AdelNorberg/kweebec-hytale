<template>
  <transition name="left">
    <div class="burger-container" :class="{'active-burger': active}">
      <div @click="$emit('activeBurger', false)" class="container-arrow-icon">
        <arrow-left class="arrow-left-icon"/>
      </div>
      <div class="header">
        <img src="/images/kweebec.png" class="header-kweebec" alt="kweebec">
        <div class="header-text">Kweebec</div>
      </div>
      <div class="nav-lists">
        <nuxt-link v-for="(item, key) in routers" 
                  :to="'/' + item.router" 
                  :key="key" 
                  :class="{active: $route.name === item.router}" 
                  class="nav-bar-list">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script>
import headerTop from "~/components/header-top"
import arrowLeft from "~/assets/icons/arrow-left"

export default {
  components: {
    headerTop,
    arrowLeft
  },
  props: {
    active: Boolean,
    routers: Array
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.burger-container {
  height: 100vh;
  width: 20rem;
  position: fixed;
  background: $primary-bg-2;
  z-index: 3500;
  left: -20rem;
}

.active-burger {
  left: 0rem;
}

.arrow-left-icon {
  cursor: pointer;
  color: $primary-bg-2;
}

.container-arrow-icon {
  padding: 1rem;
  margin-left: 80%;
}

.header {
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.header-kweebec {
  border: none;
  width: 5rem;
}

.nav-lists {
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-bottom: 0.1rem;
  z-index: 2;
}
</style>
