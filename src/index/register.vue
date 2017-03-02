<template>
    <div id='index-register'>
        <el-form :label-position="labelPosition" label-width="80px" :model="registerForm" id='index-register-form'>
            <el-form-item label="E-Mail">
                <el-input v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码">
                <el-input type="password" v-model="registerForm.rpassword"></el-input>
            </el-form-item>
            <el-button type="primary" @click='registerPost' :loading="clickregister" style="width: 100%">注册</el-button>
        </el-form>
        <router-link to='login' tag='div' class="t-btn">已经注册？<strong> 立即登录</strong><i style="width: 25px" class="el-icon-arrow-right"></i></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                clickregister: false,
                switchRegister: true,

                registerForm: {
                    email: '',
                    password: '',
                    rpassword: ''
                },

            }
        },
        methods: {
            //注册
            registerPost: function (mes) {
                this.clickregister = true

                this.$http.post(this.$store.state.apiUrl+'/register', this.registerForm).then(r => {

                    if (r.body.type == 'success') {

                        localStorage.setItem('youziyo-token', r.body.token)
                        localStorage.setItem('youziyo-info', r.body.info)
                        this.clickregister = false

                        this.$message({
                            message: '注册成功',
                            type: 'success',
                            onClose: c => {
                                this.$router.push('user')
                            }
                        });

                    } else if (r.body.type == 'fail') {
                        this.clickregister = false

                        let errorMes = ''
                        r.body.mes.forEach((v, i) => {
                            errorMes += v + ' / '
                        })
                        this.$notify.error({
                            message: errorMes
                        });
                    }
                }, r => {
                    // error callback
                });

            },
        },
    }

</script>