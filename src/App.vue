<template>
  <div id="app">
    <Navbar v-bind:title="title" v-on:change="changeTities($event)"/>
    <Header/>
    <!-- <Container v-bind:temperature="temperature" v-bind:blogs="blogs"/> -->
    <router-view v-bind:temperature="temperature" v-bind:blogs="blogs"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Vreme from './components/Vreme.vue'
import PopuniFormu from './components/PopuniFormu.vue'
import Blog from './components/Blog.vue'
import AddBlog from './components/AddBlog.vue'
import ContactUs from './components/ContactUs.vue'

import axios from "axios";

export default {
  name: "app",
  components: {
    Navbar,
    Header,
    Container
  },
  data() {
    return {
      temperature: { main: {}, wind: {}, weather: [{}] },
      blogs: null,
      title: ""
    };
  },
  methods: {
    changeTities(title1) {
      this.title = title1;
    }
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Belgrade,Serbia&APPID=cb0aeb43b8923a51cfbda7edaf4ac7c6&units=metric"
      )
      .then(res => (this.temperature = res.data))
      .catch();
    this.title = "Sarming";

    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=15")
      .then(res => (this.blogs = res.data))
      .catch();
    // console.log("Saljem blogove...");
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
  background: #191919;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12pt;
  font-weight: 400;
  color: #4e4d4d;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

p,
ol,
ul {
  margin-top: 0;
}

ol,
ul {
  padding: 0;
  list-style: none;
}

p {
  line-height: 180%;
}

strong {
}

a {
  color: #383838;
}

a:hover {
  text-decoration: none;
}

.container {
  width: 1200px;
  margin: 0px auto;
}

/*********************************************************************************/
/* Image Style                                                                   */
/*********************************************************************************/

.image {
  display: inline-block;
}

.image img {
  display: block;
  width: 100%;
}

.image-full {
  display: block;
  width: 100%;
  margin: 0 0 0 0;
}

.image-left {
  float: left;
  margin: 0 2em 2em 0;
}

.image-centered {
  display: block;
  margin: 0 0 2em 0;
}

.image-centered img {
  margin: 0 auto;
  width: auto;
}

/*********************************************************************************/
/* List Styles                                                                   */
/*********************************************************************************/

ul.style1 {
}

/*********************************************************************************/
/* Social Icon Styles                                                            */
/*********************************************************************************/

ul.contact {
  overflow: hidden;
  margin: 0em 0 3em 0;
  padding-top: 1em;
  text-align: center;
}

ul.contact li {
  display: inline-block;
  padding: 0em 0.3em;
  font-size: 1em;
}

ul.contact li span {
  display: none;
  margin: 0;
  padding: 0;
}

ul.contact li a {
  color: #fff;
}

ul.contact li a:before {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 2em;
  color: rgba(255, 255, 255, 0.3);
}

/*********************************************************************************/
/* Major Styles                                                                  */
/*********************************************************************************/

.major {
  overflow: hidden;
  margin-bottom: 4em;
  text-align: center;
}

.major h2 {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 700;
  color: #3f3f3f;
}

.major .byline {
  display: block;
  padding-top: 0.2em;
  font-weight: 300;
  font-size: 2em;
}

/*********************************************************************************/
/* Title Styles                                                                  */
/*********************************************************************************/

.title {
  text-align: center;
}

.title h2 {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: #3f3f3f;
}

.title .byline {
  display: block;
  padding-top: 1em;
  font-weight: 300;
  font-size: 1.1em;
}

/*********************************************************************************/
/* Button Style                                                                  */
/*********************************************************************************/

.button {
  display: inline-block;
  margin: 1em 0em;
  padding: 1em 3em 1em 3em;
  background: #2a70e8;
  border-radius: 8px;
  letter-spacing: 0.2em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9em;
  color: #fff;
}

.button:before {
}

/*********************************************************************************/
/* Header                                                                        */
/*********************************************************************************/

#header {
  background: #2a70e8;
}

/*********************************************************************************/
/* Logo                                                                          */
/*********************************************************************************/

#logo {
  padding: 4em 0em;
  background: #fff;
  text-transform: uppercase;
}

#logo h1 {
  text-align: center;
  font-weight: 900;
  font-size: 2.5em;
}

#logo h1 a {
}

#logo span {
  padding: 0em 0em 0em 0.5em;
}

#logo h1:before {
}

#logo a {
  color: #2a70e8;
}

/*********************************************************************************/
/* Menu                                                                          */
/*********************************************************************************/

#menu ul {
  margin: 0;
  padding: 20px 0px 20px 0px;
  list-style: none;
  line-height: normal;
  text-align: center;
}

#menu li {
  display: inline-block;
}

#menu a {
  display: block;
  padding: 1em 2em;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 700;
  color: #fff;
}

#menu .current_page_item a {
  border-radius: 30px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
}

#menu a:hover {
}

/*********************************************************************************/
/* Banner                                                                        */
/*********************************************************************************/

#banner {
}

/*********************************************************************************/
/* Page                                                                          */
/*********************************************************************************/

#page-wrapper {
  background: #eeeeee;
}

#page {
  overflow: hidden;
  padding: 6em 0em;
}

/*********************************************************************************/
/* Content                                                                       */
/*********************************************************************************/

#content {
  float: left;
  width: 588px;
  text-align: center;
}

#content .title {
  padding: 1em 2em 2em 2em;
  text-align: center;
}

#content h2 {
  font-size: 2em;
}

#content .byline {
  padding-top: 0;
  font-size: 1.5em;
}

/*********************************************************************************/
/* Sidebar                                                                       */
/*********************************************************************************/

#sidebar {
  float: right;
  width: 588px;
}

/*********************************************************************************/
/* Footer                                                                        */
/*********************************************************************************/

#footer {
}

/*********************************************************************************/
/* Copyright                                                                     */
/*********************************************************************************/

#copyright {
  overflow: hidden;
  padding: 5em 0em;
}

#copyright p {
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #6f6f6f;
}

#copyright a {
  text-decoration: none;
  color: #8c8c8c;
}

/*********************************************************************************/
/* Featured                                                                      */
/*********************************************************************************/

#featured-wrapper {
  overflow: hidden;
  padding: 5em 0em;
  background: #fff;
}

#featured h2 {
  text-align: center;
}

#featured .icon {
  position: relative;
  display: block;
  background: #2a70e8;
  margin: 0px auto 20px auto;
  line-height: 2.5em;
  font-size: 4em;
  text-align: center;
  color: #fff;
}

.column1,
.column2,
.column3,
.column4 {
  width: 282px;
}

.column1,
.column2 {
  float: left;
  margin-right: 24px;
}

.column3 {
  float: left;
}

.column4 {
  float: right;
}

/*********************************************************************************/
/* Portfolio                                                                     */
/*********************************************************************************/

#portfolio-wrapper {
  padding: 8em 0em 6em 0em;
}

#portfolio {
  overflow: hidden;
  text-align: center;
}

#portfolio .major h2,
#portfolio .major .byline {
  color: rgba(255, 255, 255, 0.9);
}

#portfolio img {
  margin: 0;
  padding: 0;
}

#portfolio .box {
  padding: 30px;
  background: #fff;
  border-radius: 0px 0px 8px 8px;
  border-right: 1px solid #dadada;
  border-left: 1px solid #dadada;
}

#contact .major h2,
#contact .major .byline {
  color: rgba(255, 255, 255, 0.9);
}
</style>
