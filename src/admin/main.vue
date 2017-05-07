<template>
    <Row>
        <Menu mode="horizontal" :theme="theme" active-name="1">
            <Menu-item name="0">
                AcrossW Control
            </Menu-item>
            <router-link to='/admin/package'>
                <Menu-item name="1">
                    <Icon type="ios-paper"></Icon>
                    套餐管理
                </Menu-item>
            </router-link >
            <router-link to='/admin/user'>
                <Menu-item name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </Menu-item>
            </router-link>    
            <Menu-item name="3">
                <Icon type="settings"></Icon>
                综合设置
            </Menu-item>
        </Menu>
        <transition name='switch'>
            <Col span="22">
            <router-view></router-view>
            </Col>
        </transition>
    </Row>
</template>
<script>
export default {
    data() {
        return {
            theme: 'primary'
        }
    },
    created() {
        this.$http.post(this.$store.state.apiUrl + '/admin/verify')
            .then(response => {
                if (response.data.type == 'success') {
                    if (response.data.mes.is_admin !== 1) {
                        console.log(response.data.mes.is_admin)
                        this.$router.push('/')
                    }
                }
            })
            .catch(error => {

            })
    }
}
</script>
<style>
.left-menu {
    float: left;
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
