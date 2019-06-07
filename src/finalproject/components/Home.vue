<template>
    <div class="jumbotron">
        <h1 class="display-4">Trade or View your Portfolio</h1>
        <p class="lead">You may Save & Load your data. Click 'End Day' to begin a New Day</p>
        <hr class="my-4">
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('finalprojectPortfolio', 
                ['funds']
            )
        }
    }
</script>
