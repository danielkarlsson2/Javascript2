<template>
  <Header />
  <Carousel />


  <div class="container">
    <Card-deck class="mt-5"/>
  </div>

</template>

<script>
import CardDeck from './components/Cards/CardDeck.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
export default {
  components: { Header, Carousel, CardDeck },

}
</script>

<style>

</style>