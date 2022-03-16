<template>
    <button class="btn" @click="addToPrice">Add</button>
    <button class="btn" @click="subAsync(5)">Sub</button>
  <div class="grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" class="card"/>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  components: { 
      ProductCard 
      },
    computed: {
      ...mapGetters(['taxedProducts'])
    },
    methods: {
      ...mapActions(['addToPrice', 'subAsync'])

    }
}
</script>

<style scoped>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  .card {
    background: #006351;
    /* color: ; */
  }
</style>