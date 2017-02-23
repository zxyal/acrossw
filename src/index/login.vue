<template>
    <div id='index-login'>
        <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" id='index-login-form'>
            <el-form-item label="E-Mail">
                <el-input v-model="loginForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click='loginPost' :loading="clickLoading" style="width: 100%">登陆</el-button>
        </el-form>
        <router-link to='register' tag='div' class="t-btn">还未注册？<strong> 立即注册</strong><i style="width: 25px" class="el-icon-arrow-right"></i></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                clickLoading: false,

                loginForm: {
                    email: '',
                    password: ''
                },
                //切换登陆
                switchLogin: true,
            }
        },
        methods: {
            //登陆
            loginPost: function (mes) {
                this.clickLoginBtn = true

                this.$http.post('http://acrossw.cn/user/login', this.loginForm).then(r => {
                    if (r.body.type == 'success') {
                        this.clickLoginBtn = false
                        localStorage.setItem('youziyo-token', r.body.token)
                        this.$router.push('user')
                        this.$emit('loading', true)
                        
                    } else if (r.body.type == 'fail') {
                        let errorMes = ''
                        r.body.mes.forEach((v, i) => {
                            errorMes += v + ' / '
                        })
                        this.$notify.error({
                            message: errorMes
                        });
                    }
                }, r => {

                });

            },
        }
    }

</script>