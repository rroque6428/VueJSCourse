<template>
    <div class="row">
        <app-quote 
            v-for="quote in quotes" 
            :key="quote.id"
            @click.native="removeQuote(quote.id)">
            {{ quote.text }}
        </app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },
    methods: {
        removeQuote(id) {
            var arr = this.quotes;
            arr.splice(arr.findIndex(x => x.id==id), 1) // remove item based on its ID
        },
        clickTest(e) {
            // eslint-disable-next-line
            console.log('Quote was clicked', e);
        }
    }
}
</script>

<style scoped>
</style>
