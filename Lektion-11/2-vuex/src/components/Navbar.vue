<template>
  <nav class="navbar">
      <router-link to="/" class="logo">LOGO</router-link>
      <ul class="nav-links">
          <li><router-link to="/" class="link">Home</router-link></li>
          <li><router-link to="/about" class="link">About</router-link></li>
          <li><router-link to="/products" class="link">Products</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'PrimaryNavigation'
}
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        background: rgb(36, 34, 34);
    }
    .logo {
        text-decoration: none;
        color: white;
        font-size: 2rem;
    }
    .nav-links {
        display: flex;
        list-style: none;
    }
    .link {
        color: white;
        text-decoration: none;
        padding: 1.5rem 1rem;
        display: inline-block;
        position: relative;
    }
    .link:hover {
        color: #a5a5a5;
    }
    .link.router-link-active::after {
        content: '';
        border-bottom: 2px solid #00ffea;
        position: absolute;
        left: 1rem;
        right: 1.5rem;
        bottom: 1.2rem;
    }
</style>