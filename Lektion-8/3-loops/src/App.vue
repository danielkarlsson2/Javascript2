<template>
  <div>
    <!-- <Names :names="names" /> -->
    <NamesLoop :names="names"/>
    <UsersList :users="users" @deleteUser="handleDelete"/>
    <ObjectsLoop />
  </div>
</template>

<script>
// import Names from './components/Names.vue'
import NamesLoop from './components/NamesLoops.vue'
import ObjectsLoop from './components/ObjectsLoop.vue'
import UsersList from './components/UsersList.vue'
export default {
  components: {
    // Names,
    NamesLoop,
    UsersList,
    ObjectsLoop

  },
  data() {
    return {
      names: ['Daniel', 'Hanna', 'Tommy', 'Annika', 'Vera', 'Alice'],
      users: [
        {id: 1, name: 'Daniel', age: 35 },
        {id: 2, name: 'Hanna', age: 30 },
        {id: 3, name: 'Tommy', age: 20 },
      ]
      
      }
    },
    methods: {
      handleDelete(id) {
        this.users = this.users.filter(users)
    }
  }
}
</script>

<style>

</style>