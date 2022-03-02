<template>
  <div>
    <Navbar :user="user" @logut="user = null" />
    <LoginForm @login="handleLogin" :user="user"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  components: {
    Navbar,
    LoginForm,
    

  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    handleLogin(newUser) {
      this.user = {...newUser }
  }

  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  padding: .6em 1.2em;
  background: transparent;
  border: transparent;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  border-radius: .5em;
}
.btn:hover {
  filter: brightness(1.2);
}
.btn:active {
  filter: brightness(.9);
}
.btn-primary {
  background: darkslategray;
  color: white;
}
.btn-secondary {
  background: rgb(37, 37, 37);
  color: white;
}
.btn-block {
  width: 100%;
  display: block;
}
</style>