<template>
  <nav class="navbar d-flex">
      <!-- <div class="container"> -->
        <h1>Blogg</h1>
        <ul>
            <li><router-link to="/" class="link">All posts</router-link></li>
            <li><router-link to="/create" class="link">Create</router-link></li>
        </ul>
      <!-- </div> -->
  </nav>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>

<style scoped>
.navbar {
    justify-content: space-between;
    align-items: center;
    background: rgb(223, 103, 56);
    color: white;
    padding: 1rem 2rem;
}
h1 {
    font-size: 1.5rem;
}

li {
    list-style: none;
    display: inline-block;
    padding: 0 1rem;
}

</style>