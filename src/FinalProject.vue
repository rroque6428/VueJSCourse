<template>
    <div class="container">
        <app-header></app-header>
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Header from './finalproject/components/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        methods: {
            ...mapActions('finalprojectStocks', ['initStocks'])
        },
        created() {
            this.initStocks();
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    @keyframes slide {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }    

    .slide-enter-active {
        animation: slide 200ms ease-out normal;
    }
    
    .slide-leave-active {
        animation: slide 200ms ease-out reverse;
    }    
</style>
