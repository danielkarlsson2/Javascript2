<template>
    <div class="input-group">
        <label for="" class="mr-1">Skapa inlägg:</label>
        <input type="text" class="mr-1">
        <button class="btn">Skapa inlägg</button>
    </div>
</template>

<style scoped>
.input-group {
    padding: 2rem;
    /* margin-top: 2rem; */
    text-align: center;
    justify-content: center;
}
.mr-1 {
    margin-right: 1rem;
}
input {
    padding: .5rem;
    width: 30%;
}
.btn {
    padding: .5rem;
    border: none;
    background: rgb(223, 103, 56);
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
.btn:hover {
    background: rgb(192, 70, 22);
    border: 1px solid rgba(51, 51, 51, 0.514);
}
</style>