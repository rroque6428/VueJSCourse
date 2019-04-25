<template>
  <!-- <div id="app"> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- </div> -->
  <!-- <div class="container">
      <div class="row">
          <div class="col-xs-12">
              <app-user></app-user>
          </div>
      </div>
  </div> -->
  <Assignment_08></Assignment_08>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  //import User from './components/User.vue';
  import Assignment_08 from './Assignment_08.vue';

  export default {
    name: 'app',
    components: {
      //HelloWorld,
      // appUser: User
      Assignment_08,
    }
  } 
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
