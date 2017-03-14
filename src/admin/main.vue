<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to='/admin' tag='span'>Users</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to='/admin/package' tag='span'>Packages</router-link>
            </el-menu-item>
        </el-menu>

        <transition name='switch'>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect: r => {
                this.activeIndex = r
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
