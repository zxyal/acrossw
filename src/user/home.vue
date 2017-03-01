<template>
    <div>
        <header>
            <div class="header-nav">
                <div class="header-nav-li">首页</div>
                <div class="header-nav-li">服务</div>
                <div class="header-nav-li">关于</div>
            </div>
            <div class="header-user">
                <span>{{email}}</span>
            </div>
        </header>
        <div id='main'>
            <div class="box-info">
                <p class="box-title">服务器状态</p>
                <div class="box-server-list">
                    <div class="server-list-child">
                        <span>la.paplane.cn</span>
                        <div class="server-status-normal"></div>
                    </div>
                    <div class="server-list-child">
                        <span>la1.paplane.cn</span>
                        <div class="server-status-normal"></div>
                    </div>
                    <div class="server-list-child">
                        <span>jp.paplane.cn</span>
                        <div class="server-status-danger"></div>
                    </div>
                </div>
            </div>
            <div class="box-info" style="width: 400px">
                <p class="box-title">套餐信息</p>
            </div>
            <div class="box-info " style="width: 400px">
                <p class="box-title">已使用流量</p>
                <el-progress type="circle" :percentage="26">大大的</el-progress>
            </div>

            <div class="box-info" style="width: 400px">
                <p class="box-title">动态</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mask: {
                    display: 'none'
                },
                showIndex: true,
                showBg: false,
                email: 'haha',
            }
        },
        created() {
            let jsonInfo = localStorage.getItem('youziyo-info');
            if (jsonInfo) {
                let info = JSON.parse(jsonInfo);
                this.email = info.email
            }

            this.$http.post('http://acrossw.cn/home', this.loginForm).then(r => {

                console.log(r)
                
                if (r.body.type == 'success') {


                } else if (r.body.type == 'fail') {

                }
            }, r => {
                alert('error')
            });
        },
        methods: {
        },
    }

</script>

<style>
    body {
        background-color: #F9FAFC;
    }
    
    header {
        background-color: #464c5b;
        height: 55px;
        width: 100vw;
    }
    
    #main {
        display: flex;
        width: 70%;
        flex-wrap: wrap;
        margin: 0 auto;
        /*justify-content: center;*/
        margin-top: 40px;
        transition: all .4s;
    }
    
    .header-nav {}
    
    .header-user {
        float: right;
    }
    
    .header-nav-li {
        text-align: center;
        font-size: 14px;
        color: #fff;
        width: 75px;
        float: left;
        line-height: 55px;
        /*margin-right: 30px;*/
    }
    
    .header-nav-li:hover {
        background-color: #4e5565;
    }
    
    .header-user span {
        text-align: center;
        line-height: 55px;
        color: #fff;
        font-size: 14px;
    }
    /*  信息展示块   */
    
    .box-info {
        width: 250px;
        height: 200px;
        padding: 20px;
        margin-left: 30px;
        margin-top: 30px;
        background-color: #fff;
        box-shadow: 0 0 3px 2px #efefef;
        transition: all .4s;
    }
    
    .box-title {
        color: #464c5b;
        height: 40px;
        line-height: 40px;
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
    }
    
    .box-server-list .server-list-child {
        font-size: 14px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #6b6b6b;
    }
    /*  服务器状态块  */
    
    .server-status-normal {
        width: 10px;
        height: 10px;
        background-color: #20A0FF;
        border-radius: 3px;
        box-shadow: 0 0 5px 0px #20A0FF;
    }
    
    .server-status-warning {
        width: 10px;
        height: 10px;
        background-color: #F7BA2A;
        border-radius: 3px;
        box-shadow: 0 0 2px 1px #F7BA2A;
    }
    
    .server-status-danger {
        width: 10px;
        height: 10px;
        background-color: #FF4949;
        border-radius: 3px;
        box-shadow: 0 0 2px 1px #FF4949;
    }
</style>