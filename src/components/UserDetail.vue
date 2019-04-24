<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reversedName }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            name: String,
            userAge: Number
        }, 
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        },
        methods:{
            resetName() {
                this.$emit('nameWasReseted', 'reset MAX');
            }
        },
        computed: {
            reversedName() {
                return this.name.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>
    div.component {
        background-color: lightcoral;
    }
</style>
