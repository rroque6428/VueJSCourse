<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedCompo='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedCompo='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedCompo='appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedCompo">
                    <h2>Component: {{ selectedCompo }}</h2>
                    <p slot="footer" v-if="selectedCompo=='appRed'">This is a footer for the Red component.</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/assignment_08/Blue.vue';
    import Green from './components/assignment_08/Green.vue';
    import Red from './components/assignment_08/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                selectedCompo: 'appBlue'
            }
        }
    }
</script>

<style>
</style>
