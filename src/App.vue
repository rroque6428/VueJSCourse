<template>
    <div class="container">
      <app-header></app-header>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
  // import FilterandMixins from './components/assignment11/FilterandMixins.vue';
  // import HttpRequests from './HttpRequests.vue';
  import Header from './components/RouteLessons/Header.vue';

  export default {
    name: 'app',
    components: {
      // appFilterMixins: FilterandMixins,
      // appHttpRequests: HttpRequests,
      appHeader: Header
    }
  } 
</script>

<style>

</style>
