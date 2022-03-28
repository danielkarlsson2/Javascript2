<template>
  <PostsList :posts="posts"/>
</template>

<script>
import { ref } from 'vue'
import PostsLists from './components/PostsList.vue'

export default {
  name: 'App',
  components: {
    PostsLists
  },
  setup() {
    const posts = ref([
      { id: 1, title: 'Blogpost nr 1', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores eum nesciunt eius quod magnam aperiam sapiente, ducimus veritatis dignissimos!'},
      { id: 2, title: 'Blogpost nr 2', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores eum nesciunt eius quod magnam aperiam sapiente, ducimus veritatis dignissimos!'},
      { id: 3, title: 'Blogpost nr 3', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores eum nesciunt eius quod magnam aperiam sapiente, ducimus veritatis dignissimos!'}
    ])
    return { posts }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
