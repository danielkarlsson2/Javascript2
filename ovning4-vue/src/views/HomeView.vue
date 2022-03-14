<template>
  <div class="home">
    <h3 class="center underline">Posts</h3>
  </div>

  <h3>{{ post.title }}</h3>
  <p>{{ post.body }}</p>
</template>

<script>


export default {
  props: ['posts'],
  name: 'HomeView',
  components: {
    
  }
}
</script>
