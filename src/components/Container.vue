<template>
  <div>
    <div id="page-wrapper">
      <div id="page" class="container">
        <!-- Vremenska Prognozza -->
        <Vreme v-bind:temperature="temperature"/>
        <!-- Vremenska Prognozza -->

        <!-- Formica  kao komponenta-->
        <Forma />      
        <!-- Formica -->
        
        <!-- Blog -->
        <Blog v-bind:blogs="blogs"/>
        <!--Blog -->

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
        </div> -->
      </div>
    </div>
    <!-- <div id="portfolio-wrapper">
      <div id="portfolio" class="container">
        <div class="major">
          <h2>Suspendisse lacus turpis</h2>
          <span class="byline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div class="column1">
          <a href="#" class="image image-full">
            <img src="../images/pic01.jpg" height="150" alt>
          </a>
          <div class="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" class="button">Read More</a>
          </div>
        </div>
        <div class="column2">
          <a href="#" class="image image-full">
            <img src="../images/pic02.jpg" height="150" alt>
          </a>
          <div class="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" class="button">Read More</a>
          </div>
        </div>
        <div class="column3">
          <a href="#" class="image image-full">
            <img src="../images/pic03.jpg" height="150" alt>
          </a>
          <div class="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" class="button">Read More</a>
          </div>
        </div>
        <div class="column4">
          <a href="#" class="image image-full">
            <img src="../images/pic04.jpg" height="150" alt>
          </a>
          <div class="box">
            <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
            <a href="#" class="button">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="container">
      <div class="major">
        <h2>Get in touch</h2>
        <span class="byline">Phasellus nec erat sit amet nibh pellentesque congue</span>
      </div>
      <ul class="contact">
        <li>
          <a href="#" class="icon icon-twitter">
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon icon-facebook">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#" class="icon icon-dribbble">
            <span>Pinterest</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon icon-tumblr">
            <span>Google+</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon icon-rss">
            <span>Pinterest</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="copyright" class="container">
      <p>
        &copy; Untitled. All rights reserved. | Photos by
        <a href="http://fotogrph.com/">Fotogrph</a> | Design by
        <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.
      </p>
    </div> -->
  </div>
</template>


<script>
import Vreme from "./Vreme";
import Forma from "./Forma";
import Blog from "./Blog";
// debugger;
export default {
  name: "Container",
  props: ["temperature","blogs"],
  components: {
    Vreme,
    Forma,
    Blog
  }
};
</script>


<style>
</style>
