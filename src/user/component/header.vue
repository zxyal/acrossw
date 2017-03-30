<template>
    <Menu mode="horizontal" :theme="theme1" :active-name="activeIndex">
        <router-link to='/user' tag='a'>
            <Menu-item name="/user">控制面板</Menu-item>
        </router-link>
        <router-link to='/user/pricing' tag='a'>
            <Menu-item name="/user/pricing">套餐</Menu-item>
        </router-link>
        <router-link to='/user/download' tag='a'>
            <Menu-item name="/user/download">客户端</Menu-item>
        </router-link>
        <Menu-item name="about" @click.native="about">关于</Menu-item>
        <Submenu name="4" style="float:right">
            <template slot="title">
                {{email}}
            </template>
            <Menu-item name="4-0" @click.native="signOut">退出登录</Menu-item>
        </Submenu>
    </Menu>
</template>
<script>
export default {
    data() {
            return {
                theme1: 'dark',
                email: '',
                activeIndex: '/user'
            }
        },
        created() {

            //获取email
            let jsonInfo = localStorage.getItem('acrossw-info');
            if (jsonInfo) {
                let info = JSON.parse(jsonInfo);
                this.email = info.email
            }

            this.activeIndex = this.$route.path
        },
        methods: {
            signOut() {
                localStorage.removeItem('acrossw-info')
                localStorage.removeItem('acrossw-token')

                this.$Message.success('已退出登录', 2, n => {
                    this.$router.push('/')
                })
            },
            about() {
                this.$Modal.info({
                    title: 'About',
                    content: 'Youziyo'
                })
            }
        },
}
</script>
