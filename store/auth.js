import axios from 'axios'

export const state = () => ({
  isLogin: false,
  profileData: null
})

export const mutations = {
  changeProfile (state, payload) {
    state.isLogin = payload.isLogin
    state.profileData = payload.profileData
  }
}

export const actions = {
  signin ({commit}, payload) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
          mutation {
            login(email: "${payload.email}", password: "${payload.password}") {
              nickname
            }
          }`
      }
    }).then(({ data }) => {
      commit('changeProfile', {isLogin: true, profileData: {...data.data.login}})
    })
  },
  signup ({commit}, payload) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
          mutation {
            signup(email: "${payload.email}", password: "${payload.password}", nickname: "${payload.nickname}") {
              nickname
            }
          }`
      }
    }).then(({ data }) => {
      commit('changeProfile', {isLogin: true, profileData: {...data.data.signup}})
    })
  },
  isLogin ({commit}) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `query {
            isLogin
          }`
      }
    }).then(({ data }) => {
      commit('changeProfile', {isLogin: data.data.isLogin})
    })
  },
  logout () {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'get',
      data: {
        query: `{
            logout
          }`
      }
    }).then(({ data }) => {
      if(data.data.logout) {
        commit('changeProfile', {isLogin: !data.data.logout})
      }
    })
  }
}