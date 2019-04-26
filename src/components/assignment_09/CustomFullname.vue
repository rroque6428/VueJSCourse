<template>
    <div class="form-group">
        <label for="customfullname">Custom Fullname</label>
        <input type="text" id="customfullname" class="form-control" placeholder="Lastname, Firstname" 
            :value="value"
            @change="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style scoped>

</style>


