<template>
    <div class="server-detail">
        <div class="col-xs-12 col-sm-6">
            <div v-if="selectedServer" class="jumbotron">
                <h1>Server #{{ selectedServer.id }}</h1>
                <p class="lead">You can change the Server status.</p>
                <hr>
                <form>
                    <div class="form-group">
                        <select class="form-control"
                            v-model="selectedServer.status">

                            <option disabled value="">Pick a status for this Server:</option>
                            <option>Critical</option>
                            <option>Normal</option>
                            <option>Warning</option>
                            <option>Booting</option>
                        </select>
                    </div>
                </form>
            </div>
            <div v-else>
                <p>Select a server</p>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../../main.js';

export default {
    data() {
        return {
            selectedServer: eventBus.selectedServer
        }
    },
    created() {
        eventBus.$on('serverWasSelected', (server) => {
            this.selectedServer = server;
        });
    }
}
</script>

<style>

</style>

