import axios from 'axios'
import { ADD_POST, GET_POSTS, GET_SUCCESS_POSTS } from '~/api/mutation'
import { print } from 'graphql'
import config from '~/config'

export const state = () => ({
  posts: null,
  successPosts: null,
  loading: false
})

export const mutations = {
  savePosts: (state, posts) => state.posts = posts, 
  setSuccessPosts: (state, posts) => state.successPosts = posts,
  deletePost: (state, key) => state.posts.splice(key, 1),
  deleteSuccessPost: (state, key) => state.successPosts.splice(key, 1),
  approvePost: (state, key) => state.posts.splice(key, 1),
  setLoading: (state, payload) => state.loading = payload
}

export const actions = {
  addPost ({commit}, payload) {
    commit('setLoading', true)

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
      commit('setLoading', false)
      this.$router.push('/')
    }).catch((error) => {
      commit('setLoading', false)
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
    axios.post(config.apiendpoint, {
      query: `mutation {deletePost(name: "${name}")}`
    }).then(() => {
      commit('deletePost', key)
    })
  },
  deleteSuccessPost ({commit}, {name, key}) {
    axios.post(config.apiendpoint, {
      query: `mutation {deleteSuccessPost(name: "${name}")}`
    }).then(() => {
      commit('deleteSuccessPost', key)
    })
  },
  approvePost ({commit}, {name, key, keywords})  {
    axios.post(config.apiendpoint, {
      query: `mutation {approvePost(name: "${name}", keywords: "${keywords}")}`
    }).then(() => {
      commit('approvePost', key)
    })
  },
  viewPost ({commit}, {name, key})  {
    axios.post(config.apiendpoint, {
      query: `mutation {viewPost(name: "${name}")}`
    }).then(() => {
      commit('viewPost', key)
    })
  }
}