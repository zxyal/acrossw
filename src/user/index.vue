<template>
    <router-view></router-view>
</template>

<script>
    export default {
        data() {
            return {
                mask: {
                    display: 'none'
                },
                showIndex: true,
                showBg: false
            }
        },
        methods: {
            urlChange: function (r) {
                console.log(r)
            }
        },
    }

</script>

<style>

</style>