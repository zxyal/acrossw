<template>
    <div v-loading.fullscreen.lock='fullscreenLoading'>
        <transition name='switch'>
            <router-view></router-view>
        </transition>
        <div id='bg'></div>
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
        created () {
            this.$on('loading', this.fullscreenLoading)
            
            //检测本地
            let jsonInfo = localStorage.getItem('youziyo-info')

            if (jsonInfo) {
                let info = JSON.parse(jsonInfo);
                let nowTime = new Date().getTime().toString().substr(0, 10);
                if (info.overdue_time < nowTime) {
                    localStorage.removeItem('youziyo-info')
                    localStorage.removeItem('youziyo-token')
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