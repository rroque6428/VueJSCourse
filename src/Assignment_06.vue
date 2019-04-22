<template>
    <div class="container">
        <myheader></myheader>
        <hr>
        <div class="row">
            <myserverlist></myserverlist>
            <myserverdetail></myserverdetail>
        </div>
        <hr>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from './components/assignment_06/Header.vue'
import myfooter from './components/assignment_06/Footer.vue'
import myserverlist from './components/assignment_06/ServerList.vue'
import myserverdetail from './components/assignment_06/ServerDetail.vue'

export default {
    name: 'Assignment_06',
    components: {
        myheader,
        myfooter,
        myserverlist,
        myserverdetail
    }
}
</script>

<style>

</style>
