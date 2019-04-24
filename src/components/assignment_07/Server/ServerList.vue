<template>
    <div class="server-list">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <server-entry 
                    v-for="server in servers" 
                    :key="server.id" 
                    :server="server">
                </server-entry>
            </ul>
        </div>
    </div>
</template>

<script>
import Server from './Server.vue';

export default { 
    data() {
        return {
            servers: [
                {id: 1, status: 'Critical'},
                {id: 2, status: 'Normal'},
                {id: 3, status: 'Warning'},
                {id: 4, status: 'Booting'}
            ]
        }
    },
    components: {
        serverEntry: Server
    }
}
</script>

<style>

</style>
