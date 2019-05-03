<template>
    <div>
        <h3>User #{{ id }} Details</h3>
        <hr>
        <router-link :to="link">
            <button class="btn btn-primary">Edit</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            link: {
                name: 'userEdit', 
                params: {
                    id: this.id
                }, 
                query: { 
                    param1: 'value1'
                },
                hash:'#myanchor'
            }
        }
    }
}
</script>
