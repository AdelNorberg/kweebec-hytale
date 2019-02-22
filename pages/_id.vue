<template>
  <div class="post-container">
    <div class="post">
      <div class="post-name">{{ post.name }}</div>
      <div class="post-info">
        <div class="post-creator">
          <div> Автор </div>
          <div class="creator">{{ post.creator }}</div>
        </div>
        <div class="post-date">{{ post.created.substr(0,10)  }}</div>
      </div>
      <img :src="post.cover" :alt="post.name" class="post-img">
      <div class="post-description">{{ post.description }}</div>
      <div class="render" v-html="renderArticle"></div>
    </div>

    <div class="lists-container">
      <div class="bg-lists-container">
        <div v-for="(list, key) in lists" :key="key" class="list-post-container">
          <nuxt-link :to="list.path">
            <div class="list-post">
              <div class="theme-box">
                <img :src="list.cover" :alt="list.name" class="list-img">
                <div class="theme"></div>
              </div>
              <div class="list-content">
                <div class="list-name">{{ list.name }}</div>
                <div class="list-date">{{ list.created.substr(0,10) }}</div>
              </div>
            </div>
          </nuxt-link>
          <hr class="silver" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import config from '~/config'
import { print } from 'graphql'
import { GET_SUCCESS_POST } from '~/api/mutation'

let markdownIt = new MarkdownIt();

export default {
  async asyncData ({params}) {
    const { data } = await axios.post(config.apiendpoint, {
      query: print(GET_SUCCESS_POST),
      variables: { path: `${params.id}` }
    })
    
    return { 
      post: data.data.getSuccessPost.post,
      lists: data.data.getSuccessPost.lists
    }
  },
  computed: {
    renderArticle() {
      return markdownIt.render(this.post.content);
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/var.scss';

.post-container {
  display: flex;    
  min-width: 100%;
}

.post { 
  min-width: 67%;
  padding-right: 2rem;
}

.post-name {
  background: linear-gradient(#eaf6ff, #7da7c4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
}

.post-info {
  display: flex;
  font-display: row;
  margin-top: 0.4rem;
  min-width: 100%;
}

.post-creator {
  color: $secondary-color-1;
  display: flex;
  flex-direction: row;
  align-items: center ;
  font-weight: 500;
}

.post-img {
  width: 100%;
  border: 1px solid #473e26;
  max-height: 45rem;
  margin-top: 2rem;
}

.post-description {
  color: #b7cedd;
  line-height: 1.5em;
  margin-top: 1.5rem;
  font-size: 1.05rem;
}

.creator {
  color: $primary-color-2;
  margin-left: 0.6rem;
  margin-top: 0.2rem;
  font-size: 1.1em
}

.post-date {
  color: #7f8ba7;
  font-size: 1.1rem;
  margin-top: 0.3rem;
  margin-left: 0.9rem;
}

.lists-container {
  min-width: 33%;
  border-radius: 5px;
  padding: 1.35rem 0 1.35rem 0;
}

.bg-lists-container {
  background: rgba(210, 233, 247, 0.04);
}

.list-post-container {
  display: flex;
  flex-direction: column;
}

.list-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-post {
  display: flex;
  height: 6rem;
  padding: 0 1.2rem 0 1.2rem;
  cursor: pointer;
  padding: 0.5rem 0 0.5rem;
  &:hover {
    background: rgba(210, 233, 247, 0.04);
  }
}

.list-img {
  height: 100%;
  width: 10rem;
  border: 1px solid #473e26;
  position: absolute;
  margin: 0;
}

.theme-box {
  position: relative;
  margin-right: 0.9rem;
  margin-left: 0.9rem;
  min-width: 10rem;
}

.theme {
  position: absolute;
  z-index: 2;
  height: 100%;
  margin-top: 2px;
  width: 100%;
  background: linear-gradient(180deg, rgba(12, 12, 12, 0) 67.11%, rgba(12, 12, 12, 0.7) 93.58%);
}

.list-name {
  color: #d29f32;
  font-weight: 700;
  font-size: 1em;
  padding-right: 0.4rem;
  line-height: 1.5em;
}

.list-date {
  color: #9eb2c0;
  font-size: .9em;
  font-weight: 400;
  margin-top: 0.5rem;
}

.silver {
  border: 0;
  height: 1px;
  margin: 0.4rem 0 0.4rem;
  background: #36455c;
}
</style>
