<template>
  <div>
      <button class="btn btn-active" @click="toggle">TOGGLE</button>
      <div class="output" :class="computedClasses">
        <h2>EN TEXT</h2>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bg: false,
            text: false
        }
    },
    methods: {
        toggle() {
            this.bg = !this.bg
            this.text = !this.text
        }
    },
    computed: {
        computedClasses() {
            return {
                'bg-dark': this.bg,
                'text-white': this.text
            }
        }
    }
}
</script>

<style scoped>
    .btn {
        padding: 1rem 2rem;
        cursor: pointer;
        border: none;
        border-radius: .7em;
        background: transparent;
    }
    .btn-active {
        background: green;
        color: white;
    }
    .output {
        margin-top: 1rem;
        background: #e9e9e9;
        width: 300px;
        aspect-ratio: 1;
        padding: 1rem;
    }
    .bg-dark {
        background: #333;        
    }
    .text-white {
        color: white;
    }
</style>