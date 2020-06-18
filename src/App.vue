<template>
  <div id="app">
    <Header class="header" />
    <router-view class="content" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("fetchCategories");
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: hsl(187, 100%, 91%);
}
#app {
  font-family: 'Lexend Tera', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
.header {
  grid-area: header;
}
.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.footer {
  grid-area: footer;
}
.btn {
  font-family: inherit;
  background-color: transparent;
  border: 1px solid hsl(208, 30%, 55%);
  color: black;
}
.btn:hover {
  background-color: hsl(196, 59%, 75%);
}
.btn:focus {
  background-color: transparent;
}
.btn-big {
  font-size: 3rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
