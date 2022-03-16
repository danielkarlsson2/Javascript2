<template>
    <button class="btn" @click="addToPrice">Add</button>
    <button class="btn" @click="subPrice(5)">Sub</button>
    <div class="list">
        <ProductCard v-for="product in prodTax" :key="product.id" :product="product" class="card"/>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { 
      ProductCard 
      },
    data() {
        return {
            
        }
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        prodTax() {
            // let taxedProducts = this.$store.state.products.map(product => {
            //     return {
            //         id: product.id,
            //         name: product.name + ' + tax',
            //         price: Math.round(product.price + product.price * 0.2)
            //     }
            // })
            // return taxedProducts

            return this.$store.getters.taxedProducts
        },
    },
    methods: {
        addToPrice() {
            // this.products.forEach(product => product.price += 10)
            // this.$store.state.products.forEach()
            this.$store.commit('ADD')
        },
        subPrice(amount) {
            this.$store.dispatch('subAsync', amount)
        }
    }
}
</script>

<style scoped>
    .card {
        margin: 1rem;
        background: #424242;
        color: white;
        display: flex;
        justify-content: space-between;
    }
</style>