<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <div class="form-row">
                        <div class="col">
                            <label v-highlight:background.delayed="'red'" for="firstname">Firstname</label>
                            <input type="text" id="firstname" class="form-control" v-model="user.firstname">
                        </div>
                        <div class="col">
                            <label for="lastname">Lastname</label>
                            <input type="text" id="lastname" class="form-control" v-model="user.lastname">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control" v-model="user.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="storedata">
                            <input type="checkbox" name="storedata" id="storedata" v-model="user.storedata"> Store in Database </label>
                    </div>

                    <!-- Exercise 3 -->
                    <app-custom-fullname v-model="fullname"></app-custom-fullname>
                </div> 
            </div>
            <button class="btn btn-primary" 
                @click.prevent="submitForm"
                :disabled="!canSubmitForm"> Submit</button>
        </form>
        <hr>
        <!-- Exercise 2 -->
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>{{ fullname }}</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ user.storedata }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomFullname from './CustomFullname.vue';

    export default {
        data() {
            return {
                user: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    storedata: false
                },
                isSubmitted: false
            }
        },
        components: {
            appCustomFullname: CustomFullname
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
            }
        },
        computed: {
            fullname: {
                // Setters/Getters 
                // https://vuejs.org/v2/api/#computed
                get() {
                    let s1 = this.user.firstname;
                    let s2 = this.user.lastname;

                    if (s1 && s2) {
                        return s2 + ", " + s1;
                    }
                    return '';
                },
                set(v) {
                    if (v.indexOf(',') > -1) {
                        let arr = v.split(',');

                        this.user.lastname = arr[0].trim();
                        this.user.firstname = arr[1].trim();

                        // eslint-disable-next-line
                        console.log(v);
                    }
                }
            },
            canSubmitForm() {
                return this.user.firstname && this.user.lastname &&
                    this.user.password;
            }
        }
    }
</script>

<style>
</style>
