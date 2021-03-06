import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import posts from './posts'

export default {
  actions,
  getters,
  modules: {
    posts
  },
  mutations,
  state: {
    control: {
      showLoader: false,
      showToast: false
    }
  }
}
