<template>
    <div>
        <h3>Edit the User #{{ id }}</h3>
        <p>Query params: {{ $route.query.param1 }}</p>
        <div style="height: 700px"></div>
        <p id="myanchor">Some Extra data</p>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>
