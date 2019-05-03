<template>
  <app-route-lessons></app-route-lessons>
</template>

<script>
  // import FilterandMixins from './components/assignment11/FilterandMixins.vue';
  // import HttpRequests from './HttpRequests.vue';
  import RouteLessons from './RouteLessons.vue';

  export default {
    name: 'app',
    components: {
      // appFilterMixins: FilterandMixins,
      // appHttpRequests: HttpRequests,
      appRouteLessons: RouteLessons
    }
  } 
</script>

<style>

</style>
