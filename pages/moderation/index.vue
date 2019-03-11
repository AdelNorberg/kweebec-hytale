<template>
  <div class="moderation">
    <div class="tab-nav">
      <div class="tab">Модерация</div>
      <nuxt-link class="tab" to="/moderation/posts">
        Посты
      </nuxt-link>
    </div>
    <div v-if="!getPosts" class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div> 
    <div v-else class="list-container">
      <div v-if="!getPosts[0]" class="no-content">Нет постов</div>
      <div v-for="(item, key) in getPosts" class="list" :key="key">
        <div class="creator">{{ item.creator }}</div>
        <div class="name">{{ item.name }}</div>
        <div class="category">{{ item.category }}</div>
        <div class="date">{{ item.created | date}}</div>
        <div class="approve" @click="approvePost(item.name, key)">Одобрить</div>
        <div class="view" @click="metaModal(item.name)">Метаданные</div>
        <transition name="fade">
          <div v-if="modal.active" class="modal">
            <div class="modal-container">
              <div class="modal-close-container">
                <div @click="closeModal" class="modal-close">
                  <exit />
                </div>
              </div>
              <div class="modal-name">
                {{ modal.name }}
              </div>
              <hr>
              <div class="keywords">Введите ключи через запятую без пробелов</div>
              <textarea
                v-model.trim="modal.keywords"
                class="input" 
                type="text"
                placeholder="Введите ключи...">
              </textarea>
              <div @click="approvePost(item.name, item.key, modal.keywords)" class="save-add">Сохранить и добавить</div>
            </div>
          </div>
        </transition>
        <nuxt-link class="tab" :to="item.path">
          <div class="view">Посмотреть</div>
        </nuxt-link>
        <div class="delete" @click="deletePost(item.name, key)">Удалить</div>
      </div>
    </div>
  </div>
</template>

<script>
import exit from '~/assets/icons/exit'

export default {
  validate ({ store }) {
    return store.state.auth.profileData.role === 'admin'
  },
  components: {
    exit
  },
  mounted() {
    this.$store.dispatch('post/getPosts', 15)
  },
  data() {
    return {
      modal: {
        active: false,
        name: null,
        keywords: null
      }
    }
  },
  computed: {
    getPosts() {
      return this.$store.state.post.posts
    }
  },
  methods: {
    deletePost(name, key) {
      this.$store.dispatch('post/deletePost', { name, key })
    },
    approvePost(name, key, keywords) {
      this.$store.dispatch('post/approvePost', { name, key, keywords: keywords || '' })
      this.modal.active = false
    },
    viewPost(name, key) {
      this.$store.dispatch('post/viewPost', { name, key })
    },
    metaModal(name) {
      this.modal = {
        active: true,
        name: name
      }
    },
    closeModal() {
      this.modal = {active: false, keywords: null}
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

hr {
  height: 1px;
  border: 0;
  background: $primary-color-1;
  margin: 1rem 1rem 0 1rem;
}

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
  &:first-child {
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
  width: 35%;
}

.category {
  width: 10%;
}

.date {
  width: 10%;
}

.view, .approve, .delete{
  width: 10%;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}

.view {
  color: #17afdd;
}

.approve {
  color: hsl(143, 75%, 46%);
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

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #1f1d1d9b;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  height: 20rem;
  width: 30rem;
  background-color: $primary-bg-2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.modal-close-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.modal-close {
  cursor: pointer;
}

.modal-name {
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
}

.keywords {
  margin-top: 1.2rem;
  margin-left: 1rem;
}

.input {
  padding: .8em 1em;
  margin: 0.7rem 1rem 1rem 1rem;
  border: none;
  background: #0c1523;
  box-sizing: border-box;
  font-size: .9em;
  max-width: 93%;
  border: 1px solid #302f2c;
  color: $secondary-color-1;
  transition: border 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;
}

.save-add {
  font-weight: 600;
  z-index: 0;
  text-align: center;
  width: 13rem;
  height: 2rem;
  margin: 0 1rem 0 1rem;
  cursor: pointer;
  padding: 0.1rem 0.5rem 0 0.5rem;
  background: linear-gradient(to bottom, #3583b4, #225b8b);
  &:hover {
    background: linear-gradient(to bottom, #4c8db6, hsl(207, 59%, 36%));
  }
}
</style>
