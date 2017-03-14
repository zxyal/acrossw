
<template>
    <div id='index-main'>
        <h3>{{email}}</h3>
        <p>You are logged in</p>
        <div class="index-main-btn">
            <router-link to='user' tag='span'>进入控制面板 </router-link>/
            <span @click='signOut'> 退出登陆</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                email: ''
            }
        },
        created() {
            let jsonInfo = localStorage.getItem('acrossw-info')

            if (jsonInfo) {
                let info = JSON.parse(jsonInfo);

                this.email = info.email;
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
        }
}
</script>