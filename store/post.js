import axios from 'axios'

export const state = () => ({
  posts: null
})

export const mutations = {
  savePosts (state, posts) {
    state.posts = posts
  },
  deletePost (state, key) {
    state.posts.splice(key, 1)
  },
  approvePost (state, key) {
    state.posts.splice(key, 1)
  }
}

export const actions = {
  addPost ({commit}, {name, category, cover, description, content}) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
            mutation {
              addPost(name: "${name}", category: "${category}", cover: "${cover}", 
                      description: "${description}", content: "${content}") 
              {
                content
                description
                name
                view
                category
                cover
                creator
                created
              }
            }`
      }
    })
    .then(() => {
      this.$router.push('/')
    })
  },
  getPosts ({commit}, quantity) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
            mutation {
              getPosts(quantity: ${quantity}) 
              {
                content
                description
                name
                view
                category
                cover
                creator
                created
              }
            }`
      }
    })
    .then(({ data }) => {
      commit('savePosts', data.data.getPosts)
    })
  },
  deletePost ({commit}, {name, key}) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `mutation {deletePost(name: "${name}")}`
      }
    }).then(() => {
      commit('deletePost', key)
    })
  },
  approvePost ({commit}, {name, key})  {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `mutation {approvePost(name: "${name}")}`
      }
    }).then(() => {
      commit('approvePost', key)
    })
  },
  viewPost ({commit}, {name, key})  {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `mutation {viewPost(name: "${name}")}`
      }
    }).then(() => {
      commit('viewPost', key)
    })
  }
}