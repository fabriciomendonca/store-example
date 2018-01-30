import keyMirror from 'keymirror'

export const POSTS_ACTIONS = keyMirror({
  LOAD_POSTS: null,
  LOAD_POST_DATA: null
})

export const POSTS_MUTATIONS = keyMirror({
  SET_POSTS: null,
  SET_POST: null,
  CLEAR_POST: null,
  CLEAR_POSTS: null
})
