<template>
    <div id='index-login'>
        <i-form :model="formLogin" :rules="formLoginRule" label-position="top" id='index-login-form'>
            <Form-item label="E-MAIL" prop="email">
                <i-input type="text" v-model="formLogin.email" number></i-input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <i-input type="password" v-model="formLogin.password"></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" long @click.native="loginPost" :loading="clickLoading">
                    <span v-if="!clickLoading"> 登陆</span>
                    <span v-else>Loading...</span>
                </i-button>
            </Form-item>
        </i-form>
        <router-link to='register' tag='div' class="t-btn">还没注册？<strong> 立即注册</strong>
            <Icon style="width: 25px" type="ios-arrow-forward"></Icon>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
            return {
                clickLoading: false,
                formLogin: {
                    email: '',
                    password: '',
                },
                formLoginRule: {
                    email: [{
                        type: 'email',
                        message: '请填写正确的E-Mail',
                        trigger: 'blur'
                    }, ],
                    password: [{
                        message: '请填写密码',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        min: 6,
                        message: '密码不能少于6位',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            loginPost() {
                this.clickLoading = true

                this.$http.post(this.$store.state.apiUrl + '/user/login', this.formLogin).then(r => {

                    this.clickLoading = false

                    if (r.body.type == 'success') {
                        localStorage.setItem('acrossw-token', r.body.token)
                        localStorage.setItem('acrossw-info', r.body.info)

                        this.$Message.success('登陆成功', 2, n => {
                            this.$router.push('user')
                        })

                    } else if (r.body.type == 'fail') {
                        this.$Message.error(r.body.mes[0], 2)
                    }

                }, r => {
                    this.clickLoading = false
                    this.$Message.error('网络错误，请稍后重试', 2)
                });

            },
        }
}
</script>
