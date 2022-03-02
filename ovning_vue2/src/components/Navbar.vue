<template>
  <div class="navbar">
      <header class="container">
          <ul>
              <li><a href="#">LOGO</a></li>
          </ul>
              <h4 v-if="loggedIn === true" class="text-login">Välkommen tillbaks {{ name }}</h4>
              <h4 v-else class="text-login">Vänligen logga in</h4>
      </header>
  </div>
</template>

<script>
export default {
    name: 'appNavbar',

    data() {

    }
}
</script>

<style>
    .navbar {
        background: black;
    }
   
    .navbar .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        /* display: inline-block; */
    }
    ul {
        list-style: none;
        /* display: flex; */
    }
    a:hover {
        color: rgb(55, 112, 112);
        height: 100%;
    }
    .text-login {
        color: rgb(231, 218, 218);
        cursor: pointer;
    }
    .text-login:hover {
        /* background: rgba(226, 188, 188, 0.534); */
        color: rgb(55, 112, 112);
        /* display: inline-block; */
        height: 100

    }
</style>