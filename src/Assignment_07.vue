<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-detail></server-detail>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Header from './components/assignment_07/Shared/Header.vue';
import Footer from './components/assignment_07/Shared/Footer.vue';
import ServerList from './components/assignment_07/Server/ServerList.vue';
import ServerDetail from './components/assignment_07/Server/ServerDetail.vue';

export default {
    components: {
        myHeader: Header,
        myFooter: Footer,
        ServerList,
        ServerDetail
    }
}
</script>

<style>

</style>
