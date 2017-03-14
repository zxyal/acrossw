<template>
    <div id="user">
        <transition name='switch'>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
            return {
                mask: {
                    display: 'none'
                },
            }
        },
        methods: {

        },
        beforeCreate() {
            let jsonInfo = localStorage.getItem('acrossw-info')
            let token = localStorage.getItem('acrossw-token')

            if (!jsonInfo && !token) {

                this.$router.push({
                    name: 'main'
                })

            }
        }
}
</script>
<style>
#user {
    background: #eee;
    height: 100vh;
}

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
