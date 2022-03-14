<template>
  <div class="create">
      <form @submit.prevent="handleSubmit">

          <h2 class="title">Create a new post</h2>

          <div class="form-group">
              <label for="title" class="form-label">Title:</label>
              <input type="text" class="form-control" v-model="blog.title">
              <p class="error" v-if="titleError">Please enter a title</p>
          </div>
          <div class="form-group">
              <label for="title" class="form-label">Image URL:</label>
              <input type="text" class="form-control" v-model="blog.imgUrl">
              <p class="error" v-if="imgError">Please enter an image URL</p>
          </div>
          <div class="form-group">
              <label for="title" class="form-label">Content:</label>
              <textarea type="text" class="form-control" v-model="blog.body"></textarea>
              <p class="error">Please enter some content</p>
          </div>

        <p class="form-label">Categories: </p>

        <div class="form-group">

            <div class="input-group" v-for="(cat, index) in blog.categories" :key="index">
                <input type="text" class="form-control" v-model="blog.categories[index]">
                <button type="button" @click="removeCategory(index)" class="btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <p class="error">Please enter at least one category</p>
            <button type="button" @click="addCategory" class="btn bt-success"><i class="fa-solid fa-plus"></i> Add a category</button>

        </div>

        <div class="form-group">
            <label for="author" class="form-label">Author: </label>
            <select class="form-control" v-model="blog.author">
                <option value="" selected disabled></option>
                <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
            </select>
            <p class="error">Please choose an author</p>
        </div>

        <button class="btn btn-primary">Create Post</button>

      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            blog: {
                title: '',
                body: '',
                imgUrl: '',
                categories: [],
                author: ''
            },
            authors: ['Daniel', 'Joakim', 'Hanna', 'Nisse' ],
            titleError: false,
            bodyError: false,
            imgError: false,
            catError: false,
            authorError: false,
        }
    },
    methods: {
        addCategory() {
            this.blog.categories.push('')
        },
        removeCategory(i) {
            this.blog.categories.splice(i, 1)
        },
        handleSubmit() {
            this.titleError = !this.blog.title ? true : false
            this.bodyError = !this.blog.body ? true : false
            this.imgError = !this.blog.imgUrl ? true : false
            this.authorError = !this.blog.author ? true : false
            if(!this.blog.categories.length || !this.blog.categories[0]) {
                this.catError = true
            }
            else {
                this.catError = false
            }

            if(!this.titleError && !this.bodyError && !this.imgError && !this.catError && !this.authorError) {
                    const res = await axios.post('http://localhost:3000/posts', this.blog)
                    if(res.status === 201) {
                    this.$router.push({ name: 'home' })
        }
      }
        }
    }
}
</script>

<style scoped>
    .title {
        text-align: center;
        font-size: 1.8rem;        
    }
    .form-group {
        margin-bottom: 2rem;        
    }
    .form-label {
        margin-bottom: .5rem;
        display: block;
    }
    .form-control {
        width: 100%;
        display: block;
    }
    .error {
        font-size: .9rem;
        color: red;
        margin-block: .4rem;
    }

    textarea {
        resize: none;
        height: 200px;

    }
    .input-group {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }
    .fa-trash {
        color: red;
        font-size: 1.2rem;
    }
</style>