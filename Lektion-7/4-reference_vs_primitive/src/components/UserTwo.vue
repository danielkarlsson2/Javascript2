<template>
  <div class="user">
      <h3>{{ user.name }}</h3>
      <p>Age: {{ user.age  }}</p>
      <p>Email: {{ user.email }}</p>
  <button>Change</button>
  </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style scoped>

    .user {
        margin-block: 2rem;
        border: 1px solid black;
        background: rgb(14, 95, 91);
        color: white;
        padding: 1rem;
    }
</style>