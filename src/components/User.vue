<template>
    <div class="component app-user">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @nameWasReseted="onResetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data() {
            return {
                name: 'Max'
            };
        },
        methods: {
            changeName() {
                this.name = 'Ana';
            },
            onResetName(name) {
                this.name = name;
            }
        }
    }
</script>

<style scoped>
    div.app-user {
        background-color: lightblue;
    }
</style>
