<template>
  <div class="moderation">
    <div class="tab-nav">
      <nuxt-link class="tab" to="/moderation">
        Модерация
      </nuxt-link>
      <div class="tab">Посты</div>
    </div>
    <div v-if="!getPosts" class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div> 
    <div v-else>
      <div class="list-container">
        <div v-if="!getPosts[0]" class="no-content">Нет постов</div>
        <div v-for="(item, key) in getPosts" class="list" :key="key">
          <div class="creator">{{ item.creator }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="category">{{ item.category }}</div>
          <div class="date">{{ item.created | date }}</div>
          <nuxt-link class="tab" :to="`/${item.path}`">
            <div class="view">Посмотреть</div>
          </nuxt-link>
          <div class="delete" @click="deleteSuccessPost(item.name, key)">Удалить</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate ({ store }) {
    return store.state.auth.profileData.role === 'admin'
  },
  data() {
    return {
      tabs: ['Модерация', 'Посты']
    }
  },
  mounted() {
    this.$store.dispatch('post/getSuccessPosts', {category: 'none', quantity: 15})
  },
  computed: {
    getPosts() {
      return this.$store.state.post.successPosts
    }
  },
  methods: {
    deleteSuccessPost(name, key) {
      this.$store.dispatch('post/deleteSuccessPost', { name, key })
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.moderation {
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  max-width: 100%;
  background: $primary-bg-2;
  box-shadow: $shadow-bg;
  border: 2px solid $primary-bg-1; 
  color: $secondary-color-2;
}

.tab-nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 0.9rem;
  margin-bottom: 1rem;
}

.tab {
  color: $secondary-color-2;
  padding: 0 1.5rem 0 1.5rem;
  &:nth-child(2) {
    color: $primary-color-2
  }
  &:hover {
    color: $primary-color-2
  }
}

.no-content {
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.16);
  align-items: center;
}

.list-container {
  margin-bottom: 2rem;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem;
}

.creator {
  width: 15%;
  padding-left: 2rem;
}

.name {
  width: 45%;
}

.category {
  width: 10%;
}

.date {
  width: 15%;
}

.view, .delete{
  width: 10%;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}

.view {
  color: #17afdd;
}
.delete {
  color: hsl(350, 81%, 48%);
}

//////////// Loading ///////////// 
.loader {
  text-align: center;
  margin-top: 10rem;    
}
.loader span {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  margin: 50px auto;
  background: white;
  border-radius: 50px;
  -webkit-animation: loader 0.9s infinite alternate;
  -moz-animation: loader 0.9s infinite alternate;
}
.loader span:nth-of-type(2) {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
}
.loader span:nth-of-type(3) {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
}
@-webkit-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -webkit-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -webkit-transform: translateY(-21px);
  }
}
@-moz-keyframes loader {
  0% {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    -moz-transform: translateY(0);
  }
  100% {
    width: 24px;
    height: 24px;
    opacity: 0.1;
    -moz-transform: translateY(-21px);
  }
}
</style>
