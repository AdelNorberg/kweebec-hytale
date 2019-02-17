import axios from 'axios'
import { ADD_POST } from '~api/mutation'
import { print } from 'graphql'

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
  addPost ({commit}, payload) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/graphql',
      variables: {
        name: payload.name,
        category: payload.category,
        cover: payload.cover,
        description: payload.description,
        content: payload.content
      },
      data: {
        query: print(ADD_POST)
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