import axios from 'axios'
import config from '~/config'

export const state = () => ({
  isLogin: false,
  profileData: {role: 'noname'},
  error: null,
  loading: false
})

export const mutations = {
  changeProfile (state, payload) {
    state.isLogin = payload.isLogin
    state.profileData = payload.profileData
  },
  setError: (state, payload) => state.error = payload,
  setLoading: (state, payload) => state.loading = payload
}

export const actions = {
  signin ({commit}, payload) {
    commit('setLoading', true)

    axios.post(config.apiendpoint, {
      query: `
        mutation {
          login(email: "${payload.email}", password: "${payload.password}") {
            nickname,
            role,
            email
          }
        }`
    }).then(({ data }) => {
      commit('setLoading', false)
      commit('changeProfile', {isLogin: true, profileData: {...data.data.login}})
      this.$router.push('/')
    }).catch((error) => {
      commit('setLoading', false)
      commit('setError', 'Неверные данные')
      setTimeout(() => {
        commit('setError', null)
      }, 7000)
    })
  },
  signup ({commit}, payload) {
    commit('setLoading', true)
    
    axios.post(config.apiendpoint, {
      query: `
        mutation {
          signup(email: "${payload.email}", password: "${payload.password}", nickname: "${payload.nickname}") {
            nickname,
            role,
            email
          }
        }`
    }).then(({ data }) => {
      commit('setLoading', false)
      this.$router.push('/')
      commit('changeProfile', {isLogin: true, profileData: {...data.data.signup}})
    }).catch((error) => {
      commit('setLoading', false)
      commit('setError', 'Неверные данные')
      setTimeout(() => {
        commit('setError', null)
      }, 7000)
    })
  },
  logout ({commit}) {
    axios.post(config.apiendpoint, {
      query: `{ logout }`
    }).then(() => {
      commit('changeProfile', {isLogin: false, profileData: {role: 'noname'}})
    })
  }
}

