<template>
  <div class="todo-group">
        <p>{{todo.todoName}}</p>
        <button @click="handleClick" class="btn btn-secondary">Complete</button>
        <button @click="handleRemove" class="btn btn-remove">Remove</button>
    </div>
</template>

<script>
export default {
    name: 'appTodos',
    props: ['todo'],
    methods: {
        handleClick() {
            // console.log(this.todo) 
        },
        handleRemove() {
            console.log(this.todo)
            this.$emit('deleteTodo', this.todo.id)
        }
    }
    // data() {
    //     return {
    //         input: ''
    //     }
    // }
    
}
</script>

<style scoped>




</style>