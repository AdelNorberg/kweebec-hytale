<template>
  <div>
    <div class="preview-popular">
      <h1 class="preview-header">Популярное</h1>
      <div class="preview-container">
        <div class="preview-image theme-box">
          <h2 class="text-box">Вариативные отношения Hytale</h2>
          <div class="theme"></div>
        </div>
        <div class="preview-mini">
          <div class="preview-image-mini">
            <h3 class="text-box text-box-mini">Серверные настройки</h3>
            <div class="theme"></div>
          </div>
          <div class="preview-image-mini">
            <h3 class="text-box text-box-mini">Графика в Hytale</h3>
            <div class="theme"></div>
          </div>
        </div>
        <div class="bar">
          <div class="bar-header">Последние статьи</div>
          <hr class="silver" />
          <div class="lists-container">
            <nuxt-link to="/error">
              <div class="bar-list">Мы с моей командой смотрим </div>
            </nuxt-link>
            <nuxt-link to="/error">
              <div class="bar-list">Немного магии Hytale в вашу ленту❄ </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    
    <div class="carousel-container">
      <div class="carousel-text-header">
        <nuxt-link to="/error">
            <h2 class="header-text">Моды</h2>
        </nuxt-link>
        <nuxt-link to="/mods" class="all">Показать всё...</nuxt-link>
      </div>
      <hooper :items-to-show="3.8" :items-to-slide="1" :wheelControl="false" class="carousel">
        <slide v-for="(slide, key) in carousels[0]" :key="key">
          {{ slide.name }}
        </slide>
        <hooper-navigation slot="hooper-addons" />
      </hooper>
    </div>

    <hr class="gold" />

    <div class="carousel-container">
      <div class="carousel-text-header">
        <nuxt-link to="/error">
            <h2 class="header-text">Карты</h2>
        </nuxt-link>
        <nuxt-link to="/maps" class="all">Показать всё...</nuxt-link>
      </div>
      <hooper :items-to-show="3.8" :items-to-slide="1" :wheelControl="false" class="carousel">
        <slide v-for="(slide, key) in carousels[1]" :key="key">
          {{ slide.name }}
        </slide>
        <hooper-navigation slot="hooper-addons" />
      </hooper>
    </div> 
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import './../node_modules/hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      carousels: [ 
        [
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' }
        ],
        [
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' },
          { name: 'Nsada' }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/var.scss';

.carousel-container {
  margin-top: 5rem;
}

.carousel {
  margin-top: 1rem;
}

.carousel-text-header {
  display: flex;
  font-display: row;
  justify-content: space-between;
  align-items: center;
}

.preview-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.preview-image {
  height: 25rem;
  width: 45rem;
  background: url("/hytale/screenshots/2.jpg") no-repeat;
  background-size: 100%;
  border: 1px solid #534329;
  cursor: pointer;
  &:hover {
    border-color: $primary-color-2;
  }
}

.preview-mini {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.preview-image-mini {
  height: 11rem;
  width: 20rem;
  background: url("/hytale/screenshots/8.jpg") no-repeat;
  background-size: 100%;
  position: relative;
  border: 1px solid #534329;
  cursor: pointer;
  &:hover {
    border-color: $primary-color-2;
  }
}

.preview-image-mini:nth-child(2) {
  height: 11rem;
  width: 20rem;
  background: url("/hytale/screenshots/5.jpg") no-repeat;
  background-size: 100%;
}

.theme-box {
  position: relative;
}

.text-box {
  position: absolute;
  bottom: 0;
  z-index: 2;
  color: rgba(231, 231, 231, 0.959);
  font-weight: 600;
  padding: 0 1rem 0.7rem;
}

.text-box-mini {
  font-size: 16px;
}

.theme {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(12, 12, 12, 0) 67.11%, rgba(12, 12, 12, 0.7) 93.58%);
}

.bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25rem;
  width: 18rem;
  background: #1B304F;
  box-shadow: $shadow-bg;
  border-radius: 5px;
}

.bar-header {
  font-weight: 700;
  font-size: 1.3rem;
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0.7rem;
}

.lists-container {
  width: 90%;
}

.bar-list {
  margin-top: 0.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: #a5b9c6;
}

.header-text {
  background: $primary-g;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold {
  height: 1px;
  border: 0;
  background: #715e2b;
  margin-top: 4rem;
  margin-bottom: -2.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.silver {
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  height: 1px;
  background: $primary-g;
  width: 80%;
}

.all {
  font-weight: 600;
}

.hooper-slide {
  height: 200px;
  background-color: #91B6C6;
  padding: 20px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  border: 1px solid #534329;
  cursor: pointer;
  &:hover {
    border-color: $primary-color-2;
  }
}

.hooper-slide:nth-child(1) {
  background: url("/hytale/screenshots/9.jpg") no-repeat;
  background-size: 100%;
}

.hooper-slide:nth-child(2) {
  background: url("/hytale/screenshots/8.jpg") no-repeat;
  background-size: 100%;
}

.hooper-slide:nth-child(3) {
  background: url("/hytale/screenshots/11.jpg") no-repeat;
  background-size: 100%;
}

.hooper-slide:nth-child(4) {
  background: url("/hytale/screenshots/10.jpg") no-repeat;
  background-size: 100%;
}

.hooper-slide:nth-child(5) {
  background: url("/hytale/screenshots/12.jpg") no-repeat;
  background-size: 100%;
}

.hooper-slide:first-child {
  margin-left: 0;
}

.is-active {
  background-color: #518aa3;
}
</style>
