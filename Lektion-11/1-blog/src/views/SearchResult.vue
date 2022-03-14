<template>
  <div>
      <BlogPosts v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import axios from 'axios'
import BlogPosts from '../components/BlogPosts.vue'
export default {
  components: { 
      BlogPosts 
      },
      data() {
          return {
              posts: [],
              prevQuery: ''
          }
      },
      methods: {
          async getPosts() {
              if(this.prevQuery !== this.$route.query.searchQuery) {

                  const res = await axios.get(`http://localhost:3000/posts?qe=${this.$route.query.searchQuery}`)
                  
                  if(res.status === 200) {
                      this.posts = res.data
                      this.prevQuery = this.$route.query.searchQuery
                  }
              }
          }
      },
      created() {
          this.getPosts()
      },
    //   updated() {
    //       console.log('updated')
    //       this.getPosts()
    //   }
      watch: {
          '$route.query.searchQuery'() {
              console.log('Ny query')
              this.getPosts()
          }
      }
      
}
</script>

<style>

</style>