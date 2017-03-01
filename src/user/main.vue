<template>
    <transition name='switch'>
        <router-view></router-view>
    </transition>
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
    .switch-enter-active,
    .switch-leave-active {
        transition: all .4s;
    }
    
    .switch-enter,
    .switch-leave-to {
        opacity: 0;
        margin-top: 0;
    }
</style>