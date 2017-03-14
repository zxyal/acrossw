<template>
    <div>
        <transition name="switch">
            <router-view></router-view>
        </transition>
        <div id="bg"></div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                //fullLoading
                fullscreenLoading: false
            }
        },
        created() {
            //检测本地
            let jsonInfo = localStorage.getItem('acrossw-info')
            let token = localStorage.getItem('acrossw-token')

            if (jsonInfo && token) {
                //检测本地
                let jsonInfo = localStorage.getItem('acrossw-info')
                let token = localStorage.getItem('acrossw-token')

                console.log('log')
                if (jsonInfo && token) {
                    this.$router.push('haslogged')
                }
            }

        },
        methods: {
            fullscreenLoading: r => {
                alert(r)
            }
        }
}
</script>
<style>
.switch-enter-active,
.switch-leave-active {
    transition: all 1s ease-in-out;
}

.switch-enter,
.switch-leave-to {
    transition: all 1s ease-in-out;
    opacity: 0;
    margin-top: 0;
}

#bg {
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('./../assets/bg.jpg') no-repeat;
    background-size: cover;
}
</style>
