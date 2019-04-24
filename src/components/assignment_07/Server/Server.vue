<template>
    <li class="list-group-item" 
        @click="selectServer">
        Server #{{ server.id }} Status: {{ server.status }}
    </li>
</template>

<script>
import { eventBus } from '../../../main.js';

export default {
    props: {
        server: Object 
    }, 
    methods: {
        selectServer() {
            eventBus.selectServer(this.server);
        }
    }
}
</script>

<style scoped>

</style>


