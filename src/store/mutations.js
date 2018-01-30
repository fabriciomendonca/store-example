import {
  GLOBAL_MUTATIONS
} from './constants'

export default {
  [GLOBAL_MUTATIONS.SHOW_LOADER] (state) {
    state.control.showLoader = true
  },
  [GLOBAL_MUTATIONS.HIDE_LOADER] (state) {
    state.control.showLoader = false
  },
  [GLOBAL_MUTATIONS.SHOW_TOAST] (state) {
    state.control.showToast = true
  },
  [GLOBAL_MUTATIONS.HIDE_TOAST] (state) {
    state.control.showToast = false
  }
}
