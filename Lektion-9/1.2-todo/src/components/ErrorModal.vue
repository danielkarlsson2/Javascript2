<template>
  <div class="overlay" @click.self="closeModal">
      
      <div class="card error-modal shadow">
          <div class="card-header">
              <h4 class="card-title">Whoops!</h4>
          </div>
          <div class="card-body">
              <p class="card-text">You need to complete the todo first</p>
              <button class="btn btn-dark" @click="closeModal">OK</button>
          </div>
      </div>
  </div>
      
</template>

<script>
export default {
    methods: {
        closeModal(e) {
            console.log(e.target)
            this.$emit('close-modal')
        }
    }
}
</script>

<style scoped>
    .overlay {
        position: absolute;
        background: rgba(0, 0, 0, 0.425);
        inset: 0;
        z-index: 10;
    }
    .error-modal {
        max-width: 400px;
        margin: 7rem auto;
    }
</style>