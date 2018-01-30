import {
  POSTS_MUTATIONS
} from './constants'

export default {
  [POSTS_MUTATIONS.SET_POSTS] (state, list) {
    state.data.posts = list
  },
  [POSTS_MUTATIONS.SET_POST] (state, post) {
    state.data.post = post
  },
  [POSTS_MUTATIONS.CLEAR_POSTS] (state) {
    state.data.posts = []
  },
  [POSTS_MUTATIONS.CLEAR_POST] (state) {
    state.data.post = null
  }
}
