<template>
    <div>
        <transition name='switch'>
            <router-view></router-view>
        </transition>
        <div id='bg'></div>
    </div>
</template>

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