<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>#1</h2>
                <input type="text" v-model="mytext">
                <p>{{ mytext | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>#2</h2>
                <p>{{ mytext | countLetters }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>#3</h2>
                <p>{{ computedReverseText }}</p>
                <p>{{ computedCountLetters }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { MyMixins } from './MyMixins.js';

    export default {
        mixins: [MyMixins],
        data() {
            return {
                mytext: ''
            }
        },
        filters: {
            reverseText(s) {
                return s.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>
