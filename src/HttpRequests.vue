<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>HTTP Requests Tests</h1>
                <form>
                    <div class="form-group">
                        <label>Username:</label>
                        <input class="form-control" type="text" v-model="user.username">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="email" v-model="user.email">
                    </div>
                    <button class="btn btn-primary" @click.prevent="submit">Submit</button>
                </form>       
                <hr>
                <button class="btn btn-primary mb-3" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user, index) in users" :key="index">
                        {{ user.username}} - {{ user.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:  {
                    username: '',
                    email: ''
                },
                users: []
            };
        },
        methods: {
            submit() {
                this.$http.post('', this.user)
                    .then(response => {
                        // eslint-disable-next-line
                        console.log(response);
                    }, error => {
                        // eslint-disable-next-line
                        console.log(error);
                    });
            },
            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        // eslint-disable-next-line
                        console.log(data);

                        let arr = [];
                        for (let k in data) {
                            arr.push(data[k]);
                        }
                        this.users = arr;
                    });
            }
        }
    }
</script>

<style>

</style>
