<template>
  <Navbar />

  <HeroSection />

  <FooterComponent />
</template>

<script>

import FooterComponent from './components/FooterComponent.vue'
import HeroSection from './components/HeroSection.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar, HeroSection, FooterComponent},

}
</script>

<style>

</style>