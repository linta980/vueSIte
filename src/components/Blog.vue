<template>
  <div>
    <div id="page-wrapper">
      <div id="page" class="container">

        <!-- Ovde moram da ubacim v-if="blogs" zato sto ih dobijam sa App.vue-a a ne odavde lokalno, jer u suprtnom ce mi reci 
        da nema sta da filtrira dole u computed , jer nije stiglo sa App.vue-a !!!1 VAZNOOO-->
        <div class="todo-item" v-if="blogs">
          <label>Pretrazi podatke ,pickice :</label>
          <input v-model="pretraga" class="gale" type="text" placeholder="searech mada faka">
          <div v-for="blog in searchbox" v-bind:key="blog.id">
            <p class="title"><router-link v-bind:to="'/blog/'+blog.id">{{blog.title}}</router-link></p>
            <p class="body">{{blog.body}}</p>
            <hr>
          </div>
        </div>
        <div v-else>
          <p>Elements are downloading...</p>
        </div>

      </div>
    </div>

    <div id="featured-wrapper">
      <div id="featured" class="container">
        <div class="major">
          <h2>Maecenas lectus sapien</h2>
          <span class="byline">Cras vitae metus aliquam risus pellentesque pharetra</span>
        </div>
        <!-- <div class="column1">
          <span class="icon icon-bar-chart"></span>
          <div class="title">
            <h2>Maecenas lectus sapien</h2>
            <span class="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div class="column2">
          <span class="icon icon-qrcode"></span>
          <div class="title">
            <h2>Praesent scelerisque</h2>
            <span class="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div class="column3">
          <span class="icon icon-building"></span>
          <div class="title">
            <h2>Fusce ultrices fringilla</h2>
            <span class="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>
        <div class="column4">
          <span class="icon icon-picture"></span>
          <div class="title">
            <h2>Etiam posuere augue</h2>
            <span class="byline">Integer sit amet aliquet pretium</span>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["blogs"],
  data() {
    return {
      pretraga: ""
    };
  },
  computed: {
    searchbox() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.pretraga);
      });
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  position: relative;
  float: left;
  width: 100%;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.title {
  color: red;
}
.body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.gale {
  margin: 10px 0px 30px;
  width: 97%;
  padding: 5px;
}
</style>
