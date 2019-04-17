<template>
  <div>
    <div id="page-wrapper">
      <div id="page" class="container">


        <div class="todo-item">
          <form action="/action_page.php" v-if="!submitted">
            <label for="fname">Blog Title</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              v-model.lazy="blog.title"
            >
            <label for="lname">Comment</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              v-model.lazy="blog.content"
            >
            <div>
              <p>Title Preview:</p>
              <p>{{blog.title}}</p>
              <div>Blog Preview:</div>
              <p>{{blog.content}}</p>
              <p>Selected values</p>
              <ul>
                <li v-for="(cat,index) in blog.categories" v-bind:key="cat">{{index}}. {{cat}}</li>
              </ul>
              <br>
            </div>
            <div class>
              <input type="checkbox" v-model="blog.categories" value="Danas">a
            </div>
            <div class>
              <input type="checkbox" v-model="blog.categories" value="Sutra">b
            </div>
            <div class>
              <input type="checkbox" v-model="blog.categories" value="Prekosutra">c
            </div>
            <br>
            <label for>Author:</label>
            <select v-model="blog.author">
              <option v-for="aut in blog.authors" v-bind:key="aut">{{aut}}</option>
            </select>
            <input type="submit" value="Submit" v-on:click.prevent="submituj">
          </form>
          <div v-if="submitted">Hvala sto ste submitovali formu !</div>
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
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        authors: ["Radovan Draskovic", "Milan Curcin", "Dragan Lintner"]
      },
      submitted: false
    };
  },
  methods: {
    submituj() {
      console.log("Forma submitovana");
      this.submitted = true;
    }
  }
};
</script>

<style scoped>
input[type="text"],
select {
  width: 97%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  position: relative;
  float: left;
  width: 100%;
}
</style>
 