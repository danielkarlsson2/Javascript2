<template>
  <hero-section />

  <div class="conatiner">
    <div class="row">
      <div class="col-6">
        <sign-in-form />
      </div>
      <div class="cl-6">
        <sign-up-form />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import SignInForm from './components/SignInForm.vue'
import SignUpForm from './components/SignUpForm.vue'
export default {
  components: { HeroSection, SignInForm, SignUpForm, },

}
</script>

<style>

</style>