<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('counter', [
                'increment', 'decrement'
            ]),
            anotherMethod() {
                return 'Hi!';
            }
        }
    }
</script>