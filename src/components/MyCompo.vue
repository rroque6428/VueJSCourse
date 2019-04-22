<template>
    <div class="mycompo">
        <h1 @click="sayHello">{{ my_msg }}</h1>
        <p v-for="i in 5" :key="i">Second Line</p>
    </div>
</template>

<script>
export default {
    name: "MyComp",
    props:{
        my_msg: String
    },
    methods: {
        sayHello() {
            alert(this.my_msg);
        }
    }  
}
</script>

<style>

</style>


