<template>
    <div class="row">
    <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="quote">Quote</label>
                <textarea class="form-control" name="quote" id="quote" cols="30" rows="3" v-model="quote"></textarea>
            </div>
            <button class="btn btn-primary" 
                @click.prevent="createNew"
                :disabled="quoteCount >= 5">
                Add Quote
            </button>
        </div>
    </form>
    </div>
</template>

<script>
export default {
    props: ['quoteCount'],
    data() {
        return {
            quote: ''
        }
    },
    methods: {
        createNew() {
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style scoped>

</style>

