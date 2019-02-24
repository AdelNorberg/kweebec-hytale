export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (req.session.userID) {
      commit('auth/changeProfile', {
        isLogin: true,
        profileData: {
          role: req.session.userRole,
          nickname: req.session.userNickname
        }
      })
    }
  }
}