
<template>
  <div>
    <div id="page-wrapper">
      <div id="page" class="container">

        <h1>{{blog.title}}</h1>
        <p> {{blog.body}}</p>
        
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res => this.blog = res.data)
        .catch();
    
  }
};
</script>


<style scoped>
</style>
