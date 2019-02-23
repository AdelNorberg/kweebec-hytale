import axios from 'axios'

export const state = () => ({
  isLogin: false,
  profileData: {role: 'noname'}
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
              nickname,
              role,
              email
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
              nickname,
              role,
              email
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
        query: `{ isLogin {email, nickname, role}}`
      }
    }).then(({ data }) => {
      if(data.data.isLogin) {
        commit('changeProfile', {isLogin: true, profileData: data.data.isLogin })
      } 
    })
  },
  logout ({commit}) {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `{ logout }`
      }
    }).then(() => {
      commit('changeProfile', {isLogin: false, profileData: {role: 'noname'}})
    })
  }
}

