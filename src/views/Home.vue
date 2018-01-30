<template>
  <div class="home">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">{{post.title}}</router-link>
        <p>{{post.body}}</p>
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
.home {
  margin: 0 auto;
  max-width: 1200px;
}
.home ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
}
.home ul li {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  height: 100px;
  margin: 20px;
  padding: 20px;
  text-align: left;
  width: 510px;
}
.home ul li a {
  color: #111;
  font-size: 1.5rem;
  text-decoration: none;
}
</style>
