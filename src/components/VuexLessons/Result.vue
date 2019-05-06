<template>
    <div>
        <label>Counter ({{ counter }}):</label>   
        <input type="number" v-model="counter">
        <p>DoubleCounter: {{ doubleCounter }}</p>
        <p>Clicks : {{ counterClicks }}</p>
        <p>{{ anotherComputerProp }}</p>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('counter', ['setCounter'])
        },
        computed: {
            ...mapGetters('counter', 
                ['doubleCounter', 'counterClicks']
            ),
            anotherComputerProp() {
                return this.doubleCounter;
            },
            counter: {
                get() {
                    return this.$store.getters['counter/counter'];
                },
                set(v) {
                    this.setCounter(v);
                }
            }
        }
    }
</script>
