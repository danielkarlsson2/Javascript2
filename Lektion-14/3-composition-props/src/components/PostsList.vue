<template>
  <div class="posts-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" @removePost="remove"/>
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['post'],
    components: { 
    SinglePost 
    },
    setup() {
        const remove = () => {
            console.log('tar bort en post')
        }
    }
}
</script>

<style>

</style>