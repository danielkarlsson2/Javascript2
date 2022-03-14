<template>
  <nav class="main">
    <Navbar />
    <router-view :posts="posts"/>
  </nav>
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: rgb(211, 177, 177);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white
}
.main {
  background: rgb(238, 237, 237);
}
.d-flex {
    display: flex;
}
.container {
  width: 80%;
  border: 1px solid black;
  
}
.center {
  text-align: center;
}
.underline {
  text-decoration: underline;
  color: black;
}
</style>
