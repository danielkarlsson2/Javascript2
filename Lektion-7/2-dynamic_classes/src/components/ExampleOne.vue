<template>
  <div>
      <h2 v-bind:class="{green: true, red: true}">EN TEXT</h2>
      <h2 v-bind:class="{green: available}">EN TEXT</h2>

        <div @click="available = !available" :class="{className: available}">
            <span>Daniel</span>
        </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            available: false
        }
    },
    methods: {
        toggleAvailable() {
            this.available = !this.available
        }
    }
}
</script>

<style>
    span {
        background: red;
        margin-top: 1rem;
        display: inline-block;
        padding: 1rem;
        color: white;
        cursor: pointer;
    }
    .classname span{
        background: green;
    }
</style>