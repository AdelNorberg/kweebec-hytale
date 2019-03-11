<template>
  <div class="post-container">
    <div class="post">
      <div class="post-name">{{ post.name }}</div>
      <div class="post-info">
        <div class="post-creator">
          <div> Автор </div>
          <div class="creator">{{ post.creator }}</div>
        </div>
        <div class="post-date">{{ post.created | date  }}</div>
      </div>
      <img :src="post.cover" :alt="post.name" class="post-img">
      <div class="post-description">{{ post.description }}</div>
      <div class="render" v-html="renderArticle"></div>
    </div>
    <postsList :list="list" />
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import postsList from '~/components/posts-list'
import { print } from 'graphql'
import { GET_SUCCESS_POST } from '~/api/mutation'

let markdownIt = new MarkdownIt();

export default {
  async asyncData ({params, env}) {
    const url = process.client ? env.clientUrl : env.serverUrl

    try {
      const { data } = await axios.post(url, {
        query: print(GET_SUCCESS_POST),
        variables: { path: `${params.id}` }
      })
      
      return { 
        post: data.data.getSuccessPost.post,
        list: data.data.getSuccessPost.lists
      }
    } catch (e) {
      console.log(e)
    }
  },
  head() {
    return {
      title: this.post.name,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.post.name },
        { hid: 'og:image', property: 'og:image', content: this.post.cover },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'keywords', name: 'keywords', content: this.post.keywords || 'hytale' }
      ]
    }
  },
  components: {
    postsList
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
</style>
