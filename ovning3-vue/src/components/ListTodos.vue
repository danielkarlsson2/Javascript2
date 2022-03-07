<template>
  <div v-if="todos.length" class="todos-form">
        <!-- <div class="todo-group" v-for="todo in todos" :key="todo.id">
            <p>{{todo.name}}</p>
            <button class="btn btn-secondary">Complete</button>
            <button class="btn btn-remove">Remove</button>
        </div> -->
      <Todos v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTodo="$emit('deleteTodo', todo.id)"/>
  </div>
</template>

<script>
// import Todos from './components/Todos.vue'
import Todos from './Todos.vue'
export default {
    props: ['todos'],
    components: {
        Todos
    }
}
</script>

<style>
.todo-group p{
    width: 60%;
    list-style: none;
    padding: .5rem;
    margin: 1rem 2rem;
    /* border: 1px solid rgba(51, 51, 51, 0.178); */
    border-radius: 5px;
}
.todo-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(170, 165, 165, 0.425); 
    /* padding: .5rem; */
    /* margin: 1rem 2rem; */
}
.todos-form {
    background: rgba(248, 248, 248, 0.863);
}
.btn-secondary {
    background: darkolivegreen;
    color: white;
    border: transparent;
    border-radius: 5px;
    margin-right: 1rem;
    /* padding: .6em 1.2em; */    
}
.btn-remove {
    background: rgb(228, 8, 8);
    color: white;
    border: transparent;
    border-radius: 5px;
    margin-right: 1rem;
}

</style>