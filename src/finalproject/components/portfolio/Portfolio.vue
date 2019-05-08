<template>
    <div class="card-group">
        <app-stock 
            v-for="stock in stocks" 
            :key="stock.id"
            :stock="stock">
        </app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters('finalprojectPortfolio', 
                { stocks: 'stockPortfolio' }
            )
        },
        components: {
            appStock: Stock
        }
    }
</script>
