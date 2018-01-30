import {
  mapMutations,
  mapState
} from 'vuex'

import RouterLink from 'vue-router'

import {
  GLOBAL_MUTATIONS
} from '../store/constants'

export default {
  components: {
    RouterLink
  },

  computed: {
    ...mapState({
      loading: state => state.control.showLoader,
      error: state => state.control.showToast
    })
  },

  methods: {
    ...mapMutations({
      showLoader: GLOBAL_MUTATIONS.SHOW_LOADER,
      hideLoader: GLOBAL_MUTATIONS.HIDE_LOADER,
      showToast: GLOBAL_MUTATIONS.SHOW_TOAST,
      hideToast: GLOBAL_MUTATIONS.HIDE_TOAST
    })
  }
}
