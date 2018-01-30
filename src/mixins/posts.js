import {
  mapActions,
  mapMutations,
  mapState
} from 'vuex'

import {
  POSTS_ACTIONS,
  POSTS_MUTATIONS
} from '../store/posts/constants'

const moduleName = 'posts'

export default {
  computed: {
    ...mapState(moduleName, {
      posts: state => state.data.posts,
      post: state => state.data.post
    })
  },

  methods: {
    ...mapActions(moduleName, {
      loadPosts: POSTS_ACTIONS.LOAD_POSTS,
      loadPostData: POSTS_ACTIONS.LOAD_POST_DATA
    }),

    ...mapMutations(moduleName, {
      clearPosts: POSTS_MUTATIONS.CLEAR_POSTS,
      clearPost: POSTS_MUTATIONS.CLEAR_POST
    })
  }
}
