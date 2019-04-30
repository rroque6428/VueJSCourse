<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-customon:click="sayHello" class="btn btn-primary">Custom Directive</button>
            </div>
        </div>
    </div>
</template>

<script>
    const DIRECTIVE_MYON = {
        bind(el, binding) {
            el.addEventListener(binding.arg, binding.value);
        }
    };

    export default {
        directives: {
            customon: DIRECTIVE_MYON
        },
        methods: {
            sayHello() {
                alert('Hello from custom directive!');
            }
        }
    }
</script>

<style>
</style>
