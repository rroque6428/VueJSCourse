<template>
    <div>
        <h3>User #{{ id }} Details</h3>
        <hr>
        <router-link :to="{name:'userEdit', params: {id: id}}"><button class="btn btn-primary">Edit</button></router-link>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>
