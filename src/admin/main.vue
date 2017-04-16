<template>
    <Row>
        <Col span="4"
             class="left-menu">
        <Menu :theme="theme3"
              active-name="1">
            <Menu-group title="内容管理">
                <router-link to="/admin/package"
                             tag="a">
                    <Menu-item name="1">
                        <Icon type="document-text"></Icon>套餐</Menu-item>
                </router-link>
                <Menu-item name="2">
                    <Icon type="chatbubbles"></Icon>用户</Menu-item>
                <Menu-item name="3">
                    <Icon type="chatbubbles"></Icon>节点</Menu-item>
                <Menu-item name="3">
                    <Icon type="chatbubbles"></Icon>News</Menu-item>
            </Menu-group>
            <Menu-group title="统计分析">
                <Menu-item name="3">
                    <Icon type="heart"></Icon>
                    交易记录
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="heart-broken"></Icon>
                    流失用户
                </Menu-item>
            </Menu-group>
        </Menu>
        </Col>
        <transition name='switch'>
            <Col span="18">
            <router-view></router-view>
            </Col>
        </transition>
    </Row>
</template>
<script>
export default {
    data() {
        return {
            theme3: 'light'
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
