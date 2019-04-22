<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>{{ title }}</h1>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
    data: function() {
        return {
            title: 'Server Status'
        }
    }
}
</script>

<style scoped>
h1 {
    color: lightseagreen;
}
</style>
