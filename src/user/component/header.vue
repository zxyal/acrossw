<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            控制面板
        </Menu-item>
        <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            服务
        </Menu-item>
        <Menu-item name="3">
            <Icon type="settings"></Icon>
            关于
        </Menu-item>
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

            }
        },
        created() {

            //获取email
            let jsonInfo = localStorage.getItem('acrossw-info');
            if (jsonInfo) {
                let info = JSON.parse(jsonInfo);
                this.email = info.email
            }
        },
        methods: {
            signOut() {
                localStorage.removeItem('acrossw-info')
                localStorage.removeItem('acrossw-token')

                this.$Message.success('已退出登录', 2, n => {
                    this.$router.push('/')
                })
            }
        },
    }
</script>