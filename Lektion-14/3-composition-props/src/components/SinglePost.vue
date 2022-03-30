<template>
  <div class="post" @click="handleClick">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
    props: ['post'],
    setup(props, {emit}) {
        // console.log(props.post)
        // console.log(composition)

        const handleClick = () => {
            emit('removePost', post)
        }

        return { handleClick }
    }
}
</script>

<style>

</style>