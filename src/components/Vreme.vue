<template>
  <div>
    <div id="page-wrapper">
      <div id="page" class="container">


        <div v-if="temperature" id="content">
          <div class="title" v-bind:temperature="temperature">
            <h2>Vreme u Beogradu</h2>
            <span class="byline">
              Trenutna temperatura je :
              <b>{{temperature.main.temp}} &#8451;</b>
            </span>
            <span class="byline">
              Pritisak je :
              <b>{{temperature.main.pressure}} mBar</b>
            </span>
            <span class="byline">
              Vlaznost je :
              <b>{{temperature.main.humidity}} %;</b>
            </span>
            <span class="byline">
              Brzina vetra je :
              <b>{{temperature.wind.speed}} m/S;</b>
            </span>
            <span class="byline">
              Stanje na nebu :
              <b>{{temperature.weather[0].main}} ;</b>
            </span>
          </div>
          <p v-on:click="changeText">This is text to be changed on click event:</p>
          <span>{{text}}</span>
        </div>
        <div v-else>loading weather data...</div>


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
  name: "Vreme",
  props: ["temperature"],
  data() {
    return {
      text: ""
    };
  },
  methods: {
    changeText() {
      const array = [
        "Danas je lep dan ",
        "Pada kisa , jebo joj ja mater",
        "Legla je lova , sve je ok ",
        "Moram da naucim Vue.js"
      ];
      const item = array[Math.floor(Math.random() * array.length)];
      this.text = item;
    }
  }
};
</script>


<style scoped>
.title{
  position: absolute;
  margin:-80px 400px 30px 500px;
}
</style>
