<template>
    <div id='index-register'>
        <i-form :model="registerForm" :rules="rules" label-position="top" id='index-register-form'>
            <Form-item label="E-MAIL" prop="email">
                <i-input type="text" v-model="registerForm.email" number></i-input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <i-input type="password" v-model="registerForm.password"></i-input>
            </Form-item>
            <Form-item label="重复密码" prop="rpassword">
                <i-input type="password" v-model="registerForm.rpassword"></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" long @click='registerPost' :loading="clickregister">
                    <span v-if="!clickregister"> 注册</span>
                    <span v-else>Loading...</span>
                </i-button>
            </Form-item>
        </i-form>
        <router-link to='login' tag='div' class="t-btn">已经注册？<strong> 立即登陆</strong><Icon style="width: 25px" type="ios-arrow-forward"></Icon></router-link>
    </div>
</template>

<script>
export default {
    data() {
            return {
                clickregister: false,

                registerForm: {
                    email: '',
                    password: '',
                    rpassword: ''
                },
                rules: {
                    email: [{
                        type: 'email',
                        message: '请填写正确的E-Mail',
                        trigger: 'blur'
                    }, ]
                },
            }
        },
        methods: {
            //注册
            registerPost: function(mes) {
                this.clickregister = true

                this.$http.post(this.$store.state.apiUrl + '/user/register', this.registerForm).then(r => {

                    if (r.body.type == 'success') {

                        localStorage.setItem('youziyo-token', r.body.token)
                        localStorage.setItem('youziyo-info', r.body.info)

                        this.$message({
                            message: '注册成功',
                            type: 'success',
                            onClose: c => {
                                this.$router.push('user')
                            }
                        });

                    } else if (r.body.type == 'fail') {
                        this.$message({
                            message: r.body.mes[0],
                            type: 'error',
                        });
                    }
                }, r => {
                    this.$message({
                        message: '网络错误，请稍后重试',
                        type: 'error',
                    });
                });

            },
        },
}
</script>
