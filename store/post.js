import axios from 'axios'
import { ADD_POST, GET_POSTS, GET_SUCCESS_POSTS } from '~/api/mutation'
import { print } from 'graphql'
import config from '~/config'

export const state = () => ({
  posts: null
})

export const mutations = {
  savePosts: (state, posts) => state.posts = posts, 
  deletePost: (state, key) => state.posts.splice(key, 1),
  approvePost: (state, key) => state.posts.splice(key, 1)
}

export const actions = {
  addPost ({commit}, payload) {
    axios.post(config.apiendpoint, {
      query: print(ADD_POST),
      variables: {
        name: payload.name,
        category: payload.category,
        cover: payload.cover,
        description: payload.description,
        content: payload.content
      }
    })
    .then(() => {
      this.$router.push('/')
    })
  },
  getPosts ({commit}, quantity) {
    axios.post(config.apiendpoint, {
      query: print(GET_POSTS),
      variables: { quantity: quantity }
    })
    .then(({ data }) => {
      commit('savePosts', data.data.getPosts)
    })
  },
  getSuccessPosts ({commit}, {category, quantity}) {
    axios.post(config.apiendpoint, {
      query: print(GET_SUCCESS_POSTS),
      variables: { category: category, quantity: quantity }
    }).then(({ data }) => {
      commit('setSuccessPosts', data.data.getSuccessPosts)
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