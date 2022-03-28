<template>
  <div>
    <input type="text" placeholder="Search" v-model="search">
    <p>Search value = {{ search }}</p>
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')

    const names = ref(['Daniel', 'Hanna', 'Ines', 'Alice', 'Vera'])

    const filteredNames = computed(() => {
      return names.value.filter(name => name.includes((search.value)))
    })

    const stopWatcher = watch(search, () => {
      console.log('watchern körde funktionen')
    })

    const stopEffect = watchEffect(() => {
      console.log('watch effekt kördes', search.value)
    })

    const handleClick = () => {
      stopWatcher()
      stopEffect()
    }
    return {search, names, filteredNames, handleClick}
  },
}
</script>
