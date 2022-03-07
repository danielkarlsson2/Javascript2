<template>
  <div class="main">
      <header class="head">
        <h1>TODOS</h1>
      </header>

      <form class="todos-form">
        <h2 class="title">My todos</h2>
          <div class="input-group">
            <label for="input">Add todo: </label>
            <input type="text" id="input" class="form-control" v-model="input">
          </div>
          <div class="input-group">
            <button class="btn btn-primary btn-block">Add</button>
            </div>        
      </form>

    <!-- <Todos :todos="todos" /> -->
    <ListTodos :todos="todos" @deleteUser="handleDelete"/>
  </div>
</template>

<script>
import ListTodos from './components/ListTodos.vue'
// import Todos from './components/Todos.vue'

export default {
  components: {
    // Todos,
    ListTodos,
  },
  data() {
    return {
      todos: [
        {id:1, todoName: ''},
        // {id:2, todoName: 'Hanna'},
        // {id:3, todoName: 'Alice'},
        // {id:4, todoName: 'Vera'},
      ]      
    }
  },
  methods: {
    handleDelete(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      },

    addTodo()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.head {
  background: darkolivegreen;
  color: white;
  text-align: center;
  padding: 1rem;
}
.container {
  width: 80%;
}
.btn {
  padding: .6em 1.2em;
  cursor: pointer;
}
.btn:hover {
  transform: scale(1.05);
  background: rgb(109, 138, 61)
}
.btn-primary {
  background: darkolivegreen;
  color: white;
  border: transparent;
  border-radius: 5px;
}
.btn-block {
  width: 100%;
  display: block;
}

.todos-form {
    width: 60%;
    border: 1px solid rgba(51, 51, 51, 0.26);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.425);
    margin: 2rem auto;
    border-radius: 5px;    
}


.title {
    text-align: center;   
    border-bottom: 1px solid rgba(170, 165, 165, 0.425); 
    padding: 1rem;
    margin-bottom: 1rem;
}
.input-group {
    /* text-align: center; */
    width: 80%;
    margin: 1rem auto;
}
.form-control {
    width: 100%;
    display: block;
    padding: .5rem;
    border: 1px solid rgba(85, 107, 47, 0.452);
    border-radius: 5px;
    margin-top: .5rem;    
}
</style>