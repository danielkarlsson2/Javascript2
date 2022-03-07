<template>
  <div>
      <p v-for="(name, index) in names" :key="index">{{index}}: {{ name }}</p>
  </div>
</template>

<script>
// for(name in names) {
//     body.innerHTML += <p>name</p>
// }
export default {
    props: ['names']
}
</script>

<style>

</style>