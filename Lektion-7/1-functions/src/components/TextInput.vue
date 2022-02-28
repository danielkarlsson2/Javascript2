<template>
  <div>
      <input type="text" v-model="text">
      <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'hej'
        }
    }
}
</script>

<style>

</style>