<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to='/' class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to='/portfolio' tag="li" active-class="active" class="navbar-item"><a class="nav-link">Portfolio</a></router-link>  
        <router-link to='/stocks' tag="li" active-class="active" class="navbar-item"><a class="nav-link">Stocks</a></router-link>  
      </ul>
      <ul class="navbar-nav navbar-right">
            <li class="navbar-item">
              <a class="nav-link" href="#" @click="endDay">End Day</a>
            </li>
            <li class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" 
                  type="button"
                  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save&Load
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Save Data</a>
                    <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>
      </ul>
      <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: true
      }
    },
    computed: {
      funds() {
        return this.$store.getters['finalprojectPortfolio/funds'];
      }
    },
    methods: {
      ...mapActions('finalprojectStocks', 
        ['randomizeStocks']
      ),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>