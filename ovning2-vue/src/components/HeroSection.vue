<template>
  <!-- Background image -->
  <div
    class="p-5 text-center bg-image"
    style="background-image: url('https://www.filmtopp.se/media/2015/06/t2-min.jpg?w=810&fit=max&s=b3ec51eddaf0e7ac6a7de7b7f82b9031');"
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white img-section align-items-baseline">
          <!-- <h1 class="mb-3">Heading</h1> -->
          <!-- <h4 class="mb-3">Subheading</h4> -->
          <a class="btn btn-outline-light btn-lg knapp" href="#!" role="button" @click="clickFunction">To the chopper</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeroSection',
    methods: {
      clickFunction() {
        console.log('Hasta la vista baby')
      }
    }
}
</script>

<style>
.bg-image {
    height: 700px;
    background-color: black;
    background-size: contain;
    top: 0;
}
/* .img-section {
    
} */
.knapp:hover {
    transform: scale(1.2);
    background-color: white;
    color: black;
}
</style>