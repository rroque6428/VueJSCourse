<template>
    <div class="container">
        <app-header 
            :maxQuotes="maxQuotes" 
            :quoteCount="quotes.length">
        </app-header>
        <app-new-quote 
            @quoteAdded="addQuote"
            :quoteCount="quotes.length">
        </app-new-quote>
        <hr>
        <quote-grid :quotes="quotes"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/CourseProject02/QuoteGrid.vue';
    import NewQuote from './components/CourseProject02/NewQuote.vue';
    import Header from './components/CourseProject02/Header.vue';

    export default {
        components: {
            QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        data() {
            return {
                quotes: [
                    { id: 0, text: "This is my first quote" }
                ],
                maxQuotes: 10
            }
        }, 
        methods: {
            addQuote(text) {
                var arr = this.quotes;
                var id = 0;

                if (arr.length) {
                    id = arr[arr.length-1].id + 1;
                }
                arr.push( {id: id, text: text} );
            }
        }
    }
</script>

<style>
</style>
