<template>
  <div class="container-posts">
    <h1 class="preview-container">Карты</h1>
    <hr class="gold" />
    <div class="list-container">
      <div v-if="!successPosts[0]" class="null"> Пусто... Ждите релиза игры:3 </div>
      <post-container v-for="(item, key) in successPosts" :item="item" :key="key"/>
    </div>
  </div>
</template>

<script>
import postContainer from '~/components/post-container'
import axios from 'axios'
import { print } from 'graphql'
import { GET_SUCCESS_POSTS } from '~/api/mutation'

export default {
  async asyncData() {
    const url = process.client ? env.clientUrl : env.serverUrl

    try {
      const { data } = await axios.post(url, {
        query: print(GET_SUCCESS_POSTS),
        variables: { category: 'Карты', quantity: 10 }
      })

      return { 
        successPosts: data.data.getSuccessPosts
      }
    } catch (e) {
      console.log(e)
    }
  },
  components: {
    postContainer
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/var.scss';

.container-posts {
  display: flex;
  flex-direction: column;
}

.list-container {
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.preview-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(#ffe98d, #e19f27);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold {
  margin-top: 1.5rem;
  background: #715e2b;
  height: 1px;
  border: 0;
}

.null {
  height: 32rem;
  color: hsl(203, 18%, 62%);
  margin-top: 2rem;
  font-size: 1.5rem;
}
</style>



