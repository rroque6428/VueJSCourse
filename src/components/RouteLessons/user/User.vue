<template>
    <div class="jumbotron">
        <h1>The User Home Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({name:'home'}); 
        }
    }
}
</script>
