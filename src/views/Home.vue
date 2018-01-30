<template>
  <div class="home">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import globalMixin from '../mixins/global'
import postsMixin from '../mixins/posts'

export default {
  name: 'home',

  mixins: [
    globalMixin,
    postsMixin
  ],

  async beforeMount () {
    this.clearPosts()
    this.clearPost()
    this.showLoader()
    await this.loadPosts()
    this.hideLoader()
  }
}
</script>

<style scoped>

</style>
