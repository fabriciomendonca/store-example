// using axios here is not good at all
import axios from 'axios'
import {
  POSTS_ACTIONS,
  POSTS_MUTATIONS
} from './constants'

const endpoint = 'https://jsonplaceholder.typicode.com/posts'

export default {
  async [POSTS_ACTIONS.LOAD_POSTS] ({ commit }) {
    const list = await axios.get(endpoint)

    commit(POSTS_MUTATIONS.SET_POSTS, list.data)
  },
  async [POSTS_ACTIONS.LOAD_POST_DATA] ({ commit }, id) {
    const post = await axios.get(`${endpoint}/${id}`)

    commit(POSTS_MUTATIONS.SET_POST, post.data)
  }
}
