<template>
  <div class="card" @click="handleClick">
          <h3>{{ users.name }}</h3>
          <p>{{ users.age }}</p>
      </div>
</template>

<script>
export default {
    props: ['users'],
    methods: {
        handleClick() {
            console.log(this.user)
            this.$
        }
    }

}
</script>

<style>

</style>