<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">

      <Card :imgURL='imgOne' title="HEJ" body="Hej på dig du" />
      <Card imgURL='/img/Bild2.jpg' title="Rubrik 2" body="asdlkaj asdlkj"/>
      <Card imgURL='img/Bild3.jpg' />      

    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components: { Card },
    data() {
        return {
            imgOne: require('@/assets/img/Bild1.jpg')
        }
    }
}
</script>

<style>

</style>