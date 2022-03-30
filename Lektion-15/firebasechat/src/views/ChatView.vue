<template>
  <div class="container card chat-view">
     <Navbar />
     <Chat-window />
     <Chat-form />
  </div>
</template>

<script>
import ChatForm from '../components/ChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar,
    ChatWindow,
    ChatForm,
  }
}
</script>

<style>
  .chat-view {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }
</style>