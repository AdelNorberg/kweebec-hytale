<template>
  <div>
    <div class="preview-popular">
      <h1 class="preview-header">Популярное</h1>
      <div class="preview-container">
        <div class="container-one">
          <nuxt-link :to="successPosts[0].path" class="link-img">
            <div class="preview-image theme-box">
              <img :src="successPosts[0].cover" :alt="successPosts[0].name" class="list-img">
              <div class="text-box text-box-big">{{ successPosts[0].name }}</div>
              <div class="view-box">
                <svg class="view" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.187 0C13.9146 0 16.5227 1.43062 18.9533 3.78115C19.7825 4.58305 20.5327 5.43916 21.1931 6.29562C21.5916 6.81244 21.8746 7.21899 22.0295 7.4612L22.3741 8L22.0295 8.5388C21.8746 8.781 21.5916 9.18756 21.1931 9.70438C20.5327 10.5608 19.7825 11.417 18.9533 12.2189C16.5227 14.5694 13.9146 16 11.187 16C8.45949 16 5.85136 14.5694 3.42075 12.2189C2.59153 11.417 1.84134 10.5608 1.18094 9.70438C0.782441 9.18756 0.499509 8.781 0.3446 8.5388L0 8L0.3446 7.4612C0.499509 7.21899 0.782441 6.81244 1.18094 6.29562C1.84134 5.43916 2.59153 4.58305 3.42075 3.78115C5.85136 1.43062 8.45949 0 11.187 0ZM19.6094 7.51688C19.0048 6.73272 18.3173 5.9482 17.5631 5.21885C15.4697 3.19438 13.2923 2 11.1872 2C9.08211 2 6.90468 3.19438 4.81122 5.21885C4.05702 5.9482 3.36957 6.73272 2.76493 7.51688C2.63434 7.68624 2.51367 7.84782 2.40335 8C2.51367 8.15218 2.63434 8.31376 2.76493 8.48312C3.36957 9.26728 4.05702 10.0518 4.81122 10.7811C6.90468 12.8056 9.08211 14 11.1872 14C13.2923 14 15.4697 12.8056 17.5631 10.7811C18.3173 10.0518 19.0048 9.26728 19.6094 8.48312C19.74 8.31376 19.8607 8.15218 19.971 8C19.8607 7.84782 19.74 7.68624 19.6094 7.51688ZM7.187 8C7.187 10.2091 8.97786 12 11.187 12C13.3961 12 15.187 10.2091 15.187 8C15.187 5.79086 13.3961 4 11.187 4C8.97786 4 7.187 5.79086 7.187 8ZM13.187 8C13.187 9.10457 12.2916 10 11.187 10C10.0824 10 9.187 9.10457 9.187 8C9.187 6.89543 10.0824 6 11.187 6C12.2916 6 13.187 6.89543 13.187 8Z" fill="#ECECEC"/>
                </svg>
                <div>{{ successPosts[0].view }}</div>
              </div>
              <div class="theme"></div>
            </div>
          </nuxt-link>
        </div>
        <div class="container-two">
          <div class="preview-mini">
            <post-preview-mini :post="successPosts[1]"/>
            <post-preview-mini :post="successPosts[2]"/>
          </div>
          <div class="bar">
            <div class="bar-header-container">
              <div class="bar-header">Последние статьи</div>
              <hr class="silver" />
              <div class="lists-container">
                <nuxt-link v-for="(list, key) in dataLists" :key="key" :to="list.path">
                  <div class="bar-list">{{ list.name }}</div>
                </nuxt-link>
              </div>
            </div>
            <div class="following-box">
              <div class="following-text">Подпишись на нас:</div>
              <div class="container-icons">
                <span class="separator"></span>
                <a href="https://vk.com/hytale_kweebec" target="_blank">
                  <vk class="vk"/>
                </a> 
                <span class="separator"></span>
                <a href="https://www.youtube.com/channel/UCvomqzJ4iFyOby2zWJKgZCA" target="_blank">
                  <youtube class="youtube"/>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <hr class="gold" />

    <div class="carousel-text-header">
      <nuxt-link to="/error">
          <div class="header-text">Арты</div>
      </nuxt-link>
      <nuxt-link to="/maps" class="all">Показать всё...</nuxt-link>
    </div>

    <no-ssr>
      <swiper :options="swiperOption" class="carousel">
        <swiper-slide v-for="(item, key) in carousels[0]" :key="key" class="swiper-slide">
          <img :src="item.img" class="img-slide">
        </swiper-slide>
      </swiper>
    </no-ssr>
  </div>
</template>

<script>
import axios from 'axios'
import { print } from 'graphql'
import postPreviewMini from '~/components/post-preview-mini'
import vk from '~/assets/vk'
import youtube from '~/assets/youtube'
import { GET_SUCCESS_POSTS, GET_SUCCESS_POSTS_NAMES } from '~/api/mutation'

export default {
  components: {
    postPreviewMini,
    vk,
    youtube
  },
  async asyncData({env}) {
    const url = process.client ? env.clientUrl : env.serverUrl 

    try {
      const { data } = await axios.post(url, {
        query: print(GET_SUCCESS_POSTS),
        variables: { category: 'Новости', quantity: 3 }
      })
      
      const res = await axios.post(url, {
        query: print(GET_SUCCESS_POSTS_NAMES),
        variables: { category: 'none', quantity: 7 }
      })

      return { 
        successPosts: data.data.getSuccessPosts, 
        dataLists: res.data.data.getSuccessPosts
      }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      carousels: [ 
        [
          { img: '/Hytale/1.jpeg' },
          { img: '/Hytale/2.jpg' },
          { img: '/Hytale/3.jpg' },
          { img: '/Hytale/4.jpeg' },
          { img: '/Hytale/5.jpg' }
        ]
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
  justify-content: space-between;
  align-items: center;
}

.preview-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.container-two {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.preview-image {
  height: 25rem;
  width: 45rem;
}

.list-img {
  height: 100%;
  position: absolute;
}

.link-img {
  img {
    border: none;
  }
  h3 {
    color: rgba(231, 231, 231, 0.959);
    -webkit-background-clip: none;
    background-clip: none;
    -webkit-text-fill-color: white;
    text-transform: none;
    background: none;
  }
}

.preview-mini {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 2rem;
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

.text-box-big {
  font-size: 1.7rem;
}

.theme {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(12, 12, 12, 0) 67.11%, rgba(12, 12, 12, 0.7) 93.58%);
  border: solid 1px #473e26;
  &:hover {
    border-color: $primary-color-2;
  }
}

.view-box {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  color: rgba(231, 231, 231, 0.959);
  margin-bottom: 0.8rem;
  margin-right: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.view {
  margin-top: 0.3rem;
  margin-right: 0.4rem;
}

.bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25rem;
  width: 18rem;
  background: #1B304F;
  box-shadow: $shadow-bg;
  border-radius: 5px;
}

.bar-header-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.bar-header {
  font-weight: 700;
  font-size: 1.3rem;
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0.7rem;
}

.container-icons {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

.lists-container {
  width: 90%;
}

.bar-list {
  margin-top: 0.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: #a5b9c6;
  &:hover {
    text-decoration: underline;
  }
}


.following-box {
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.separator {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: hsl(212, 22%, 46%);
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

.following-text {
  color: rgba(183, 206, 221, 0.3);
  font-weight: 500;
}

.header-text {
  background: $primary-g;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.7rem;
  font-weight: 700;
}

.gold {
  height: 1px;
  border: 0;
  background: #715e2b;
  margin-top: 4rem;
  margin-bottom: 4rem;
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

.carousel {
  display: flex;
}

.swiper-slide {
  position: relative;
  height: 226px;
  margin-left: 1.5rem;
}

.img-slide {
  border: 1px solid #534329;
  cursor: pointer;
  &:hover {
    border-color: $primary-color-2;
  }
}

.is-active {
  background-color: #518aa3;
}

@media screen and (max-width: 1400px) {
  .preview-popular {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .preview-container {
    justify-content: center;
  }
   
  .container-one {
    margin-bottom: 2rem;
  }
}
</style>
