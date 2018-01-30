import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Post from '../views/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:postId',
      name: 'Post',
      component: Post
    }
  ]
})
