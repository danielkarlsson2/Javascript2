<template>
  <div class="container card welcome">
    <div v-if="showLogin">
      <h2>Login to the chat</h2>
      <LoginForm />
      <p>No account? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Register an account</h2>
      <Signup />
      <p>Already a member? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import Signup from '../components/SignUp.vue'
import { ref } from 'vue'
export default {
  components: { LoginForm, Signup},
  setup() {

    const showLogin = ref(false)

    return { showLogin }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 2rem;
  }
  .welcome form {
    max-width: 400px;
    margin: 2rem auto;
  }
  .form-control {
    width: 100%;
    display: block;
    padding: .5rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-border);
    margin-bottom: 1rem;
  }
  .form-control input:focus {
    outline: 1px solid #5e5e5e;
  }
  .welcome button {
    margin-top: 1rem;
    width: 100%;
  }
  .welcome span {
    color: var(--clr-primary);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
  .form-group {
    display: flex;
    column-gap: 1rem;
    flex-direction: row;
  }
  @media (max-width: 500px) {
    .form-group {
      flex-direction: column;
    }
  }
</style>