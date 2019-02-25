<template>
  <div class="item">
    <nuxt-link :to="item.path">
      <h4 class="header-text">{{ item.name }}</h4>
      <img :src="item.cover" alt="item.name">
      <p class="description">В этой статье мы собираемся рассказать о технологии, которая лежит в 
        основе каждого сервера Hytale - то, как она работает, а так же то, как вы будете взаимодействовать
        с ней. Для этого нам понадобится некоторая техническая терминология</p>
    </nuxt-link>
    <div class="data">
      <div class="left">
        <div class="category">{{ item.category }}</div>
        <div class="circle">&#9679;</div>
        <div class="date">{{ item.created.substr(0,10) }}</div>
        <div class="circle">&#9679;</div>
        <div class="view"> 
          <svg class="view-icon" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.187 0C13.9146 0 16.5227 1.43062 18.9533 3.78115C19.7825 4.58305 20.5327 5.43916 21.1931 6.29562C21.5916 6.81244 21.8746 7.21899 22.0295 7.4612L22.3741 8L22.0295 8.5388C21.8746 8.781 21.5916 9.18756 21.1931 9.70438C20.5327 10.5608 19.7825 11.417 18.9533 12.2189C16.5227 14.5694 13.9146 16 11.187 16C8.45949 16 5.85136 14.5694 3.42075 12.2189C2.59153 11.417 1.84134 10.5608 1.18094 9.70438C0.782441 9.18756 0.499509 8.781 0.3446 8.5388L0 8L0.3446 7.4612C0.499509 7.21899 0.782441 6.81244 1.18094 6.29562C1.84134 5.43916 2.59153 4.58305 3.42075 3.78115C5.85136 1.43062 8.45949 0 11.187 0ZM19.6094 7.51688C19.0048 6.73272 18.3173 5.9482 17.5631 5.21885C15.4697 3.19438 13.2923 2 11.1872 2C9.08211 2 6.90468 3.19438 4.81122 5.21885C4.05702 5.9482 3.36957 6.73272 2.76493 7.51688C2.63434 7.68624 2.51367 7.84782 2.40335 8C2.51367 8.15218 2.63434 8.31376 2.76493 8.48312C3.36957 9.26728 4.05702 10.0518 4.81122 10.7811C6.90468 12.8056 9.08211 14 11.1872 14C13.2923 14 15.4697 12.8056 17.5631 10.7811C18.3173 10.0518 19.0048 9.26728 19.6094 8.48312C19.74 8.31376 19.8607 8.15218 19.971 8C19.8607 7.84782 19.74 7.68624 19.6094 7.51688ZM7.187 8C7.187 10.2091 8.97786 12 11.187 12C13.3961 12 15.187 10.2091 15.187 8C15.187 5.79086 13.3961 4 11.187 4C8.97786 4 7.187 5.79086 7.187 8ZM13.187 8C13.187 9.10457 12.2916 10 11.187 10C10.0824 10 9.187 9.10457 9.187 8C9.187 6.89543 10.0824 6 11.187 6C12.2916 6 13.187 6.89543 13.187 8Z" fill="#9eb2c0"/>
          </svg>
          {{ item.view }}</div>
      </div>
      <nuxt-link to="/"><div class="right"> {{ item.creator }} </div></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 1rem;
}

.item {
  margin-top: 1.5rem;
  width: 50%;
  min-width: 50%;
  padding: 0 0.6rem 0 0.6rem;
  &:hover {
    background: rgba(210, 233, 247, 0.04);
  }
}

.header-text {
  text-transform: uppercase;
  padding-top: 0.5rem;
  padding-bottom: 0.4rem;
}

.description {
  margin-top: 0.4rem;
  color: #b7cedd;
  margin-bottom: 0.6rem;  
}

.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9eb2c0;
  background: rgba(210, 233, 247, 0.04);
  height: 2.5rem;
  margin-bottom: 0.4rem;
}

.left {
  display: flex;
  align-items: center;
  > div {
    margin-left: 1rem;
  }
}

.category {
  padding-bottom: 0.2rem;
}

.circle {
  padding-bottom: 0.2rem;
  font-size: 0.9rem;
}

.right {
  color: #ecbc62;
  margin-right: 0.9rem;
  margin-bottom: 0.2rem;
}

.view-icon {
  margin-bottom: -0.05rem;
  height: 0.8rem;
}
</style>
