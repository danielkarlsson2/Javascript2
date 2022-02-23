<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/Bild1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/Bild2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/Bild3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'CarouselComponent'
}
</script>

<style>
    .carousel-inner{
        max-height: 400px;
    }
</style>