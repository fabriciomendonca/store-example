<template>
  <div class="post">
    <h2 class="post__title">{{post.title}}</h2>
    <div class="post__content">{{post.body}}</div>
  </div>
</template>

<script>
import globalMixin from '../mixins/global'
import postsMixin from '../mixins/posts'
export default {
  name: 'post',

  mixins: [
    globalMixin,
    postsMixin
  ],

  async beforeMount () {
    const id = this.$route.params.postId
    this.clearPost()
    this.showLoader()
    await this.loadPostData(id)
    this.hideLoader()
  }
}
</script>

<style scoped>
  .post {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
