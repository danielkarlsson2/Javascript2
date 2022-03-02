<template>
  <form class="container input" @submit.prevent="handleSubmit">
      <label for="Name">Name: </label>
        <input type="text" class="inputfield" ref="inputName" v-model="name">
      <label for="password">Password: </label>
        <input type="password" class="inputfield" v-model="password">

      <button class="btn" type="submit">Submit</button>
  </form>

    {{ name }}

</template>

<script>
export default {
    name: 'appLogin',
    
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        changeName() {
            this.name = this.$refs.inputName
        },
        handleSubmit() {
            // e.preventDefault()
            console.log(this.name, this.password)
            this.name = ''
            this.password = ''
        }
    }
}
 
</script>

<style scoped>
    .input {
        width: 30%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;        
    }
    .inputfield {
        padding: .2rem;
        margin-block: 0 1rem;
    }
    .btn {
        border: none;
        background: rgb(55, 112, 112);
        color: white;
        margin-top: 1rem;
    }
    .btn:hover {
        /* transform: scaleX(1.05); */
        transform: scale(1.07);
        
    }
</style>