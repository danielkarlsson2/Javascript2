<template>
  <div>
    <Navbar />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { 
    Navbar, 
    LoginForm 
  },
  

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 .container {
        width: 70%;        
        padding: .8rem;
    }
</style>