<template>
    <p>{{ names[0] }}</p>
    <p>{{ names[1] }}</p>
    <p>{{ names[2] }}</p>
    <p>{{ names[3] }}</p>
    <p>{{ names[4] }}</p>
    <p>{{ names[5] }}</p>
</template>

<script>
export default {
    name: 'appNames',
    props: ['names']
}
</script>

<style>

</style>